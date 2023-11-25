// New page to manage score and 2 final screens.
var endScreenEl = document.getElementById('end-screen');
var finalscoreEl = document.getElementById("final-score");
var submitButton = document.querySelector('#submit');
var initialsInput = document.querySelector("#initials");
var highScoresSpan = document.querySelector("#highscores");



function endScreen(){
    choices.setAttribute('class', 'hide');
    endScreenEl.setAttribute('class', 'show');
    finalscoreEl.innerHTML = timerCount;

}

//
//function highScores(){
//    
//    location.href = 'highscores.html';
//    var email = localStorage.getItem("initials");
//    var finalScore= localStorage.getItem("score");
//    
//
//    highScoresSpan.textContent = email + finalScore;
//
//   
//
//}
//





submitButton.addEventListener('click',function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    var finalScore = timerCount;
   

localStorage.setItem("initials", initials);
localStorage.setItem("score",finalScore);


location.href = 'highscores.html';
var email = localStorage.getItem("initials");
var finalScore= localStorage.getItem("score");


highScoresSpan.textContent = email + finalScore;



});