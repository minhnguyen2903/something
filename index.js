
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      modify(myObj);
    }
  };
  xhttp.open("GET", "http://localhost:3000/vocabulary/" , true);
  xhttp.send();
}

function modify(myObj) {
  var i = getRndInteger(0,myObj.length);
  console.log(i);
  document.querySelector(".box1 .english-vocabulary").innerHTML = myObj[i].english;
  document.querySelector(".box1 .text-type").innerHTML = myObj[i].type;
  document.querySelector(".box1 .vietnamese-translate").innerHTML = myObj[i].vietnamese;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeTag() {
  setTimeout(function(){
    document.querySelector(".box2").style.transform = 'rotateX(90deg)';
    document.querySelector(".box1").style.transform = 'rotateX(0)';
    loadDoc("vocabulary.json", modify);
  
    setTimeout(function(){
      document.querySelector(".box1").className = "temp";
      document.querySelector(".box2").className = "box1";
      document.querySelector(".temp").className = "box2";
    },600);
  },100);
}