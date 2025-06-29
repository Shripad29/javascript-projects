const startBtn = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const progress = document.getElementById('progress');
const scoreText = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote 'To be, or not to be'?",
        answers: [
            { text: "Shakespeare", correct: true },
            { text: "Hemingway", correct: false },
            { text: "Dickens", correct: false },
            { text: "Austen", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "2", correct: false }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    score = 0;
    showQuestion();
    updateProgress();
}

function showQuestion() {
    resetState();
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    q.answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.textContent = answer.text;
        btn.classList.add('answer-btn');
        btn.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(btn);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestion++;
    updateProgress();
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    const percent = ((currentQuestion) / questions.length) * 100;
    progress.style.width = percent + '%';
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    scoreText.textContent = `${score} / ${questions.length}`;
    progress.style.width = '100%';
}

function restartQuiz() {
    startQuiz();
    quizScreen.classList.add('active');
    resultScreen.classList.remove('active');
}

// Show start screen on load
window.onload = () => {
    startScreen.classList.add('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
}; 