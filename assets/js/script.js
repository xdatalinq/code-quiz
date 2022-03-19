// Global variables
var timeLeft = 50;
var score = 0;
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
startButton.addEventListener("click", (getQuestion0(), startTimer()));

// View scores
highScoreButton.addEventListener("click", viewHighScore());

// Countdown Timer
function timerStart() {
    var countDownTimer = setInterval(function() {
        if(timeLeft <= 0){
            clearInterval(countDownTimer);
            document.getElementById("timer").textContent = "Finished!";
        } else {
            document.getElementById("timer").textContent = "Time: " + timeleft;
        }
        timeLeft -= 1;
    }, 1000);
};

// Function that pulls questions
function getQuestion0() {
    document.querySelector("center-container.h3").textContent = questions[0].question
    // Add for loop to create a button for each "choices", correct option score +1 and call next getQuestion().
    // Incorrect option score -1 (floor 0), timer -10, and call next getQuestion1().
    // Submit button
    // Window prompt saying correct/incorrect.
};

function getQuestion1() {
    document.querySelector("center-container.h3").textContent = questions[1].question
    // Add for loop to create a button for each "choices", correct option score +1 and call next getQuestion().
    // Incorrect option score -1 (floor 0), timer -10, and call next getQuestion2().
    // Submit button
    // Window prompt saying correct/incorrect.
};

function getQuestion2() {
    document.querySelector("center-container.h3").textContent = questions[2].question
    // Add for loop to create a button for each "choices", correct option score +1 and call next getQuestion().
    // Incorrect option score -1 (floor 0), timer -10, and call next getQuestion3().
    // Submit button
    // Window prompt saying correct/incorrect.
};

function getQuestion3() {
    document.querySelector("center-container.h3").textContent = questions[3].question
    // Add for loop to create a button for each "choices", correct option score +1 and call addScore().
    // Incorrect option score -1 (floor 0), timer -10, and call addScore()
    // Submit button
    // Window prompt saying correct/incorrect.
};

function addScore() {
    document.querySelector("center-container.h3").textContent = "Congratulations, your score is: " + score
    // Add submit button to store the score to localStorage with initials field
    // trigger viewHighScore();
};

function viewHighScore() {
    document.querySelector("center-container.h3").textContent =
};



// for (var i = 0; i < questions.length; i++) {
//     document.getElementById("center-container.h3").
// };