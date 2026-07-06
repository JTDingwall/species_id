import json
import os
import re
import time
import urllib.request
import urllib.parse

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

species_entries = re.findall(
    r"id:\s*(\d+),\s*commonName:\s*\"([^\"]+)\",\s*latinName:\s*\"([^\"]+)\"",
    content
)

print(f"Found {len(species_entries)} species entries")
os.makedirs('images', exist_ok=True)

HEADERS = {'User-Agent': 'SpeciesIDApp/1.0 (github.com/JTDingwall/species_id)'}
TIMEOUT = 20
DELAY = 4.0  # seconds between species

def api_request(params, retries=3):
    """Make a Wikimedia API request with retry on 429."""
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
                return json.loads(resp.read())
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = (attempt + 1) * 10
                print(f"    Rate limited, waiting {wait}s...")
                time.sleep(wait)
            else:
                raise
        except Exception:
            if attempt < retries - 1:
                time.sleep(5)
            else:
                raise
    return None

def search_image(query):
    """Search Wikimedia Commons for an image."""
    data = api_request({
        'action': 'query',
        'list': 'search',
        'srsearch': query,
        'srnamespace': '6',
        'srlimit': '3',
        'format': 'json'
    })
    if not data:
        return None
    titles = [r['title'] for r in data.get('query', {}).get('search', [])]
    if not titles:
        return None
    
    data2 = api_request({
        'action': 'query',
        'titles': '|'.join(titles),
        'prop': 'imageinfo',
        'iiprop': 'url|size',
        'iiurlwidth': '500',
        'format': 'json'
    })
    if not data2:
        return None
    
    pages = data2.get('query', {}).get('pages', {})
    for pid, page in pages.items():
        if 'imageinfo' in page:
            for info in page['imageinfo']:
                thumb = info.get('thumburl')
                if thumb:
                    return thumb
    return None

def download_file(url, filename, retries=3):
    for attempt in range(retries):
        try:
            r = urllib.request.Request(url, headers=HEADERS)
            data = urllib.request.urlopen(r, timeout=TIMEOUT).read()
            with open(filename, 'wb') as f:
                f.write(data)
            return len(data)
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = (attempt + 1) * 15
                print(f"    DL rate limited, waiting {wait}s...")
                time.sleep(wait)
            else:
                raise
        except Exception:
            if attempt < retries - 1:
                time.sleep(5)
            else:
                raise
    return 0

failed = []
for i, (sid, common, latin) in enumerate(species_entries):
    fn = f'images/species-{int(sid):02d}.jpg'
    if os.path.exists(fn) and os.path.getsize(fn) > 500:
        print(f"[{sid}/25] Already exists: {fn}")
        continue
    
    print(f"[{sid}/25] Searching: {common} ({latin})")
    
    url = search_image(f'"{latin}"')
    if not url:
        url = search_image(f'"{common}"')
    if not url:
        genus = latin.split()[0]
        url = search_image(f'{genus}')
    
    if url:
        print(f"  Found: {url}")
        try:
            size = download_file(url, fn)
            if size > 0:
                print(f"  Saved: {fn} ({size} bytes)")
            else:
                failed.append((sid, common, "Download empty"))
        except Exception as e:
            print(f"  Download FAILED: {e}")
            failed.append((sid, common, str(e)))
    else:
        print(f"  No image found")
        failed.append((sid, common, "No match"))
    
    # Longer delay after each species
    time.sleep(DELAY)

print(f"\n{'='*50}")
print(f"Done. {25 - len(failed)} succeeded, {len(failed)} failed.")
for sid, name, reason in failed:
    print(f"  {sid}. {name}: {reason}")