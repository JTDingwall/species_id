// Timed challenge: 60 seconds, multiple choice answers

let timedSpecies = [];
let timedIndex = 0;
let timedScore = 0;
let timedTimeLeft = 60;
let timedTimer = null;
let timedAnswered = false;

function renderTimed() {
    const container = document.getElementById('timedContent');
    
    const html = `
        <div class="timed-setup" id="timedSetup">
            <h2>⏱️ Timed Challenge</h2>
            <p>Identify as many species as you can in <strong>60 seconds</strong>!</p>
            <button class="btn" onclick="startTimed()">Start Challenge</button>
        </div>
        <div id="timedActive" style="display:none;">
            <div class="timer" id="timerDisplay">60</div>
            <div id="timedQuestionArea"></div>
        </div>
        <div class="timed-score" id="timedScore" style="display:none;">
            <h3 id="timedFinalScore"></h3>
            <p class="score-detail" id="timedFinalDetail"></p>
            <button class="btn" onclick="renderTimed()">Try Again</button>
        </div>
    `;
    
    container.innerHTML = html;
}

function startTimed() {
    document.getElementById('timedSetup').style.display = 'none';
    document.getElementById('timedActive').style.display = 'block';
    document.getElementById('timedScore').style.display = 'none';
    
    timedScore = 0;
    timedIndex = 0;
    timedTimeLeft = 60;
    timedAnswered = false;
    
    // Build a shuffled question bank from all species
    timedSpecies = [...SPECIES_DATA];
    shuffleArray(timedSpecies);
    
    // Show timer
    document.getElementById('timerDisplay').textContent = '60';
    document.getElementById('timerDisplay').classList.remove('warning');
    
    showTimedQuestion();
    
    // Start countdown
    timedTimer = setInterval(() => {
        timedTimeLeft--;
        document.getElementById('timerDisplay').textContent = timedTimeLeft;
        
        if (timedTimeLeft <= 10) {
            document.getElementById('timerDisplay').classList.add('warning');
        }
        
        if (timedTimeLeft <= 0) {
            clearInterval(timedTimer);
            endTimed();
        }
    }, 1000);
}

function showTimedQuestion() {
    // If we've gone through all species, shuffle and restart
    if (timedIndex >= timedSpecies.length) {
        shuffleArray(timedSpecies);
        timedIndex = 0;
    }
    
    const current = timedSpecies[timedIndex];
    timedAnswered = false;
    
    // Generate 4 options (1 correct + 3 random)
    const options = [current];
    const others = SPECIES_DATA.filter(s => s.id !== current.id);
    shuffleArray(others);
    for (let i = 0; i < 3 && i < others.length; i++) {
        options.push(others[i]);
    }
    shuffleArray(options);
    
    const area = document.getElementById('timedQuestionArea');
    
    const html = `
        <div class="quiz-question">
            <img class="timed-question-img" src="${current.imageUrl}" alt="Species image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%2250%22 x=%2250%22 text-anchor=%22middle%22 font-size=%2230%22>📷</text></svg>'">
            <h3>What species is this?</h3>
        </div>
        <div class="quiz-options" id="timedOptions">
            ${options.map(o => `
                <div class="quiz-option" data-id="${o.id}" onclick="answerTimed(this, ${o.id})">
                    ${o.commonName}
                </div>
            `).join('')}
        </div>
    `;
    
    area.innerHTML = html;
}

function answerTimed(el, selectedId) {
    if (timedAnswered || timedTimeLeft <= 0) return;
    timedAnswered = true;
    
    const current = timedSpecies[timedIndex];
    const correct = selectedId === current.id;
    
    if (correct) timedScore++;
    
    // Highlight correct/wrong
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.classList.add('disabled');
        const id = parseInt(opt.dataset.id);
        if (id === current.id) opt.classList.add('correct');
        if (id === selectedId && !correct) opt.classList.add('wrong');
    });
    
    // Advance to next question
    setTimeout(() => {
        timedIndex++;
        showTimedQuestion();
    }, 600);
}

function endTimed() {
    document.getElementById('timedActive').style.display = 'none';
    const scoreDiv = document.getElementById('timedScore');
    scoreDiv.style.display = 'block';
    
    document.getElementById('timedFinalScore').textContent = `${timedScore} identified`;
    
    let msg;
    if (timedScore >= 20) msg = "🌟 Incredible speed! You really know your species!";
    else if (timedScore >= 15) msg = "👏 Fast and accurate! Great work!";
    else if (timedScore >= 10) msg = "👍 Solid performance! Keep practicing!";
    else msg = "📚 Speed will come with practice! Keep studying!";
    
    document.getElementById('timedFinalDetail').textContent = msg;
}