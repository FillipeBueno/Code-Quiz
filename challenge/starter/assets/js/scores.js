// New page to manage score and 2 final screens.
var highScoresSpan = document.querySelector("#highscores");


//var li1 = document.createElement("li");
//li1.textContent = 'test';
//highScoresSpan.appendChild(li1);




function highScores() {
    
    location.href ="highscores.html";


    lastScore();



}





function lastScore () {

    var li1 = document.createElement("li");
li1.textContent = 'test';

var myList = document.getElementById("highscores");
myList.appendChild(li1);
//
//
//   var lastInitials= localStorage.getItem('initials');
//   var lastScore= localStorage.getItem('finalScore');
//   console.log(lastInitials);
//   console.log(lastScore);
// 
//var li1 = document.createElement("li");
//li1.textContent = lastInitials + lastScore;
//highScoresSpan.appendChild(li1);

//highScoresSpan.textContent = initialsInput + finalScore;
}