var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");

// Timer and Score trackers
var scoreText = document.getElementById("score");
var currentScore = 0;
var timerText = document.getElementById("timer");
var timer = 30;

// Text Area where Question is pushed in to
var questionText = document.getElementById("question");
var quizEl = document.getElementById("quiz");

// Input Labels where JS will push possible answers in to
var answer1Text = document.getElementById("ans1-txt");
var answer2Text = document.getElementById("ans2-txt");
var answer3Text = document.getElementById("ans3-txt");
var answer4Text = document.getElementById("ans4-txt");

// High Score Div
var userHighScoreSubmitBtn = document.getElementById("userHighScoreSubmit-btn");
var userNameInput = document.getElementById("userName");
var highScoreList = document.getElementById("highScoreList");

// User High Score
var highScoresText = document.getElementById("userScore");

// Answer Outcome
var answerOutcome = document.getElementById("answerOutcome");

// Current Index of Question Array
var currentQuestionNumber = 0;

//Question Object Array 
var quizQuestions = [
    // Question 1
    {
        question: "How can you add a horizontal line in HTML?",
        answers:{
            a: "<br>",
            b: "<hr>",
            c: "<p>",
            d: "<line>",
        },
        rightAnswer: "b",
    },
    // Question 2
    {
        question: "How do you select an HTML element's ID in javascript?",
        answers:{
            a: "document.getElementByID('')",
            b: "document.getElementID('')",
            c: "document.selectID('')",
            d: "document.IDselector('')"
        },
        rightAnswer: "a",
    },
    // Question 3
    {
        question: "Select the correct syntax for a 'for' loop",
        answers:{
            a: "for(i = 0; i < ####, i++){}",
            b: "for{i = 0; i < ####; i++}()",
            c: "for{i = 0; i < ####; i++}()",
            d: "for(i = 0, i < ####, i++){}"
        },
        rightAnswer: "d",
    },
    // Question 4
    {
        question: "What tag does our javascript go in on the HTML ",
        answers:{
            a: "<javascript>",
            b: "<java>",
            c: "<script>",
            d: "<js>",
        },
        rightAnswer: "c",
    },
    // Question 5
    {
        question: "What does '===' do?",
        answers:{
            a: "it compares two items",
            b: "it compares the type between data",
            c: "it compares the type and value between data",
            d: "it assigns a value",
        },
        rightAnswer: "c",
    },
]


// Event Listener to initialize quiz - changes HTML classes to change CSS and show/hide elements

startBtn.addEventListener('click', () => {
console.log("hello world. am baby code!");
console.log("If you're reading this, you'll be cheating!");
    // Hide 'Start Button' and show all other button's as well as the question and answers
    startBtn.className = 'hide';
    quizEl.className = 'show';
    nextBtn.className = 'show';
    // Reaches into question array and outputs 
    
    addQuestion();
    startTimer();
    
});

function startTimer(){
    var currentTime = setInterval(function(){
    timer--;
    timerText.textContent = "Time: " + timer;

    if(timer <= 0 || currentQuestionNumber >= quizQuestions.length){
        clearInterval(currentTime);
        endQuiz();
    }
  }, 1000);
};


// Function that advances the quiz 
nextBtn.addEventListener('click', () => {
    var selectedAnswer = document.querySelector("input[type=radio]:checked");
    if(!selectedAnswer){
        alert("please select an answer");
        return;
    }
    var userAnswer = selectedAnswer.value;
    if(currentRightAnswer === userAnswer){
        currentScore += 10;
        timer = timer + 5;
        answerOutcome.textContent = "correct!"
    }else{
        timer = timer - 10;
        answerOutcome.textContent = "incorrect!"
    }
    
    console.log("User's Answer: " + userAnswer);
    console.log("User's Score: " + currentScore);
    console.log("--------------------------");
    
    scoreText.textContent = "Your Score: " + currentScore;
    selectedAnswer.checked = false;
    answerOutcome.textContent = ""
    currentQuestionNumber++;
    
    if(currentQuestionNumber >= quizQuestions.length){
        endQuiz();
    }else{
        addQuestion();
    }
    
});


// function that adds question and answer into HTMl
function addQuestion(){
    
    questionText.textContent = quizQuestions[currentQuestionNumber].question;
    answer1Text.textContent = quizQuestions[currentQuestionNumber].answers.a;
    answer2Text.textContent = quizQuestions[currentQuestionNumber].answers.b;
    answer3Text.textContent = quizQuestions[currentQuestionNumber].answers.c;
    answer4Text.textContent = quizQuestions[currentQuestionNumber].answers.d;
    currentRightAnswer = quizQuestions[currentQuestionNumber].rightAnswer;
    console.log("Current right answer = " + currentRightAnswer);

};

function endQuiz(){
    quizEl.className = 'hide';
    nextBtn.className = 'hide';
    highScoresText.textContent = "Congratulations, your score is: " + currentScore;
    userHighScoreSubmitBtn.className = "show";
    userNameInput.className = "show";
    highScoreList.className ="show";

    saveHighScore();
}        

var masterList = JSON.parse(localStorage.getItem('list')) || [];


userHighScoreSubmitBtn.addEventListener('click', function(e){
    e.preventDefault();    
    var name = userNameInput.value.trim();
   
    if(!name){
        alert("Enter your initials!");
        return;
    }
    
    var nameAndScore = name + ": " + currentScore;

    masterList.push(nameAndScore);

    localStorage.setItem('list', JSON.stringify(masterList));
    
    saveHighScore();
});

function saveHighScore(){

    highScoreList.innerHTML = "";

    for(i = 0; i < masterList.length; i++){
        var last = masterList[i];
        
        var li = document.createElement('li');
        li.textContent = last;
        highScoreList.appendChild(li);
    }

};

































// function renderHighScores(){
//     for(i = 0; i < highScoresLI.length; i++){
//         var highScore = highScoresLI[i];
        
//         var li = document.createElement('li');
//         li.textContent = highScore;        
//         highScoreList.appendChild(li);
//     }
// };
//     var highScoresLI = [];
    
//     initiate();
    
//     function initiate(){
//         var storedName = localStorage.getItem('name');
//         var storedScore = localStorage.getItem('score');
    
//         if(storedName !== null){
//             highScoresLI = storedName + storedScore;
//         }
        
//         renderHighScores();
//     }