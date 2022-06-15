let clock = 7;

function runclock() {

}

function start() {
    
    // code is from https://www.codegrepper.com/code-examples/javascript/add+countdown+time+to+game+javascript

let interval = setInterval(function(){
    
document.getElementById('startBtn').style.visibility = "hidden";
document.getElementById('timeLeft').innerHTML=clock;
--clock;
  if (clock === -2){
    clearInterval(interval);
    clock = 7;
    document.getElementById('timeLeft').innerHTML='Game over';
    document.getElementById('startBtn').style.visibility = "visible";
    alert("You're out of time!");
   
  }
}, 1000);

// ________------------Mix colors and words

}

// Måste ha en event listener


function word() {
    randomNumber = Math.floor(Math.random() * 5)
    colorsArray = ["black", "red", "green", "blue", "yellow" ]
    wordsArray = ["black", "red", "green", "blue", "yellow" ]


}