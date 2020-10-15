## Description
When the user click's "start", previously hidden HTML elements have their CSS classes changed to be visible, and the "start" button is changed to be hidden. The start button also initiates a function that will load the first question and set of possible answers into each corresponding HTML element from a question array of objects. On the "start" button, a timer is also initiated, that starts to countdown from 30 seconds. If this timer reaches 0 before the last question is answered, an end function is triggered that hides the question and answer elements and shows the final page which displays the user's score and gives the option to record a high score.

After the firs question is answered, when the "next" button is clicked, a series of "if" statements evaluates if the user selected the correct score by referencing the correct score from the question array. If they have, then their score has 10 points added on, and they gain an additional 5 seconds as well. If they did not answer correctly, there is no penalty to points, but the user is penalized 10 seconds. The array is then moved forward and an "if/else" statement evaluate if there are more questions. If there is, the next question is loaded. If not, the game is over, moving the player into the final page to see their final score and add it to the scoreboard.


## GitHub Repository can be found here:
https://github.com/perezcarlos93/API_Assignment

## Deployed GitPage can be found here:
https://perezcarlos93.github.io/API_Assignment/