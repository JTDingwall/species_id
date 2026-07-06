// Library view: taxonomic and habitat browsing

let librarySortMode = 'taxonomy';

function renderLibrary() {
    const container = document.getElementById('libraryContent');
    
    const controls = `
        <input type="text" class="search-bar" id="librarySearch" placeholder="🔍 Search species..." oninput="renderLibrary()">
        <div class="library-controls">
            <button class="sort-btn ${librarySortMode === 'taxonomy' ? 'active' : ''}" onclick="setLibrarySort('taxonomy')">🔬 By Taxonomy</button>
            <button class="sort-btn ${librarySortMode === 'habitat' ? 'active' : ''}" onclick="setLibrarySort('habitat')">🌊 By Habitat</button>
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
    
    let groups;
    if (librarySortMode === 'taxonomy') {
        groups = groupBy(filtered, 'phylum');
    } else {
        groups = groupBy(filtered, 'habitat');
    }
    
    const grid = document.getElementById('libraryGrid');
    let html = '';
    
    for (const [groupName, species] of Object.entries(groups)) {
        html += `
            <div class="taxon-group">
                <div class="taxon-header" onclick="toggleGroup(this)">
                    <span class="chevron open">▶</span>
                    <span>${groupName}</span>
                    <span class="count">${species.length}</span>
                </div>
                <div class="species-grid">
                    ${species.map(s => `
                        <div class="species-card" onclick="openSpeciesModal(${s.id})">
                            <img src="${s.imageUrl}" alt="${s.commonName}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\\'padding:20px;text-align:center\\'>📷<br><small>${s.commonName}</small></div>'">
                            <div class="card-label">${s.commonName}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    if (filtered.length === 0) {
        html = '<p style="text-align:center;color:var(--text-light);padding:40px 0;">No species found matching your search.</p>';
    }
    
    grid.innerHTML = html;
}

function setLibrarySort(mode) {
    librarySortMode = mode;
    renderLibrary();
}

function toggleGroup(header) {
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
    // Sort groups by name
    const sorted = {};
    Object.keys(groups).sort().forEach(k => { sorted[k] = groups[k]; });
    return sorted;
}