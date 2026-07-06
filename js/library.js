// Library view: zonation-first, taxonomic sub-groups

let librarySortMode = 'zonation'; // 'zonation' or 'taxonomy'

// Zone ordering and mapping
const ZONE_ORDER = ['splash', 'high', 'mid', 'low', 'subtidal'];
const ZONE_HEADER_CLASS = {
    splash: 'zone-header-splash',
    high: 'zone-header-high',
    mid: 'zone-header-mid',
    low: 'zone-header-low',
    subtidal: 'zone-header-subtidal'
};
const ZONE_LABELS = {
    splash: 'Splash Zone',
    high: 'High Intertidal',
    mid: 'Mid Intertidal',
    low: 'Low Intertidal',
    subtidal: 'Subtidal'
};
const ZONE_EMOJI = {
    splash: '☀️',
    high: '🪨',
    mid: '🦀',
    low: '🐙',
    subtidal: '🌊'
};

function getZoneFromHabitat(habitat) {
    const h = habitat.toLowerCase();
    if (h.includes('splash')) return 'splash';
    if (h.includes('subtidal') || h.includes('sub')) return 'subtidal';
    if (h.includes('high')) return 'high';
    if (h.includes('mid')) return 'mid';
    if (h.includes('low')) return 'low';
    return 'mid'; // default
}

function renderLibrary() {
    // Hide/show the zonation sidebar
    const sidebar = document.getElementById('zoneSidebar');
    if (sidebar) {
        sidebar.style.display = (librarySortMode === 'zonation') ? 'flex' : 'none';
    }
    // Adjust main content left offset
    const main = document.getElementById('mainContent');
    if (main) {
        main.style.left = (librarySortMode === 'zonation') ? 'var(--zone-sidebar-width)' : '0';
    }

    const container = document.getElementById('libraryContent');
    const controls = `
        <input type="text" class="search-bar" id="librarySearch" placeholder="🔍 Search 125 species..." oninput="renderLibrary()">
        <div class="library-controls">
            <button class="sort-btn ${librarySortMode === 'zonation' ? 'active' : ''}" onclick="setLibrarySort('zonation')">🌊 By Zone</button>
            <button class="sort-btn ${librarySortMode === 'taxonomy' ? 'active' : ''}" onclick="setLibrarySort('taxonomy')">🔬 By Taxonomy</button>
        </div>
        <div id="libraryGrid"></div>
    `;
    container.innerHTML = controls;

    const searchTerm = document.getElementById('librarySearch')?.value?.toLowerCase() || '';
    const filtered = SPECIES_DATA.filter(s =>
        s.commonName.toLowerCase().includes(searchTerm) ||
        s.latinName.toLowerCase().includes(searchTerm) ||
        s.phylum.toLowerCase().includes(searchTerm)
    );

    if (librarySortMode === 'zonation') {
        renderZonationView(filtered);
    } else {
        renderTaxonomyView(filtered);
    }

    // Update zonation indicator after render
    setTimeout(updateZoneIndicator, 50);
}

function renderZonationView(species) {
    const grid = document.getElementById('libraryGrid');
    if (species.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:40px 0;">No species found matching your search.</p>';
        return;
    }

    // Group by zone, then by phylum within each zone
    const zoneGroups = {};
    for (const z of ZONE_ORDER) zoneGroups[z] = [];

    for (const s of species) {
        const zone = getZoneFromHabitat(s.habitat);
        if (zoneGroups[zone]) zoneGroups[zone].push(s);
    }

    let html = '';
    for (const zone of ZONE_ORDER) {
        const zoneSpecies = zoneGroups[zone];
        if (zoneSpecies.length === 0) continue;

        // Sub-group by phylum
        const phyla = {};
        for (const s of zoneSpecies) {
            if (!phyla[s.phylum]) phyla[s.phylum] = [];
            phyla[s.phylum].push(s);
        }

        html += `
            <div class="zone-section" data-zone="${zone}">
                <div class="zone-section-header ${ZONE_HEADER_CLASS[zone]}" onclick="toggleGroup(this)">
                    <span class="chevron open">▶</span>
                    <span>${ZONE_EMOJI[zone]} ${ZONE_LABELS[zone]}</span>
                    <span class="zone-count">${zoneSpecies.length}</span>
                </div>
                <div class="zone-body">
        `;

        for (const [phylum, phylumSpecies] of Object.entries(phyla)) {
            html += `
                <div class="taxon-group">
                    <div class="taxon-header" onclick="event.stopPropagation(); toggleTaxonGroup(this)">
                        <span class="chevron open">▶</span>
                        <span>${phylum}</span>
                        <span class="count">${phylumSpecies.length}</span>
                    </div>
                    <div class="species-grid">
                        ${phylumSpecies.map(s => renderSpeciesCard(s)).join('')}
                    </div>
                </div>
            `;
        }

        html += `</div></div>`;
    }

    grid.innerHTML = html;
    updateZoneIndicator();
}

