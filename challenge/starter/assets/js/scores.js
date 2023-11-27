// New page to manage score and 2 final screens.
var highScoresSpan = document.querySelector("#highscores");
var buttonClear = document.getElementById('clear');



function lastScore () {

    var lastInitials= localStorage.getItem('initials');
    var lastScore= localStorage.getItem('finalScore');
   
  
    var li1 = document.createElement("li");
    li1.innerText = lastInitials +" "+ lastScore;
    highScoresSpan.appendChild(li1);
  
  }
  


  lastScore();



  buttonClear.addEventListener('click',function(){

var deleteHistory= document.getElementById ('highscores');
localStorage.clear();
deleteHistory.remove();


  })