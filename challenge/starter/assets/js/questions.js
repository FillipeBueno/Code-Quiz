
var buttonStart = document.querySelector('#start');
var questionTitle = document.getElementById('question-title');
var button1 = document.getElementById('q1');
var button2 = document.getElementById('q2');
var button3 = document.getElementById('q3');
var button4 = document.getElementById('q4');

var correctCount = 0;
var wrongCount = 0;



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

function q2(){
    questionTitle.innerHTML = 'The condition in an if/else statement is enclosed within _____:'
    button1.innerHTML = 'Quotes';
    button2.innerHTML = 'Curly brackets';
    //Button 3 is the correct answer.
    button3.innerHTML = 'Parentheses';
    button3.setAttribute('class', 'true');
    button4.innerHTML = 'Square brackets';

}


//Function to make start screen disappear and display quiz.
function startGame() {

    document.getElementById('start-screen').style.display = 'none'

    questions.setAttribute('class', 'show');

    q1();



}













button1.addEventListener('click', function () {
    if (button1.classList.contains("true")) {
        console.log('the correct option was selected');
        correctCount++;
    }
    else if (button1.classList.contains('false')) {
        console.log('the wrong option was selected');
        wrongCount--;
    }
});

button2.addEventListener('click', function () {
    if (button2.classList.contains("true")) {
        console.log('the correct option was selected');
        correctCount++;
    }
    else if (button2.classList.contains('false')) {
        console.log('the wrong option was selected');
        wrongCount--;
    }
});

button3.addEventListener('click', function () {
    if (button3.classList.contains("true")) {
        console.log('the correct option was selected');
        correctCount++;
    }
    else if (button3.classList.contains('false')) {
        console.log('the wrong option was selected');
        wrongCount--;
    }
});
button4.addEventListener('click', function () {
    if (button4.classList.contains("true")) {
        console.log('the correct option was selected');
        correctCount++;
    }
    else if (button4.classList.contains('false')) {
        console.log('the wrong option was selected');
        wrongCount--;
    }
});



buttonStart.addEventListener('click', startGame);




