import { quiz1 } from "./quiz1_questions.js";
import { quiz2 } from "./quiz2_questions.js";

const QUIZZES = {
    week1: { title: "RQ W1", questions: quiz1 },
    week2: { title: "RQ W2", questions: quiz2 },
}

const quizSelect = document.getElementById("quiz-select");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const codeElement = document.getElementById("code");
const nextBtn = document.getElementById("next");

let quizData = [];
let currentQuestion = 0;
let score = 0;
let mode = "answering";  // answering, checking, done

for (const [key, quiz] of Object.entries(QUIZZES)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = quiz.title;
    quizSelect.appendChild(option);
}

quizSelect.addEventListener("change", () => {
    loadQuiz(quizSelect.value);
})

nextBtn.addEventListener("click", () => {
    if (mode === "answering") {
        submitAnswer();
    } else if (mode === "checking") {
        goToNext();
    } else {
        restartQuiz();
    }
});

function loadQuiz(key) {
    quizData = QUIZZES[key].questions;
    restartQuiz();
}

function showQuestion() {
    mode = "answering";
    nextBtn.innerText = "Submit";
    nextBtn.style.display = "block";
    nextBtn.disabled = true;

    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    if (question.code) {
        codeElement.querySelector("code").textContent = question.code;
        codeElement.style.display = "block";
    } else {
        codeElement.style.display = "none";
    }

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.dataset.value = option;
        button.addEventListener("click", toggleSelect);
        optionsElement.appendChild(button);
    });
}

function toggleSelect(e) {
    e.currentTarget.classList.toggle("selected");
    const anySelected = optionsElement.querySelector(".selected") !== null;
    nextBtn.disabled = !anySelected;
}

function submitAnswer() {
    const answer = quizData[currentQuestion].answer;
    const buttons = Array.from(optionsElement.querySelectorAll("button"));

    const selected = buttons
        .filter(button => button.classList.contains("selected"))
        .map(button => button.dataset.value);
    
        const noWrong = selected.every(value => answer.includes(value));
        const noMiss = answer.every(value => selected.includes(value));

        if (noWrong && noMiss) {
            score ++;
        }
    
        buttons.forEach(button => {
        if (answer.includes(button.dataset.value)) {
            button.classList.add("correct");
        } else if (button.classList.contains("selected")) {
            button.classList.add("wrong");
        }
        button.disabled = true;
    });


        mode = "checking";
        nextBtn.innerText = "Next";
}

function goToNext() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showResult() {
    mode = "done";
    questionElement.innerText = "Quiz complete";
    optionsElement.innerHTML = `<p>Your score: ${score}/${quizData.length}</p>`;
    codeElement.style.display = "none";
    nextBtn.innerText = "Try again";
    nextBtn.disabled = false;
}

loadQuiz(quizSelect.value);
