var readlineSync = require("readline-sync");

var score = 0;

//Welcoming the user into the game
var userName = readlineSync.question("May I know your name ");
console.log("Welcome " + userName + "! to DO YOU KNOW TEJA? ");

//Top two high scores
var highScores = [
  {
    name: "Krishna",
    score: 7,
  },
  {
    name: "Teja",
    score: 6,
  },
];

var questionList = [
  {
    question: "In which city does Teja live? ",
    answer: "hyderabad",
  },
  {
    question: "What is Teja's fav colour? ",
    answer: "black",
  },
  {
    question: "Which is Teja's fav language? ",
    answer: "telugu",
  },
  {
    question: "Which one will Teja pick ? summer or winter ",
    answer: "winter",
  },
  {
    question: "Which one will Teja choose ? movies or books? ",
    answer: "movies",
  },
  {
    question: "Which one will Teja choose ? hills or sea ",
    answer: "sea",
  },
  {
    question: "Which one will Teja pick ? food or travel ",
    answer: "food",
  },
];

//Quiz function
function quiz(question) {
  var userAnswer = readlineSync.question(question.question);
  if (userAnswer.toUpperCase() === question.answer.toUpperCase()) {
    score++;
    console.log("Right !!");
  } else {
    score--;
    console.log("Wrong !!");
  }
  console.log("Your current score is ", score);
}

//Asking questions to user
for (let i = 0; i < questionList.length; i++) {
  quiz(questionList[i]);
}

//User score display
console.log("Yay! your score is ", score);

//Leaderboard
console.log("Highscores are ");
for (let i = 0; i < highScores.length; i++) {
  var user = highScores[i];
  console.log("name: ", user.name);
  console.log("Score: ", user.score);
}

//If the user has beaten the high score
if (score > highScores[0].score || score > highScores[1].score) {
  console.log("Congratulations! You've beaten the high score");
  console.log("Please send me a screenshot of your score :) ");
}
