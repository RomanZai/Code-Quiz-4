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

    // I can use a function that creates name for all objects.
    question.textContent = questions[0].title;
    opt1.textContent = questions[0].choices[0];
    opt2.textContent = questions[0].choices[1];
    opt3.textContent = questions[0].choices[2];
    opt4.textContent = questions[0].choices[3];

        //Timer
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = 0;
                    resultInfo ();
                }
            }, 1000);
        }
        
        window.onload = function () {
            var timerTime = 5;
                display = document.querySelector('#timer');
            startTimer(timerTime, display);
        };
        

function loadNextQuestion (){
}

// Check right answer
function loadNextQuestion(){
    var selectedOption = document.querySelector(".with-gap")
    if(!selectedOption){
        alert("Please select your answer!");
        return
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score++;
    }
}


