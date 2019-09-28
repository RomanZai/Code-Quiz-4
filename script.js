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

    var question = document.getElementById("question");

    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var opt4 = document.getElementById("opt4");

    question.textContent = questions[0].title;
    opt1.textContent = questions[0].choices[0];
    opt2.textContent = questions[0].choices[1];
    opt3.textContent = questions[0].choices[2];
    opt4.textContent = questions[0].choices[3];


function loadNextQuestion (){

}

// Check right answer
var answer = selectedOption.value;
if(questions[currentQuestion].answer === answer){
    score += 1;
}


//Timer
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