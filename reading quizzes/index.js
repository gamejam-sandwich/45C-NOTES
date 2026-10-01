const quizData = [
    {
        question: "q1",
        options: ["p", "b"],
        answer: "p"
    },
    {
        question: "q2",
        options: ["p", "b"],
        answer: "b"
    },
    // more questions...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next");

let currentQuestion = 0;
let score = 0;

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showQuestion() {
    nextBtn.style.display = "none";
    // Set the question
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    // Creating buttons for each option
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

    // Check if the answer is correct
    Array.from(optionsElement.children).forEach(button => {
        if (button.innerText === answer) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    if (selectedButton.innerText === answer) {
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
    nextBtn.style.display = "block";
}

function showResult() {
    questionElement.innerText = "Quiz complete";
    optionsElement.innerHTML = `<p>Your score: ${score}/${quizData.length}</p>`;
    nextBtn.style.display = "none";
}

showQuestion();