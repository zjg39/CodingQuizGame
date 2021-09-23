# CodingQuizGame

![Alt text](/assets/images/Screen Shot 2021-09-22 at 8.48.06 PM.png?raw=true "Screenshot: Coding Quiz Game")

## User Experience and Build, Personal Comments

### User Experience
    The player is presented with an introduction that includes the title of the game, the basic layout of the game, the penalty for getting a question wrong, and information regarding scores and comparing with other scores from other players.  The player can press the start button: the game, and the timer, begins.
    The player can move through the multiple choice questions, noticing that wrong answers take 10 seconds off of their time.  When they complete the last question (there are 5 in total), the clock stops and the remaining time is recorded as the score.  They are prompted to record their initials and click 'submit', after which they will be taken to the high score board, where they can view their own score and the scores of anyone else who wants to play.  A simple game, with a straightforward objective, with an understandable point system.
    Intruiging colors were used to give more excitement to the game, with hover effects for the multiple choice and start buttons for an extra layer of engagement.  Simple code that took maybe 10 or 15 more minutes, with a nice effect for the player.
    
### The Build
     The build started with the HTML: the start screen, question screens, final score screen, and high score screen were all built, with classes and IDs that would come in handy when the script was written.  Unfortunately, I realized too late that formatting the buttons with input tags instead of button tags was unnecessary, and would have been easier as plain buttons with some text, but no matter.  All of it was just the usual HTML with a bunch of different tags and IDs.  Pretty straightfoward, and easily readable for anyone with basic knowledge of HTML.  Comments were added for ease if navigation.  All of this goes for the CSS as well: nothing fancy, just vibrant colors with comments to denote buttons, questions, and whatnot.
     The script was orders of magnitude more complex than the rest of the build, and it will be discribed by section...
            The most important variables came first, with query selectors used to identify the relavant parts of the HTML for questions, high scores, the player's final score, the countdown, etc.  Correct answer variables were also made to execute functions once an answer was chosen, with the wrong answers subtracting 10 seconds from the countdown.  Next, win and lose conditions were set to false, the score was set to an empty string (for later storage of objects to draw from).  The first function, readyToPlay, hides all of the question and score boxes, with only the start screen visible.  The start button is given an event listener, starting the function quizGame once it is clicked.
      The clock was built next, named gameClock, and it is fairly simple: text showing the time left, with a special text for when there is only 1 second left, and a lose condition for when time runs out.  The win condition is true when the player arrives at the final score box, and the clock is stopped, with the variable timeRemaining recorded as the score.
      
      Next, the right answers to the questions are stored in a variable array, rightAnswers.  Since none of the answers for any question are the same, this was pretty simple.  To check the answers, a series of functions follow, with each one comparing a variable against an index of the rightAnswers array to see if the answer from the player matches that index.  If it doesn't, timeRemaining is lowered by 10.  This process is repeated for each question.
      
      Storing the scores was a little more complex. A query selector and event listener were attached to the Submit button, activating a function that does quite a lot.  An array variable is created, storing high scores into the empty array to draw from later.  JSON parse was used to look through local storage in the browser, find values that were pushed into the array, and then turn them into strings with stringify.  They were then pushed into another variable, which recorded the inputs and presented them with text: intials + time remaining, letting the player view their score next to the initials they entered.
      The next function is an initial function that puts the "scores" onto the high score "board".  Using a new variable, JSON parse is used to go thorugh local storage and pull out values that translate to "scores" to be manipulated by an if statement, followed by a for loop: if the new variable, scoreBoard, is true, then the for loop executes. The for loop loops through the length of scoreBoard, creates an li element inside of an ordered list that is inside the score board box in the HTML, attaches whichever iteration of "i" the for loop is currently sitting on by turning it into text, and then appends that "child" to the list.  The scores are cleared when the player pushes the clear scores button; this is done with an event listener attached to the button via a query selector for the button's id, with an event inside the ensuing function.  The local storage is cleared of all "scores" and the list is set to a style.display = none.
      The next series of functions move the player through the windows, while calling a few other functions, like the clock.  By attaching query selectors to each window and "question check" functions to each of those window functions, the effect is that the answer is checked for right/wrong at the same time that the player is transitioning to the next question.  This process goes all the way to the final score page, where the player submit their initials before moving on to the score board.  When the player pushes the "clear scores" or "play again" buttons, either way, the game is restarted.  Of course, the "clear scores" button removes the scores of previous plays.  The readyToPlay function, allowing only the start screen to be seen, is called after a location.reload().
      
      
### Personal Comments
        This was quite a challenge.  Without help from TAs, tutors, and especially my classmates, I wouldn't have been able to do this without cancelling all of my plans outside of class; I would have had to live at my desk, studying and trying to figure it out.  This was a lesson in JavaScript, but the more important lesson was that of a team that helps one another.  I am sure that this won't change once I formally enter the field.  I am happy that I wrote what I did, because the while the muscle memory is certainly valuable, future reference to past projects is even more so.
