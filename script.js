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
var liClass = document.getElementsByClassName("ans1");
var inputClass = document.getElementsByClassName("input-form")
var initialsForm = document.getElementById("initials")
var submitButton = document.getElementById("submitBtn")
var highscrList = document.getElementById("hs-list")
var playAgn = document.getElementById("play-again-btn")

var inputInitials = document.createElement("input")
var inputSubmit = document.createElement("input")

var initials
var score = 0;
var userScore
var questionNumber;
var text

var userHighScore = initials + "      " + userScore + "."

var hS = [];

var timeInterval
var timeLeft = 40

const quiz = [
   {
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
    title: "Commonly used date types do NOT include:"


  }, 
  {
    options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    answer: "Parentheses",
    title: "The condition in an if/else statement is enclosed within _____."

  },
 {
    options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "All of the Above",
    title: "Arrays in JavaScript can be used to store _____."

  }, 
{
    options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: "Quotes",
    title: "String values must be enclosed within _____ when being assigned to variables."

  },
{
    options: ["JavaScript", "Terminal/gitBash", "for Loops", "console.log"],
    answer: "console.log",
    title: "A very useful tool used during development and debugging for printing content to the debugger is:"
  }
]

var currentQuestion = 0

function getQuestion() {
  listEl.innerHTML = ""
  for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
    var text = quiz[currentQuestion].options[i];
    var li = document.createElement("li")
    li.textContent = text;
    listEl.appendChild(li)
    $("li").eq(i).addClass("answer")
  }
  quizHeadEl.textContent = quiz[currentQuestion].title
  questionNumber = `question${currentQuestion}`
}

function quizStart(event) {
  linePre.remove()
  startTimer()
  getQuestion()
  return
}

function checkAnswer(event) {
  // questionNumber = "question1"
  console.log(currentQuestion)
  console.log(quiz[currentQuestion])
  var correctAnswer = quiz[currentQuestion].answer
  if (correctAnswer === event.target.textContent) {
    console.log("correct")
    score += 10
    console.log(score)
  } else {
    console.log("incorrect")
    score -= 5
    timeLeft -= 10
    console.log(score)
    // subtract from timer
  }
  currentQuestion++
  if (currentQuestion < quiz.length) {
    getQuestion();
  } else {
    console.log("something")
    clearInterval(timeInterval);
    endQuiz();
    return
  }
}

function endQuiz() {
  $("#list").addClass("hide")
  $(listEl).removeAttr("id")
  userScore = score
  quizHeadEl.textContent = "The quiz is over!"
  quizHeadEl.style.textAlign = "center"
  console.log(score)
  var p = document.createElement("p")
  inputInitials.type = "text"
  inputInitials.name = "initials"
  inputInitials.placeholder = "Enter initials; e.g.: JRG"
  inputInitials.maxLength = "3"
  $(inputInitials).attr("id", "userInput")   // Line 133 and 136 written in jQuery form 
  inputSubmit.type = "submit"
  $(inputSubmit).attr("id", "submitBtn")
  $(p).insertAfter("hr")
  $(p).attr("class", "select")
  p.textContent = "Your final score is " + score + "."
  $(initialsForm).append(inputInitials)
  $(initialsForm).append(inputSubmit)
  $("#form-hide").removeAttr("id")
  timerEl.textContent = "Timer: 0s Remaining"
}

function getInitials(event) {
  var select = document.querySelectorAll(".select")
  var userInitials = document.getElementById("userInput").value
  if (userInitials < inputInitials.maxLength -2) {
    inputInitials.placeholder = "Must be 2 or 3 chars!"
  } else {
    initials = userInitials + " scored " + userScore
    hS.push(initials);
    userInitials.value = ""
    initialsForm.remove();
    for (let i = 0; i < select.length; i++) {
      select[i].style.display = "none"
    }
    storeHs()
    displayHS()
  }
}

function postHS(event) {
  for (var i = 0; i < hS.length; i++) {
    var highScr = hS[i];
    
    var hsLi = document.createElement("li");
    hsLi.setAttribute("class", "lines")
    hsLi.textContent = highScr
    hsLi.setAttribute("data-index", i);

    highscrList.appendChild(hsLi);
    // highscrList.style.display = "block"
  }
  return
}

function clear() {
  var select = document.querySelectorAll(".select")
  for (let i = 0; i < select.length; i++) {
    select[i].style.display = "none"
  }
  return
}

function displayHS() {
  clear()
  quizHeadEl.textContent = "HighScores"
  highscrList.style.display = "block"
  playAgn.style.display = "block"
}

function init() {
  var storedHs = JSON.parse(localStorage.getItem("hS"))

  if (storedHs !== null) {
    hS = storedHs;
  }

  postHS()
}

function storeHs() {
  localStorage.setItem("hS", JSON.stringify(hS))
}

$("#start").on("click", function(event) {
  quizStart(event)
  startBtn.remove()
})

$("ul").on("click", ".answer", function(event) {
  checkAnswer(event)
})

$("#initials").on("submit", function(event) {
  getInitials(event)
  postHS(event)
  event.preventDefault()

  storeHs()
})

$("#showHigh").on("click", function(event) {
  displayHS()
})

$(playAgn).on("click", function(event) {
  location.reload()
})


function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft + "s Remaining."

    if(timeLeft === 0) {
      endQuiz()
      clearInterval(timeInterval);
      timerEl.textContent = "Timer: 0s Remaining."
      // quizEnd();
    }
  }, 1000);
}

init()


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