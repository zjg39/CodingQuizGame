// JavaScript to animate the coding quiz game!
debugger

// Variables to reference the more important stuff




var startPage = document.querySelector('#main-header');
var question1 = document.querySelector('#question1');
var question2 = document.querySelector('#question2');
var question3 = document.querySelector('#question3');
var question4 = document.querySelector('#question4');
var question5 = document.querySelector('#question5');
var finalScore = document.querySelector('#finalscorebox');

var startButton = document.querySelector('#startbutton');

var countdown = document.querySelector('#countdown')


// Correct answer variables (connecting JS to the correct answers in HTML)

var correct1 = document.querySelector('#question1correct');
var correct2 = document.querySelector('#question2correct');
var correct3 = document.querySelector('#question3correct');
var correct4 = document.querySelector('#question4correct');
var correct5 = document.querySelector('#question5correct');


// Win condition

var youWin = false;


// start the game with only the opening page displayed

function readyToPlay() {
    startPage.style.display = 'block';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';   
    question5.style.display = 'none';
    finalScore.style.display = 'none';
    startButton.addEventListener('click', quizGame)
}


// The countdown clockwork

function gameClock() {
    var timeRemaining = 75;
    var timeInterval = setInterval(function() {
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
    }, 1000);
}





function quizGame () {
    gameClock();
    startPage.style.display = 'none';
    question1.style.display = 'block';
    question1.addEventListener('click', toQuestion2)
}

  function toQuestion2 (event) {
        question1.style.display = 'none';
        question2.style.display = 'block';
        question2.addEventListener('click', toQuestion3)
    }

    function toQuestion3 (event) {
        question2.style.display = 'none';
        question3.style.display = 'block';
        question3.addEventListener('click', toQuestion4)
    }

    function toQuestion4 (event) {
        question3.style.display = 'none';
        question4.style.display = 'block';
        question4.addEventListener('click', toQuestion5)
    }

    function toQuestion5 (event) {
        
        question4.style.display = 'none';
        question5.style.display = 'block';
        question5.addEventListener('click', toFinalScoreBox)
    }

    function toFinalScoreBox () {
        question5.style.display = 'none';
        finalScore.style.display = 'block';
        finalScore.addEventListener('click', toHighScore)
    }

    function backToStart () {
        finalScore.style.display = 'none';

    }

readyToPlay();