//import { quizData } from "./questions.js";
//TODO: figure out the import stuff
const quizData = [
    {
        question: "What operator gives a variable's memory address in C++?",
        options: ["it depends upon the implementation", "the symbol &", "the symbol id", "the symbol *"],
        answer: ["the symbol &"]
    },

    {
        question: "What is the type of the expression A[3]?",
        code: `string A[] =
        {"what", "is", "the", "size", "of", "this", "array?"};`,
        options: ["const char *", "char", "char[]", "std::string"],
        answer: ["std::string"]
    },

    {
        question: "What value does the following code output at line 7?",
        code:
        `1 #include <iostream>
2 using namespace std;
3
4 int main(){
5    int foo = 77;
7    cout << &foo << endl;
8    return 0;
9 }`,

    options: ["a memory address, such as 0x7fffeb17da34 which may vary each time the program is run", "1", "compile error because foo was not initialized", "77"],
    answer: ["a memory address, such as 0x7fffeb17da34 which may vary each time the program is run"]
    },

    {
        question: "Consider the following program that declares an array of type double named A inside function main.  Select ALL statements that are true about this program.",
        code:
        `int main()
{
    double A[10];
    for (int i=0; i<10; ++i)
        A[i] = 2.5 * i;
    cout << A[3];
}`,
    options: ["The program prints 10", "The program prints 7.5", "A contains 10 double elements over its entire lifetime", "A contains 10 double elements at first but may be reallocated to a different size any time"],
    answer: ["The program prints 7.5", "A contains 10 double elements over its entire lifetime"]
    },
];

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
