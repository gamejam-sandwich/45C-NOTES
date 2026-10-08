import { quizData } from "./questions.js";

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const codeElement = document.getElementById("code");
const nextBtn = document.getElementById("next");

let currentQuestion = 0;
let score = 0;
let mode = "answering";  // answering, checking, done

nextBtn.addEventListener("click", () => {
    if (mode === "answering") {
        submitAnswer();
    } else if (mode === "checking") {
        goToNext();
    } else {
        restartQuiz();
    }
});

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

showQuestion();
