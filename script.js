// Query selector to access button and timer elements
var startBtn = document.getElementById("start");
var linePre = document.getElementById("li-pre");
var timerEl = document.getElementById("timer");
var quizHeadEl = document.getElementById("quizHead");
var listEl = document.getElementById("list");
var li = document.getElementById("li");
var main = document.querySelector("main");
var container = document.getElementById("quizContainer");
var body = document.getElementById("content");

var score;

const questions = [
  "Commonly used date types do NOT include:",
  "The condition in an if/else statement is enclosed within _____.", 
  "Arrays in JavaScript can be used to store _____.", 
  "String values must be enclosed within _____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:"
]

const q1Answers = ["Strings", "Booleans", "Alerts", "Numbers"]

const q2Answers = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"]

const q3Answers = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"]

const q4Amswers = ["Commas", "Curly Brackets", "Quotes", "Parentheses"]

const q5Answers = ["JavaScript", "Terminal/gitBash", "for Loops", "console.log"]

const quiz = {
  "question1": {
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"

  }, 
  "question2": {
    options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    answer: "Parentheses"

  },
  "question3": {
    options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "All of the Above"

  }, 
  "question4": {
    options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: "Quotes"

  },
  "question5": {
    options: ["JavaScript", "Terminal/gitBash", "for Loops", "console.log"],
    answer: "console.log"
  }
}

function quizStart() {
  for (let i = 0; i < q1Answers.length; i++) {
    var text = q1Answers[i];
    var li = document.createElement("li")
    li.textContent = text;
    listEl.appendChild(li)
  }

  function clickEvent(userAnswer, questionNumber) {
    event.target.value
    quizHeadEl.textContent = questions[0]
    userAnswer = clickEvent
    questionNumber = "question1"
    if (userAnswer === quiz[questionNumber].answer) {
      console.log("correct")
    } else {
      console.log("incorrect")
      console.log("subtract from timer")
    }
  }
  clickEvent("Alerts", "question1")
}

function startTimer() {
  var timeLeft = 180;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft + "s Remaining."

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      quizEnd();
    }
  }, 1000);
}

startBtn.addEventListener("click", function() {
  startBtn.remove()
  linePre.remove()
  quizStart()
  startTimer()
})


// function clickEvent(userAnswer, questionNumber) {
  //event.target.value
  //userAnswer = "3"
  //questionNumber = "question1"

  //If right answer chosen
  // if(userAnswer === test[questionNumber].answer) { //test.question1.answer = "1"  =>   "3" === "1" => false
    // move to the next question
    // render the question
//   }
//   else {
//     // Redo the question
//     // Prompt the user that they are wrong and do it again
//     // clear the radio buttons 
//   }

// }

// clickEvent("3", "question1")
// From office hours, just in case, event delegation

// Use index of array
// var everythingObject = {
//  questions1: {
//     options: [],            Instructor's example -- Array containing an object, object consisting of both the question and an answer, regarded by index
//     correctAnswer: ""
//   }
// }

// everythingObject.question1 -- preferred
// everythingObject["question1"] 
// Key value pair, objects = properties

// Query selector to access quiz area to change the quiz content
// element(via var).appendChild(variable or element to be created)
// Array.isArray will tell if an object is an array
// variable declaring the timer
// variable declaring the timer count

// Selectors, potentially, to access CSS content?

// conditions for quiz; correct, wrong, if, if else, etc.

// Show highscores via click of the corresponding div -- clear on-screen content?
// Show highscores via javascript-created div? 

// When botton is clicked, hide button, allow quiz questions to fill the space