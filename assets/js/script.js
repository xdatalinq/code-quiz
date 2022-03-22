// Global variables
var currentIndex = 0;
var timeLeft = 75;
var timeDelay = 3;
var score = 0;
var highScores = [];
var initials = "";
var startButtonEl = document.querySelector(".startButton");
var questionsEl = document.querySelector("#questions");
var questionChoiceEl = document.querySelector("#question-choice");
var centerContainerEl = document.querySelector(".center-container");
var endContainerEl = document.querySelector(".end-container");
var answerIncorrectEl = document.querySelector("#answer-incorrect");
var answerCorrectEl = document.querySelector("#answer-correct");
var viewScoresContainerEl = document.querySelector("#view-scores-container")
var submitButtonEl = document.querySelector("#submit-initials")
var highScoreLinkEl = document.querySelector(".highScoreBtn")

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

// View high scores button to click to viewHighScores()
highScoreLinkEl.addEventListener("click", viewHighScore);

// Countdown Timer
function timerStart() {
    questionsEl.style.display = "inherit";
    questionChoiceEl.style.display = "inherit";
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
        questionChoiceEl.innerHTML = "";
        document.querySelector("#question-text").textContent = questions[index].question
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

// Check answers
function checkAnswer(event) {
    if(event.target.value != questions[currentIndex].correctChoice) {
        answerIncorrectEl.style.display = "inherit";
        answerCorrectEl.style.display = "none";
        timeLeft = timeLeft - 10;
    } else {
        answerCorrectEl.style.display = "inherit";
        answerIncorrectEl.style.display = "none";
    }
    currentIndex++;
    if (currentIndex <= 4) {
        getQuestion(currentIndex);
    } else {
        endGame();
    }
};

// End game sequence begins
function endGame() {
    score = timeLeft;
    waitTimer();
};

// This is a timer to wait 3 seconds before switching sections so users can see last question's feedback
function waitTimer() {
    var countDownTimer = setInterval(function() {
        if (timeDelay <= 0){
            clearInterval(countDownTimer);
            submitScoreSection();
        } else {
            console.log(timeDelay);
        }
        timeDelay--;
    }, 1000);
};

// Change to form section
function submitScoreSection() {
    questionChoiceEl.style.display = "none";
    document.getElementById("questions").style.display = "none";
    endContainerEl.style.display = "flex";
    document.getElementById("finalScore").textContent = score;
    submitButtonEl.addEventListener("click", submitScore);
};

// Load the scores into variables
var loadScores = function () {
    highScores = localStorage.getItem("score", highScores);
    highScores = JSON.parse(highScores);
};

// Turn input value into an object and submit it to localStorage
function submitScore(event) {
    event.preventDefault(); 
    var nameInput = document.querySelector("#initials").value;
    if (!nameInput) {
        alert("You must enter your initials");
    } else {
        loadScores;
        var scoreId = highScores.length + 1;
        var scoreObject = {
            name: nameInput,
            score: score,
            id: scoreId
        };
        highScores.push(scoreObject);
        highScores.sort(function(a,b) {return (b.score - a.score)})
        localStorage.setItem("score", JSON.stringify(highScores));
        viewHighScore();
    }
};

// Display loaded scores
function viewHighScore() {
    endContainerEl.style.display = "none";
    centerContainerEl.style.display = "none";
    viewScoresContainerEl.innerHTML = "";
    viewScoresContainerEl.style.display = "inherit";

    // Create the home button
    var homeButtonEl = document.createElement("button");
    homeButtonEl.className = "homeButton";
    homeButtonEl.textContent = "Home"
    document.getElementById("view-scores-container").appendChild(homeButtonEl);
    homeButtonEl.addEventListener("click", resetHome);

    // Create the h1
    var tag = document.createElement("h1");
    var text = document.createTextNode("Name/Score");
    tag.appendChild(text);
    var element = document.getElementById("view-scores-container");
    element.appendChild(tag);
    
    // Create the score items
    var scorelistEl = document.createElement("ol");
    for (var i = 0; i < Math.min(10, highScores.length); i++) {
        var scoreItemEl = document.createElement("li");
        var name = highScores[i].name
        var score = highScores[i].score
        scoreItemEl.textContent = name + ": " + score;
        scorelistEl.appendChild(scoreItemEl);
    };
    document.getElementById("view-scores-container").appendChild(scoreItemEl);
}; 

    function resetHome() {
        viewScoresContainerEl.innerHTML = "";
        viewScoresContainerEl.style.display = "none";
        centerContainerEl.style.display = "inherit";  
        timeLeft = 75
        currentIndex = 0
        document.getElementById("timer").textContent = timeLeft;
};