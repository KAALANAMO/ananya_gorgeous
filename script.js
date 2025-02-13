// Valentine's Day Website - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const questionContainer = document.getElementById('questionContainer');
    const music = new Audio(window.VALENTINE_CONFIG.music.musicUrl);
    
    // Music Controls
    if (window.VALENTINE_CONFIG.music.enabled && window.VALENTINE_CONFIG.music.autoplay) {
        music.volume = window.VALENTINE_CONFIG.music.volume;
        music.play().catch(() => console.log('Autoplay blocked'));
    }

    startButton.addEventListener('click', () => {
        questionContainer.style.display = 'block';
        startButton.style.display = 'none';
    });

    // Question Handling Function
    function showQuestion(questionObj) {
        const questionElement = document.getElementById('questionText');
        const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');
        
        questionElement.textContent = questionObj.text;
        yesButton.textContent = questionObj.yesBtn;
        noButton.textContent = questionObj.noBtn;

        yesButton.onclick = () => alert(questionObj.secretAnswer || "Yay! 😊");
        noButton.onclick = () => alert("Oh no! 😔 Let's try again!");
    }

    // Start with the first question
    showQuestion(window.VALENTINE_CONFIG.questions.first);
});
