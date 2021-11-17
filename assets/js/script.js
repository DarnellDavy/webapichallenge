const startBtn = document.getElementById("start-button");
startBtn.addEventListener('click', StartQuiz);
startBtn.addEventListener('click', Timer);

const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener('click', DisplayHighScores);

const goBackBtn = document.getElementById("back-button");
goBackBtn.addEventListener('click', RestartQuiz);

var userInitials = document.getElementById("initials");
var clock = document.getElementById("clock");

const A1Button = document.getElementById("Answer1");
A1Button.addEventListener('click', Answer1);
const A2Button = document.getElementById("Answer2");
A2Button.addEventListener('click', Answer2);
const A3Button = document.getElementById("Answer3");
A3Button.addEventListener('click', Answer3);
const A4Button = document.getElementById("Answer4");
A4Button.addEventListener('click', Answer4);

const startPage = document.getElementById("start-page");
const questionPage = document.getElementById("question-page");
const resultsPage = document.getElementById("results-page");
const highScorePage = document.getElementById("high-score-page");

const questionLabel = document.getElementById("question");
const answerResult = document.getElementById("answer-result");
const finalScore = document.getElementById('display-final-score');
const highScores = document.getElementById('high-scores');
const timeDisplay = document.getElementById('time-left');
const clearScoresButton = document.getElementById('clear-scores');
clearScoresButton.addEventListener('click', ClearHighScores);

var currentQuestion = 0;
var numQuestions = 0;
var correctAnswers = 0;
var timer;

var highScoresArray = [];

function StartQuiz() {
    currentQuestion = 0;
    timeDisplay.classList.remove('hidden');
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    questionLabel.innerHTML = questions[currentQuestion].question;
    A1Button.innerHTML = questions[currentQuestion].answers[0].text;
    A2Button.innerHTML = questions[currentQuestion].answers[1].text;
    A3Button.innerHTML = questions[currentQuestion].answers[2].text;
    A4Button.innerHTML = questions[currentQuestion].answers[3].text;
    numQuestions = questions.length;
}

function Timer(){
    var sec = 60;
    timer = setInterval(function(){
        clock.innerHTML=''+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function UserSubmit() {
    var result = userInitials.value + " " + finalScore.textContent;
    highScoresArray.push(result);
    let resultHTML = "";
    for (var i=0;  i < highScoresArray.length; i++) {
        resultHTML += "<li>" + highScoresArray[i] + "</li>";
    }
    return resultHTML;
}

function EndQuiz() {
    console.log("Quiz ended");
    timeDisplay.classList.add('hidden');
    questionPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    finalScore.innerHTML = clock.textContent;
    clearInterval(timer);
}

function ClearHighScores() {
    highScoresArray = [];
    RestartQuiz();
}

function DisplayHighScores() {
    questionPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    startPage.classList.add('hidden');
    highScorePage.classList.remove('hidden');
    highScores.innerHTML = UserSubmit();
}