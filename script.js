document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const questionDivDisplay = document.getElementById("question-div");
  const choicesDivDisplay = document.getElementById("choices");
  const questionDisplay = document.getElementById("Question");
  const choiceDisplay = document.getElementById("choices-list");
  const nextQuestionBtn = document.getElementById("nextQuestion");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const restartBtn = document.getElementById("restartbtn");
  const scoreDiv = document.getElementById("Score");

  const questionList = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tabular Markup Language",
        "None of the above",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        "William Shakespeare",
        "Charles Dickens",
        "George Orwell",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
  ];
  
  let score;
  let currentIndex;

  startButton.addEventListener("click", startQuiz);

  nextQuestionBtn.addEventListener("click", showQuestion);

  restartBtn.addEventListener("click", restartQuiz);

  function startQuiz() {
    currentIndex = -1;
    score = 0;
    startButton.classList.add("hidden");
    questionDivDisplay.classList.remove("hidden");
    choicesDivDisplay.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextQuestionBtn.classList.add('hidden')
    currentIndex++;
    if (currentIndex < questionList.length) {
      questionDisplay.textContent = questionList[currentIndex].question;
      choiceDisplay.innerHTML = "";
      const choices = questionList[currentIndex].choices;
      choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        choiceDisplay.appendChild(li);
        selectAnswer(li);
      });
    } else {
      questionDivDisplay.classList.add("hidden");
      choicesDivDisplay.classList.add("hidden");
      nextQuestionBtn.classList.add("hidden");
      scoreDiv.classList.remove("hidden");
      restartBtn.classList.remove("hidden");
      showScore();
    }
  }

  function selectAnswer(li) {
    let isCorrect = false;
    li.addEventListener("click", () => {
      const allChoices = document.querySelectorAll("li");
      allChoices.forEach((choice) => choice.classList.remove("selected"));
      li.classList.add("selected");
      if (!li.dataset.clicked) {
        if (li.textContent === questionList[currentIndex].answer) {
          score++;
        }
        li.dataset.clicked = true;
      }
      nextQuestionBtn.classList.remove("hidden");
    });
  }

  function showScore() {
    scoreDisplay.textContent = `${score} / ${questionList.length}`;
  }

  function restartQuiz() {
    restartBtn.classList.add("hidden");
    scoreDiv.classList.add("hidden");
    startQuiz();
  }
});
