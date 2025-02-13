// Valentine's Day Website - Interactive Script

// 🎯 Corrected script.js for Valentine's Day Website

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const questionContainer = document.getElementById('questionContainer');
    const questionText = document.getElementById('questionText');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const pageTitle = document.getElementById('page-title');
    const music = new Audio(window.VALENTINE_CONFIG.music.musicUrl);

    // Fix: Set Page Title Properly
    pageTitle.innerText = window.VALENTINE_CONFIG.pageTitle;

    // 🎵 Music Controls
    if (window.VALENTINE_CONFIG.music.enabled && window.VALENTINE_CONFIG.music.autoplay) {
        music.volume = window.VALENTINE_CONFIG.music.volume;
        music.loop = true;
        music.play().catch(() => console.warn('Autoplay blocked by browser policies.'));
    }

    // 💖 Start Button Event Listener
    startButton.addEventListener('click', () => {
        alert(`Hey ${window.VALENTINE_CONFIG.valentineName}, this page is for you! ❤️`);
        questionContainer.style.display = 'block';
        startButton.style.display = 'none';
        showQuestion(window.VALENTINE_CONFIG.questions.first);
    });

    // ❓ Display Questions
    function showQuestion(questionObj) {
        questionText.textContent = questionObj.text;
        yesButton.textContent = questionObj.yesBtn;
        noButton.textContent = questionObj.noBtn;

        yesButton.onclick = () => alert(questionObj.secretAnswer || 'Yay! 😊');
        noButton.onclick = () => alert('Oh no! 😔 Try again!');
    }
});
