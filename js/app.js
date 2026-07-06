// Main app: navigation, page switching, utility functions

// ---- Navigation ----
document.addEventListener('DOMContentLoaded', function() {
    // Set up nav buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateTo(page);
        });
    });
    
    // Info button
    document.getElementById('infoBtn').addEventListener('click', function() {
        document.getElementById('infoModal').classList.add('open');
    });
    
    // Close info modal on overlay click
    document.getElementById('infoModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('open');
        }
    });
    
    // Register service worker for offline support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('Service worker registration failed:', err);
        });
    }
    
    // Initial render
    renderLibrary();

    // Zonation scroll tracking for library
    const main = document.getElementById('mainContent');
    if (main) {
        main.addEventListener('scroll', function() {
            const topBtn = document.querySelector('.nav-item[data-page="library"]');
            if (topBtn && topBtn.classList.contains('active')) {
                updateZoneIndicator();
            }
        });
    }
});

function navigateTo(page) {
    // Update nav buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(`page-${page}`).classList.add('active');
    
    // Render the page content
    switch (page) {
        case 'library':
            renderLibrary();
            break;
        case 'flashcards':
            renderFlashcards();
            break;
        case 'quiz':
            renderQuiz();
            break;
        case 'matching':
            renderMatching();
            break;
        case 'timed':
            renderTimed();
            break;
    }
    
    // Scroll to top
    document.getElementById('mainContent').scrollTop = 0;
}

// ---- Utility: shuffle array in place ----
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}