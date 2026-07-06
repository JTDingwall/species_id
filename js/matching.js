// Matching game: 6 pairs per round - match names to images

let matchPairs = [];
let matchSelected = null;
let matchedCount = 0;
let matchAttempts = 0;

function renderMatching() {
    const container = document.getElementById('matchingContent');
    
    const html = `
        <div class="quiz-setup" id="matchSetup">
            <h2>🔗 Matching Game</h2>
            <p>Match each species name to its picture. <strong>6 pairs per round.</strong></p>
            <button class="btn" onclick="startMatching()">Start Game</button>
        </div>
        <div id="matchActive" style="display:none;">
            <div class="matching-grid" id="matchGrid"></div>
            <div class="match-result" id="matchResult" style="display:none;"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

function startMatching() {
    document.getElementById('matchSetup').style.display = 'none';
    document.getElementById('matchActive').style.display = 'block';
    document.getElementById('matchResult').style.display = 'none';
    
    // Pick 6 random species
    const shuffled = [...SPECIES_DATA];
    shuffleArray(shuffled);
    matchPairs = shuffled.slice(0, 6);
    matchSelected = null;
    matchedCount = 0;
    matchAttempts = 0;
    
    // Create cards: 6 images + 6 name labels, shuffled together
    const imageCards = matchPairs.map((s, i) => ({
        type: 'image',
        speciesId: s.id,
        species: s,
        pairId: i,
        content: `<img src="${s.imageUrl}" alt="${s.commonName}" onerror="this.alt='📷'">`
    }));
    
    const nameCards = matchPairs.map((s, i) => ({
        type: 'name',
        speciesId: s.id,
        species: s,
        pairId: i,
        content: `<div class="match-label">${s.commonName}</div>`
    }));
    
    const allCards = [...imageCards, ...nameCards];
    shuffleArray(allCards);
    
    const grid = document.getElementById('matchGrid');
    grid.innerHTML = allCards.map((card, idx) => `
        <div class="matching-card" 
             data-type="${card.type}" 
             data-speciesid="${card.speciesId}" 
             data-pairid="${card.pairId}"
             data-index="${idx}"
             onclick="selectMatchCard(this)">
            ${card.content}
        </div>
    `).join('');
}

function selectMatchCard(el) {
    // Ignore if already matched
    if (el.classList.contains('matched')) return;
    
    // If nothing selected, select this one
    if (matchSelected === null) {
        // Clear previous selections
        document.querySelectorAll('.matching-card.selected').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        matchSelected = el;
        return;
    }
    
    // If clicking the same card, deselect
    if (matchSelected === el) {
        el.classList.remove('selected');
        matchSelected = null;
        return;
    }
    
    // If clicking a card of the same type, switch selection
    if (matchSelected.dataset.type === el.dataset.type) {
        matchSelected.classList.remove('selected');
        el.classList.add('selected');
        matchSelected = el;
        return;
    }
    
    // We have one image and one name selected - check match
    const firstId = parseInt(matchSelected.dataset.speciesid);
    const secondId = parseInt(el.dataset.speciesid);
    
    matchAttempts++;
    
    if (firstId === secondId) {
        // Correct match!
        matchSelected.classList.remove('selected');
        matchSelected.classList.add('matched');
        el.classList.add('matched');
        matchSelected = null;
        matchedCount++;
        
        if (matchedCount === matchPairs.length) {
            showMatchResult();
        }
    } else {
        // Wrong match - flash red
        matchSelected.classList.add('wrong');
        el.classList.add('wrong');
        
        const prev = matchSelected;
        matchSelected = null;
        
        setTimeout(() => {
            prev.classList.remove('wrong', 'selected');
            el.classList.remove('wrong');
        }, 400);
    }
}

function showMatchResult() {
    const resultDiv = document.getElementById('matchResult');
    resultDiv.style.display = 'block';
    
    let grade;
    if (matchAttempts === matchPairs.length) grade = "🌟 Perfect!";
    else if (matchAttempts <= matchPairs.length + 2) grade = "👏 Great job!";
    else if (matchAttempts <= matchPairs.length + 4) grade = "👍 Good effort!";
    else grade = "📚 Keep practicing!";
    
    resultDiv.innerHTML = `
        <h3>${grade}</h3>
        <p>Matched ${matchedCount} pairs in ${matchAttempts} attempts</p>
        <button class="btn" onclick="renderMatching()">Play Again</button>
    `;
}