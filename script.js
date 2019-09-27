var currentQuestion = 0;
var score = 0;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    
  ];

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var resultCount = document.getElementById("result");

function loadQuestion (questionsIndex){
    var q = questions[questionIndex];
    questionEl.textContent = 
    opt1.textContent = choices[0];
    opt2.textContent = choices[1];
    opt3.textContent = choices[2];
    opt4.textContent = choices[3];
}

function loadNextQuestion (){
    var selectedOption = document.querySelector("input[type=")

}

// Check right answer
var answer = selectedOption.value;
if(questions[currentQuestion].answer == answer){
    score += 1;
}

function startTimer(card) {
    var time = 15;
    var intervalId = setInterval(function () {
        time--;
        var timeDisplay = document.getElementById("timer-countdown");
        if (timeDisplay) {
            timeDisplay.textContent = time;
        }
        if (time === 0) {
            buildCard(card, false, null, true);
            clearInterval(intervalId);
        }
    }, 1000);
    return intervalId;
}