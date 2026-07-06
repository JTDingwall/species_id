// Flashcard game: see image, tap to reveal name

let flashcardIndex = 0;
let flashcardOrder = [];
let flashcardFlipped = false;

function renderFlashcards() {
    const container = document.getElementById('flashcardContent');
    
    // Shuffle species order
    flashcardOrder = [...SPECIES_DATA];
    shuffleArray(flashcardOrder);
    flashcardIndex = 0;
    flashcardFlipped = false;
    
    const html = `
        <div class="flashcard-container">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <div class="flashcard-inner" id="flashcardInner">
                    <div class="flashcard-front">
                        <img src="${flashcardOrder[0].imageUrl}" alt="Species image" id="flashcardImg">
                        <div class="card-prompt">Tap to reveal name</div>
                    </div>
                    <div class="flashcard-back">
                        <h3 id="fcName">${flashcardOrder[0].commonName}</h3>
                        <div class="latin-name" id="fcLatin">${flashcardOrder[0].latinName}</div>
                    </div>
                </div>
            </div>
            <div class="flashcard-progress" id="fcProgress">1 / ${flashcardOrder.length}</div>
            <div class="flashcard-actions">
                <button onclick="prevFlashcard()">◀ Previous</button>
                <button class="secondary" onclick="nextFlashcard()">Next ▶</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function flipFlashcard() {
    if (flashcardFlipped) return;
    flashcardFlipped = true;
    document.getElementById('flashcardInner').classList.add('flipped');
}

function nextFlashcard() {
    if (flashcardIndex < flashcardOrder.length - 1) {
        flashcardIndex++;
        flashcardFlipped = false;
        updateFlashcard();
    }
}

function prevFlashcard() {
    if (flashcardIndex > 0) {
        flashcardIndex--;
        flashcardFlipped = false;
        updateFlashcard();
    }
}

function updateFlashcard() {
    const species = flashcardOrder[flashcardIndex];
    const inner = document.getElementById('flashcardInner');
    inner.classList.remove('flipped');
    
    // Update front
    document.getElementById('flashcardImg').src = species.imageUrl;
    document.getElementById('flashcardImg').alt = species.commonName;
    
    // Update back
    document.getElementById('fcName').textContent = species.commonName;
    document.getElementById('fcLatin').textContent = species.latinName;
    
    // Update progress
    document.getElementById('fcProgress').textContent = `${flashcardIndex + 1} / ${flashcardOrder.length}`;
    
    // Re-flip after a brief delay if it was already revealed
    // (user needs to tap again to reveal)
}