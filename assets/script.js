// JavaScript to animate the coding quiz game!


// Variables to reference the more important stuff

var startPage = document.querySelector('#main-header');
var question1 = document.querySelector('#question1');
var question2 = document.querySelector('#question2');
var question3 = document.querySelector('#question3');
var question4 = document.querySelector('#question4');
var question5 = document.querySelector('#question5');
var finalScore = document.querySelector('#finalscorebox');
var highScore = document.querySelector('#highscorebox');
var submitInitials = document.querySelector('#initials');
var startButton = document.querySelector('#startbutton');
var countdown = document.querySelector('#countdown')


// Correct answer variables (connecting JS to the correct answers in HTML)

var correct1 = document.querySelector('#question1correct');
var correct2 = document.querySelector('#question2correct');
var correct3 = document.querySelector('#question3correct');
var correct4 = document.querySelector('#question4correct');
var correct5 = document.querySelector('#question5correct');


// Win condition, lose condition, scores, & time remaining

var youWin = false;
var youLose = false;
var score = '';
var highScoreList = [];
var timeRemaining = 0;



// start the game with only the opening page displayed

function readyToPlay() {
    startPage.style.display = 'block';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';   
    question5.style.display = 'none';
    finalScore.style.display = 'none';
    highScore.style.display = 'none';
}

startButton.addEventListener('click', quizGame)

// The countdown clockwork

var timeInterval;
var timeRemaining = 75;

function gameClock() {
    timeInterval = setInterval(function() {
        if (timeRemaining > 1) {
            countdown.textContent = timeRemaining + ' seconds left';
            timeRemaining--;
        } else if (timeRemaining == 1) {
            countdown.textContent = timeRemaining + ' second left';
            timeRemaining--; 
        } else {
            timeRemaining.textContent = '';
            clearInterval(timeInterval);
            youLose()
        }
        if (youWin == true) {
            clearInterval(timeInterval);
            score = timeRemaining;
            toFinalScoreBox();
        }
    }, 1000);
}

var questionButton = document.querySelector('.questionButtons');
console.log(questionButton);


// An array with the correct answers

var rightAnswers = ["var", "[1, 'Laser', 35]", "function();", "False", "Alert"];


// Functions to check the right answers

function checkQuestion1(event) {
    var element1 = event.target.value;
    console.log(element1);
    if (element1 == rightAnswers[0]) {
    } else {
        timeRemaining = timeRemaining - 10;
    } toQuestion2();
}
function checkQuestion2(event) {
    var element1 = event.target.value;
    console.log(element1);
    if (element1 == rightAnswers[1]) {
    } else {
        timeRemaining = timeRemaining - 10;
    } toQuestion3();
}
function checkQuestion3(event) {
    var element1 = event.target.value;
    console.log(element1);
    if (element1 == rightAnswers[2]) {
    } else {
        timeRemaining = timeRemaining - 10;
    } toQuestion4();
}
function checkQuestion4(event) {
    var element1 = event.target.value;
    console.log(element1);
    if (element1 == rightAnswers[3]) {
    } else {
        timeRemaining = timeRemaining - 10;
    } toQuestion5();
}
function checkQuestion5(event) {
    var element1 = event.target.value;
    console.log(element1);
    if (element1 == rightAnswers[4]) {
    } else {
        timeRemaining = timeRemaining - 10;
    }youWin = true;
    clearInterval(timeInterval);
     toFinalScoreBox();
}


// Storing the scores and then getting them from local storage

document.querySelector('#initials').addEventListener('click', function(){
    var highScoreArray = [];
    highScoreArray = JSON.parse(localStorage.getItem('score'));
    if (highScoreArray == null) {
        highScoreArray = [];
    }
    var initials = document.querySelector('#initialsbox').value;
    var highScoreFinal = ("High Score: " + initials + " - " + timeRemaining);
    console.log(highScoreFinal)
    highScoreArray.push(highScoreFinal);
    console.log(highScoreArray)
    localStorage.setItem('score', JSON.stringify(highScoreArray));
})


// Putting up the scores on the board


function init() {
    var scoreBoard = JSON.parse(localStorage.getItem('score'));
    if (scoreBoard) {
        for (var i = 0; i < scoreBoard.length; i++) {
            var ol = document.getElementById("scoreList");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(scoreBoard[i]));
            ol.appendChild(li);
        }
    }
}

// Clearing the scores

document.querySelector('#clearScores').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear('score');
    document.getElementById('#scoreList').style.display = 'none';
})


// Moving between the questions and deploying the question checks

function quizGame() {
    gameClock();
    startPage.style.display = 'none';
    question1.style.display = 'block';
    questionButton.addEventListener('click', checkQuestion1);
}
  function toQuestion2 () {
        var questionButton2 = document.querySelector('.questionButton2');
        question1.style.display = 'none';
        question2.style.display = 'block';
        questionButton2.addEventListener('click', checkQuestion2);
    }
    function toQuestion3 () {
        var questionButton3 = document.querySelector('.questionButton3');
        question2.style.display = 'none';
        question3.style.display = 'block';
        questionButton3.addEventListener('click', checkQuestion3)
    }
    function toQuestion4 () {
        var questionButton4 = document.querySelector('.questionButton4');
        question3.style.display = 'none';
        question4.style.display = 'block';
        questionButton4.addEventListener('click', checkQuestion4)
    }
    function toQuestion5 () {
        var questionButton5 = document.querySelector('.questionButton5');
        question4.style.display = 'none';
        question5.style.display = 'block';
        questionButton5.addEventListener('click', checkQuestion5)
    }
    function toFinalScoreBox () {
        question5.style.display = 'none';
        finalScore.style.display = 'block';
        submitInitials.addEventListener('click', toHighScore)
    }
    function toHighScore () {
        console.log("clicked!")
        finalScore.style.display = 'none';
        highScore.style.display = 'block';
        init();
    }
    highScore.addEventListener('click', reloadPage)
    function reloadPage () {
        location.reload();
    }

readyToPlay();