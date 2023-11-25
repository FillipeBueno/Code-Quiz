
var buttonStart = document.querySelector('#start');
var questionTitle = document.getElementById('question-title');
var button1 = document.getElementById('q1');
var button2 = document.getElementById('q2');
var button3 = document.getElementById('q3');
var button4 = document.getElementById('q4');
var timerElement = document.getElementById('time');
var checkerEl = document.getElementById('checker');




var correctCount = '';
var wrongCount = '';
var counter = 0;
var functions = [q1, q2, q3, q4, endGame];
var timer;
var timerCount = 75;






//First question
function q1() {

    questionTitle.innerHTML = 'Commonly used data types DO NOT include:'
    button1.innerHTML = 'Strings';
    button2.innerHTML = 'Booleans';
    //Button 3 is the correct answer.
    button3.innerHTML = 'Alerts';
    button3.setAttribute('class', 'true');
    button4.innerHTML = 'Numbers';

    



}

function q2() {
    questionTitle.innerHTML = 'The condition in an if/else statement is enclosed within _____:'
    button1.innerHTML = 'Quotes';
    button2.innerHTML = 'Curly brackets';
    //Button 3 is the correct answer.
    button3.innerHTML = 'Parentheses';
    button3.setAttribute('class', 'true');
    button4.innerHTML = 'Square brackets';

    


}

function q3() {
    questionTitle.innerHTML = 'Arrays in JavaScript can be used to store____'
    button1.innerHTML = 'Number and strings';
    button2.innerHTML = 'Other arrays';
    button3.innerHTML = 'Booleans';
    button3.setAttribute('class', 'false');
    //Button 4 is the correct answer.
    button4.innerHTML = 'All of the above';
    button4.setAttribute('class', 'true');

    


}

function q4() {
    questionTitle.innerHTML = 'a very useful tool used development and debugging for printing content to the debugger is?'
    button1.innerHTML = 'JavaScript';
    button2.innerHTML = 'Terminal/Bash';
    button3.innerHTML = 'For Loops';
    //Button 4 is the correct answer.
    button4.innerHTML = 'Console log';
    button4.setAttribute('class', 'true');

    




}


//TIMER FUNCTION

function stopTimer() {
    clearInterval(timer);
}


function StartTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);
    

    }

function endGame() {
    
    if (timerCount == '0') {
        stopTimer();
        q1();
    
    }

    timerElement.textContent = timerCount;

    stopTimer();
   
endScreen();

return; 
}



//Function to make start screen disappear and display quiz.
function startGame() {

    document.getElementById('start-screen').style.display = 'none'

    questions.setAttribute('class', 'show');

    StartTimer();
    q1();



}





//BUTTONS_________________
button1.addEventListener('click', function () {
    
    if (button1.classList.contains("true")) {
    
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Correct!';
        setTimeout(function(){
            checkerEl.setAttribute('class', 'hide');
            },500);

        

    }
    if (button1.classList.contains('false')) {
        timerCount -= 15;
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Wrong!';
        setTimeout(function(){
        checkerEl.setAttribute('class', 'hide');
        },500);
    }
    setTimeout(function() {
    counter++;
    functions[counter]()

},500);

console.log(checkerEl.value);

});


button2.addEventListener('click', function () {
    if (button2.classList.contains("true")) {
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Correct!';
        setTimeout(function(){
            checkerEl.setAttribute('class', 'hide');
            },500);

    }
    if (button2.classList.contains('false')) {
        timerCount -= 15;
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Wrong!';
        setTimeout(function(){
            checkerEl.setAttribute('class', 'hide');
            },500);
        

    }
    setTimeout(function() {
        counter++;
        functions[counter]()
    
    },500);
    




});


button3.addEventListener('click', function () {
    if (button3.classList.contains("true")) {
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Correct!';
        setTimeout(function(){
            checkerEl.setAttribute('class', 'hide');
            },500);
        
    }
    if (button3.classList.contains('false')) {
        timerCount -= 15;
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Wrong!';
        setTimeout(function(){
            checkerEl.setAttribute('class', 'hide');
            },500);
        

    }

    setTimeout(function() {
        counter++;
        functions[counter]()
    
    },500);
    



});


button4.addEventListener('click', function () {
    if (button4.classList.contains("true")) {
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Correct!';
        setTimeout(function(){
            checkerEl.setAttribute('class','hide');
            },500);
    }
    if (button4.classList.contains('false')) {
        timerCount -= 15;
        checkerEl.setAttribute('class', 'show');
        checkerEl.innerHTML = 'Wrong!';
        setTimeout(function(){
            checkerEl.setAttribute('class','hide');
            },500);


    }

    setTimeout(function() {
        counter++;
        functions[counter]()
    
    },500);
    





});


buttonStart.addEventListener('click', startGame);




