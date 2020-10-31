const localURL = "http://localhost:3000/vocabulary/";

async function getVocabulary() {
  const res = await fetch(localURL);
  const data = await res.json();
  changeQuiz(data);
}
getVocabulary();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

checkAnswer();
var  rememberAnswer;
var trueScore = 0;
var wrongScore = 0;
function checkAnswer() {
  document.querySelectorAll(".vietnam-mean").forEach(item =>{
    item.addEventListener("click",function() {
      this.parentNode.style.border = "solid 2px red";
      console.log(rememberAnswer);
      if(this.innerHTML === rememberAnswer) {
        trueScore++;
        tempAlert("true",500,"chartreuse");
        getVocabulary();
        this.parentNode.style.border = "solid 2px transparent";
        document.getElementById("true-answer").innerHTML = trueScore;
      }
      else {
        wrongScore++;
        tempAlert("wrong!",500,"red");
        getVocabulary();
        this.parentNode.style.border = "solid 2px transparent";
        document.getElementById("false-answer").innerHTML = wrongScore;
      }
    })
  });
}

function changeQuiz(data) {
  const getAnswer = getRndInteger(0,data.length-1);
  document.querySelector(".english-suggestion").innerHTML = data[getAnswer].english;
  for(i = 1; i < 4; i++) {
    document.querySelectorAll(".vietnam-mean")[0].innerHTML = data[getAnswer].vietnamese;
    rememberAnswer = document.querySelectorAll(".vietnam-mean")[0].innerHTML;
    document.querySelectorAll(".vietnam-mean")[i].innerHTML = data[getRndInteger(0,data.length)].vietnamese;
  }
  randomAnswer();
}

function randomAnswer() {
  const randomQuiz = getRndInteger(0,3);
  var temp;
  var answerQuiz = document.querySelectorAll(".vietnam-mean")[0];
  var changeAnswer = document.querySelectorAll(".vietnam-mean")[randomQuiz];
  temp = answerQuiz.innerHTML;  
  answerQuiz.innerHTML = changeAnswer.innerHTML;
  changeAnswer.innerHTML = temp;
}

function tempAlert(msg,duration,color)
{
 var el = document.createElement("div");
 el.setAttribute("class","alert");
 el.style.color = color;
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.querySelector(".container").appendChild(el);
}