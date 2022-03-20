// Global variables
var currentIndex = 0;
var timeLeft = 75;
var score = 0;
var initials = "";
var startButtonEl = document.querySelector(".startButton");
var questionsEl = document.querySelector("#questions");
var questionChoiceEl = document.querySelector("#question-choice");
var centerContainerEl = document.querySelector(".center-container");
var endContainerEl = document.querySelector(".end-container");

const questions = [
    {
    question: "Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts"
    },
    {
    question: "The condition in an if/else statement is enclosed in:",
    choices: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
    correctChoice: "Parenthesis"
    },
    {
    question: "Arrays in JavaScript can be used to store:",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    correctChoice: "All of the above"
    },
    {
    question: "String values must be enclosed within ______ when being assigned to variables",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correctChoice: "Quotes"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
    correctChoice: "console.log"
    }
];

// Start button, initiates timer and pulls first question
startButtonEl.addEventListener("click", timerStart);

// Countdown Timer
function timerStart() {
    centerContainerEl.style.display = "none"; 
    getQuestion(0);
    var countDownTimer = setInterval(function() {
        if (timeLeft <= 0 || currentIndex === 5){
            clearInterval(countDownTimer);
            document.getElementById("timer").textContent = "Finished!";
            endGame();
        } else {
            document.getElementById("timer").textContent = timeLeft;
        }
        timeLeft--;
    }, 1000);
};

// Function that pulls questions
function getQuestion(index) {
    if(timeLeft > 0) {
        document.querySelector("#question-text").textContent = questions[index].question
        questionChoiceEl.innerHTML = "";
        for (var i = 0; i < questions[index].choices.length; i++) {
            var choice = document.createElement("button");
            choice.setAttribute("class", "option-button");
            choice.setAttribute("value", questions[index].choices[i]);
            choice.textContent = questions[index].choices[i];
            choice.onclick = checkAnswer;
            questionChoiceEl.appendChild(choice); 
            };
        } else {
            endGame();
    }
};

function checkAnswer() {
    if(event.target.value != questions[currentIndex].correctChoice) {
        window.alert("Incorrect answer, 10 seconds deducted");
        timeLeft = timeLeft - 10;
    } else {
        window.alert("Correct!")
    }
    currentIndex++;
    if (currentIndex <= 4) {
        getQuestion(currentIndex);
    } else {
        endGame();
    }
};

function endGame() {
    score = timeLeft;
    questionChoiceEl.style.display = "none";
    questionsEl.innerHTML = "";
    endContainerEl.style.display = "inherit";
    document.getElementById("finalScore").textContent = score;
    // validate info entered in input
    // save score + input from user to localStorage
    
};

function viewHighScore() {
    //load localStorage
};