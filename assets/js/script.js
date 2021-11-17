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