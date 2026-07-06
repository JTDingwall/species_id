import re
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace each imageUrl with local path
# Pattern: imageUrl: "https://upload.wikimedia.org/..." 
# Replace with: imageUrl: "images/species-XX.jpg"
# We need to keep track of the species ID from context (increment per match)

count = 0
def replace_url(match):
    global count
    count += 1
    return f'imageUrl: "images/species-{count:02d}.jpg"'

new_content = re.sub(r'imageUrl:\s*"https://upload\.wikimedia\.org/[^"]*"', replace_url, content)

print(f"Replaced {count} image URLs with local paths")

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done. data.js updated.")