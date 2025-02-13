// Valentine's Day Website - Interactive Script

// 🎯 Corrected script.js for Valentine's Day Website

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const questionContainer = document.getElementById('questionContainer');
    const questionText = document.getElementById('questionText');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const music = new Audio(window.VALENTINE_CONFIG.music.musicUrl);

    // 🎵 Music Controls
    if (window.VALENTINE_CONFIG.music.enabled && window.VALENTINE_CONFIG.music.autoplay) {
        music.volume = window.VALENTINE_CONFIG.music.volume;
        music.loop = true;
        music.play().catch(() => console.log('Autoplay blocked'));
    }

    // 💖 Start Button Event
    startButton.addEventListener('click', () => {
        questionContainer.style.display = 'block';
        startButton.style.display = 'none';
        showQuestion(window.VALENTINE_CONFIG.questions.first);
    });

    // ❓ Show Questions Function
    function showQuestion(questionObj) {
        questionText.textContent = questionObj.text;
        yesButton.textContent = questionObj.yesBtn;
        noButton.textContent = questionObj.noBtn;

        yesButton.onclick = () => alert(questionObj.secretAnswer || 'Yay! 😊');
        noButton.onclick = () => alert('Oh no! 😔 Try again!');
    }
});

    // Start with the first question
    showQuestion(window.VALENTINE_CONFIG.questions.first);
});
