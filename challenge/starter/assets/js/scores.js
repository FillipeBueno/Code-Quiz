// New page to manage score and 2 final screens.
var endScreenEl = document.getElementById('end-screen');
var finalscoreEl = document.getElementById("final-score");
var submitButton = document.querySelector('#submit');
var initialsInput = document.querySelector("#initials");
var highScoresSpan = document.querySelector("#highscores");




function endScreen() {
    choices.setAttribute('class', 'hide');
    endScreenEl.setAttribute('class', 'show');
    finalscoreEl.innerHTML = timerCount;

}


function highScores() {
    console.log('test');

    
    //var initialsInput = localStorage.getItem("initials");
    //var finalScore = localStorage.getItem("score");
//
//
    //highScoresSpan.textContent = initialsInput + finalScore;



}





//submitButton.addEventListener('click', function (event) {
//   event.preventDefault();
//
//   
//location.href ="highscores.html";
//
//
// 
//    var initialsInput = document.querySelector("#initials").value;
//    
//    highScoresSpan = initialsInput + finalScore;
////
//
//    var finalScore = timerCount.toString();
////   localStorage.setItem("initials", initialsInput);
////    localStorage.setItem("score", finalScore);
////
//  highScores();
////
//
//console.log(timerCount);
//console.log(initialsInput);
//console.log(finalScore);
//console.log (highScoresSpan);

//console.log('test');
//});