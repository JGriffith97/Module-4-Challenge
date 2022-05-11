// Query selector to access button and timer elements
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var quizHeadEl = document.querySelector("#quizHead");
var listEl = document.querySelector("#list");
var li = document.querySelector("#li");
var main = document.querySelector("main");
var container = document.querySelector("#quizContainer");

var questions1 = ["test", "test2", "test3", "test4"]

// Query selector to access quiz area to change the quiz content
// element(via var).appendChild(variable or element to be created)

var quizStart = function() {
  var addLi = document.createElement("li");
  for (let i = 0; i < questions1.length; i++) {
    listEl.addLi;
  }
  listEl[0].textContent = questions1[0]
  listEl[1].textContent = questions1[1]
  listEl[2].textContent = questions1[2]
  listEl[3].textContent = questions1[3]
}
// variable declaring the timer
// variable declaring the timer count

// Selectors, potentially, to access CSS content?

// conditions for quiz; correct, wrong, if, if else, etc.

// When botton is clicked, hide button, allow quiz questions to fill the space
startBtn.addEventListener("click", function() {
  quizStart();
  startBtn.remove();
});


// Example code for adding elements
/* <html>
<body>
<div id="new">
<p id="p1">Tutorix</p>
<p id="p2">Tutorialspoint</p>
</div>
<script>
   var tag = document.createElement("p");
   var text = document.createTextNode("Tutorix is the best e-learning platform");
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);
</script>
</body>
</html> */