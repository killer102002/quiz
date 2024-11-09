const quizData = [
    {
      question: "1.What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "2.What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "3.Which is the longest river in Asia?",
      options: ["Yangtze", "Yellow", "Mekong", "Indus"],
      answer: "Yangtze"
      
    },
    {
      question: "4.What is the capital of Kazakhstan?",
      options: ["Almaty", "Astana (Nur-Sultan)", "Tashkent", "Bishkek"],
      answer: "Astana (Nur-Sultan)"
    },
    {
      question: "5.The island of Tasmania is part of which country?",
      options: ["New Zealand", "Australia", "Indonesia", "Papua New Guinea"],
      answer: "Australia"
    },
    
    {
      question: "6.Who was the first emperor of China?",
      options: ["Qin Shi Huang", "Wu Zetian", "Sun Yat-sen", "Kublai Khan"],
      answer: "Qin Shi Huang"
    },
    {
      question: "7.The Magna Carta was signed in which year?",
      options: ["1066", "1215", "1453", "1688"],
      answer: "1215"
    },
    {
      question: "8.Who was the British Prime Minister during World War II?",
      options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Kublai Khan"],
      answer: "Winston Churchill"
    },
    {
      question: "9.Which is the lightest element in the periodic table?",
      options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
      answer: "Hydrogen"
    },
    {
      question: "10.Who is known as the “Father of the Internet”?",
      options: ["Tim Berners-Lee", "Vint Cerf", "Alan Turing", "BillGates"],
      answer: "Vint Cerf"
    },
    
    
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  showQuestion();
  let timeLeft = 30; // Set the timer for 30 seconds
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      // Handle time out (e.g., submit the quiz automatically)
      alert("Time's up!");
      document.getElementById('submit').click(); // Simulate submit
    } else {
      timeLeft--;
      document.getElementById('time').textContent = timeLeft;
    }
  }, 1000);
}

// Call startTimer when the quiz starts
startTimer();

// Your existing quiz logic here...

// Make sure to clear the timer when the quiz is completed
function submitQuiz() {
  clearInterval(timerId);
  // Handle quiz submission logic
}

// Add event listener for the submit button
document.getElementById('submit').addEventListener('click', submitQuiz);