function renderTaxonomyView(species) {
    const grid = document.getElementById('libraryGrid');
    if (species.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:40px 0;">No species found matching your search.</p>';
        return;
    }

    const groups = groupBy(species, 'phylum');
    let html = '';
    for (const [groupName, groupSpecies] of Object.entries(groups)) {
        html += `
            <div class="taxon-group" style="margin-bottom: 14px;">
                <div class="taxon-header" onclick="toggleTaxonGroup(this)" style="border-radius: 12px;">
                    <span class="chevron open">▶</span>
                    <span>${groupName}</span>
                    <span class="count">${groupSpecies.length}</span>
                </div>
                <div class="species-grid">
                    ${groupSpecies.map(s => renderSpeciesCard(s)).join('')}
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

function renderSpeciesCard(s) {
    return `
        <div class="species-card" onclick="openSpeciesModal(${s.id})">
            <img src="${s.imageUrl}" alt="${s.commonName}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\\'padding:20px;text-align:center\\'>📷<br><small>${s.commonName}</small></div>'">
            <div class="card-label">${s.commonName}</div>
        </div>
    `;
}

function setLibrarySort(mode) {
    librarySortMode = mode;
    renderLibrary();
}

function toggleGroup(header) {
    const body = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        chevron.classList.add('open');
    } else {
        body.style.display = 'none';
        chevron.classList.remove('open');
    }
}

function toggleTaxonGroup(header) {
    const grid = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    if (grid.style.display === 'none') {
        grid.style.display = 'grid';
        chevron.classList.add('open');
    } else {
        grid.style.display = 'none';
        chevron.classList.remove('open');
    }
}

function updateZoneIndicator() {
    if (librarySortMode !== 'zonation') return;
    const sidebar = document.getElementById('zoneSidebar');
    if (!sidebar || sidebar.style.display === 'none') return;
    const indicator = document.getElementById('zoneIndicator');
    const main = document.getElementById('mainContent');
    if (!indicator || !main) return;

    const scrollTop = main.scrollTop;
    const scrollHeight = main.scrollHeight - main.clientHeight;
    if (scrollHeight <= 0) {
        indicator.style.top = '0%';
        return;
    }

    const pct = Math.min(scrollTop / scrollHeight, 1);
    const sidebarHeight = sidebar.clientHeight - 32; // account for indicator height
    indicator.style.top = (pct * sidebarHeight) + 'px';
}

// ---- Species Modal ----
function openSpeciesModal(id) {
    const species = SPECIES_DATA.find(s => s.id === id);
    if (!species) return;

    document.getElementById('modalImg').src = species.imageUrl;
    document.getElementById('modalImg').alt = species.commonName;
    document.getElementById('modalCommonName').textContent = species.commonName;
    document.getElementById('modalLatinName').textContent = species.latinName;
    document.getElementById('modalTaxonomy').innerHTML = `
        <span>${species.phylum}</span>
        <span>${species.class}</span>
        <span>${species.order}</span>
    `;
    document.getElementById('modalHabitat').textContent = `📍 ${species.habitat}`;
    document.getElementById('modalDescription').textContent = species.description;
    document.getElementById('modalTips').innerHTML = species.identificationTips.map(t => `<li>${t}</li>`).join('');
    document.getElementById('modalCredit').textContent = species.imageCredit;

    document.getElementById('speciesModal').classList.add('open');
}

function closeModal() {
    document.getElementById('speciesModal').classList.remove('open');
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('speciesModal');
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

function groupBy(arr, key) {
    const groups = {};
    for (const item of arr) {
        const val = item[key];
        if (!groups[val]) groups[val] = [];
        groups[val].push(item);
    }
    const sorted = {};
    Object.keys(groups).sort().forEach(k => { sorted[k] = groups[k]; });
    return sorted;
}