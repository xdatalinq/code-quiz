// Global variables
var timeLeft = 75;
var score = 0;
var startButtonEl = document.querySelector(".startButton");
var timerEl = document.querySelector("#timer");
var questionChoiceEl = document.querySelector("#question-choice");
var centerContainerEl = document.querySelector(".center-container");
var currentIndex = 0;

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

// View scores when button is clicked
// highScoreButton.addEventListener("click", viewHighScore());

// Countdown Timer
function timerStart() {
    centerContainerEl.style.display = "none"; 
    getQuestion(0);
    var countDownTimer = setInterval(function() {
        if(timeLeft <= 0){
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
};

function checkAnswer() {
    if(event.target.value != questions[currentIndex].correctChoice) {
        window.alert("Incorrect answer, 10 seconds deducted");
        timeLeft = timeLeft - 10;
    } else {
        window.alert("Correct!")
        timeLeft = timeLeft + 10;
    }
    currentIndex++;
    if (currentIndex <= 4) {
        getQuestion(currentIndex);
    } else {
        endGame();
    }
};

function endGame() {
    questionChoiceEl.innerHTML = "";
    // text "the game has ended, your score: "
    // input to enter initials
    // submit button
    // validate info entered in input
    // write score
}

function viewHighScore() {
    
};
// Likely need a function to clean up html before displaying new content to page?
// Likely need an endGame() function?

// for (var i = 0; i < questions.length; i++) {
//     document.getElementById("center-container.h3").
// };

/*
function getQuestion0() {
    document.querySelector("#question-text").textContent = questions[0].question
    for (var i = 0; i < questions[0].choices.length; i++) {
    
        var choice = document.createElement("button");
        choice.setAttribute("class", "option-button");
        choice.setAttribute("value", questions[0].choices[i]);
        choice.textContent = questions[0].choices[i];
        choice.onclick = checkAnswer(0);
        questionChoiceEl.appendChild(choice);
    };  
};

function getQuestion1() {
    document.querySelector("center-container.h3").textContent = questions[1].question
    // Add for loop to create a button for each "choices", correct option score +1 and call next getQuestion().
    // Incorrect option score -1 (floor 0), timer -10, and call getQuestion2().
    // Submit button
    // Window prompt saying correct/incorrect.
};

function getQuestion2() {
    document.querySelector("center-container.h3").textContent = questions[2].question
    // Add for loop to create a button for each "choices", correct option score +1 and call next getQuestion().
    // Incorrect option score -1 (floor 0), timer -10, and call getQuestion3().
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
    document.querySelector("center-container.h3").textContent = "Congratulations, your score is: " + score;
    localStorage.setItem("score", JSON.stringify(s));
    // Add submit button to store the score to localStorage with initials field
    // trigger viewHighScore();
};
*/