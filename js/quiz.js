// Multiple choice quiz: see image, pick correct name from 4 options

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function renderQuiz() {
    const container = document.getElementById('quizContent');
    
    const html = `
        <div class="quiz-setup" id="quizSetup">
            <h2>🔬 Species Quiz</h2>
            <p>Identify the species shown in each image. You'll be shown all 25 species.</p>
            <button class="btn" onclick="startQuiz()">Start Quiz</button>
        </div>
        <div class="quiz-active" id="quizActive">
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" id="quizProgressFill" style="width: 0%"></div>
            </div>
            <div id="quizQuestionArea"></div>
        </div>
        <div class="quiz-score" id="quizScore" style="display:none;">
            <h3 id="quizFinalScore"></h3>
            <p id="quizFinalMessage"></p>
            <button class="btn" onclick="renderQuiz()">Try Again</button>
        </div>
    `;
    
    container.innerHTML = html;
}

function startQuiz() {
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').classList.add('active');
    document.getElementById('quizScore').style.display = 'none';
    
    // Build questions: pick a species, show image, 4 options (1 correct + 3 random)
    quizQuestions = [];
    const shuffled = [...SPECIES_DATA];
    shuffleArray(shuffled);
    
    for (const correct of shuffled) {
        const options = [correct];
        const others = SPECIES_DATA.filter(s => s.id !== correct.id);
        shuffleArray(others);
        for (let i = 0; i < 3 && i < others.length; i++) {
            options.push(others[i]);
        }
        shuffleArray(options);
        quizQuestions.push({
            species: correct,
            options: options,
            correctId: correct.id
        });
    }
    
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const q = quizQuestions[quizIndex];
    quizAnswered = false;
    
    const area = document.getElementById('quizQuestionArea');
    
    const html = `
        <div class="quiz-question">
            <img src="${q.species.imageUrl}" alt="Species image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%2250%22 x=%2250%22 text-anchor=%22middle%22 font-size=%2230%22>📷</text></svg>'">
            <h3>What species is this?</h3>
        </div>
        <div class="quiz-options" id="quizOptions">
            ${q.options.map(o => `
                <div class="quiz-option" data-id="${o.id}" onclick="answerQuiz(this, ${o.id})">
                    ${o.commonName}
                </div>
            `).join('')}
        </div>
    `;
    
    area.innerHTML = html;
    
    // Update progress
    const pct = ((quizIndex) / quizQuestions.length) * 100;
    document.getElementById('quizProgressFill').style.width = pct + '%';
}

function answerQuiz(el, selectedId) {
    if (quizAnswered) return;
    quizAnswered = true;
    
    const q = quizQuestions[quizIndex];
    const correct = selectedId === q.correctId;
    
    if (correct) quizScore++;
    
    // Highlight correct/wrong
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.classList.add('disabled');
        const id = parseInt(opt.dataset.id);
        if (id === q.correctId) opt.classList.add('correct');
        if (id === selectedId && !correct) opt.classList.add('wrong');
    });
    
    // Auto-advance after delay
    setTimeout(() => {
        quizIndex++;
        showQuizQuestion();
    }, 1200);
}

function showQuizResults() {
    document.getElementById('quizActive').classList.remove('active');
    const scoreDiv = document.getElementById('quizScore');
    scoreDiv.style.display = 'block';
    
    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    document.getElementById('quizFinalScore').textContent = `${quizScore} / ${quizQuestions.length} (${pct}%)`;
    
    let msg;
    if (pct >= 90) msg = "🌟 Outstanding! You're a species ID expert!";
    else if (pct >= 75) msg = "👏 Great job! Almost there!";
    else if (pct >= 50) msg = "👍 Good start! Keep practicing!";
    else msg = "📚 Keep studying! You'll get better!";
    
    document.getElementById('quizFinalMessage').textContent = msg;
}