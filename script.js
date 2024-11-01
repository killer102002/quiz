const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "Jane Austen",
        c: "William Shakespeare",
        d: "Mark Twain",
        correct: "c"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function calculateScore() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    for (const answer of answers) {
        if (answer.checked) {
            selectedAnswer = answer.value;
            break;
        }
    }
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

submitButton.addEventListener('click', () => {
    calculateScore();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
    }
});

// Load the first question
loadQuestion();