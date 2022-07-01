const quizData = [
  {
    question: "When is Christmas?",
    a: "December 23",
    b: "December 25",
    c: "November 30",
    d: "August 3",
    correct: "b",
  },
  {
    question: "What is the second most populous sport?",
    a: "Soccer",
    b: "Basketball",
    c: "Hockey",
    d: "Cricket",
    correct: "d",
  },
  {
    question: "How many days are in a leap year?",
    a: "366",
    b: "367",
    c: "365",
    d: "350",
    correct: "a",
  },
  {
    question: "What is the largest country?",
    a: "Canada",
    b: "United States of America",
    c: "China",
    d: "Russia",
    correct: "d",
  },
  {
    question: "What is the largest ocean?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Pacific Ocean",
    d: "Antarctic Ocean",
    correct: "c",
  },
];
const quiz = document.querySelector(".container");
const question = document.querySelector("#question");
const list = document.querySelector("#list");
const aLabel = document.querySelector("#aLabel");
const bLabel = document.querySelector("#bLabel");
const cLabel = document.querySelector("#cLabel");
const dLabel = document.querySelector("#dLabel");
const btn = document.querySelector("#submit");
const radioButtons = document.querySelectorAll('input[name="answer"]');

let currentQuiz = 0;
let total = 0;

function getSelectedRadio() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].id;
    }
  }
  return false;
}

function deselectRadio() {
  radioButtons.forEach((choice) => {
    choice.checked = false;
  });
}

function displayQuestion(currentQuiz) {
  const questionGroup = quizData[currentQuiz];
  question.innerHTML = questionGroup.question;
  aLabel.innerHTML = questionGroup.a;
  bLabel.innerHTML = questionGroup.b;
  cLabel.innerHTML = questionGroup.c;
  dLabel.innerHTML = questionGroup.d;
}

displayQuestion(currentQuiz);

btn.addEventListener("click", () => {
  chosenAnswer = getSelectedRadio();

  if (chosenAnswer) {
    if (chosenAnswer == quizData[currentQuiz].correct) {
      total++;
    }

    if (currentQuiz < quizData.length - 1) {
      currentQuiz++;

      displayQuestion(currentQuiz);
      deselectRadio();
    } else {
      quiz.innerHTML = `
      <h2>Your result is</h2>

      <h3>${total} / 5</h3>

      <button onclick="location.reload()">Try Again</button>
      `;
    }
  }
});
