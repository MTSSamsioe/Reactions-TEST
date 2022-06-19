let highScoreArray = [0];
highScoreArray.push(11)


let clock = 20;



function start() {

  // Sets score to 0
  document.getElementById("score").innerHTML = 0
  // hides starta button while function is running
  document.getElementById('startBtn').style.visibility = "hidden";
  // show answer buttons
  document.getElementById("yes").style.visibility = "visible";
  document.getElementById("no").style.visibility = "visible";
  // Changes words and colors of the game for initial question
  wordAndColChange()

// code is from https://www.codegrepper.com/code-examples/javascript/add+countdown+time+to+game+javascript

let interval = setInterval(function(){
    

document.getElementById('timeLeft').innerHTML=clock;
--clock;
  if (clock === -2){
    clearInterval(interval);
    clock = 20;
    // Changes time to game over
    document.getElementById('timeLeft').innerHTML='Game over';
    // Push score to high score
    highScore()
    console.log(highScoreArray)
    
    // show answer buttons
    document.getElementById("yes").style.visibility = "hidden";
    document.getElementById("no").style.visibility = "hidden";
    // Show start button and hide answerbuttons
    document.getElementById('startBtn').style.visibility = "visible";
    //document.getElementsByClassName("btn").style.visibility = "hidden"
    alert("You're out of time!");
   
  }
}, 1000);

// ________------------Mix colors and words

}


function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber
}

function wordAndColChange() {
    // Array for wrods and colors
    colorsArray = ["RED", "GREEN", "BLUE", "ORANGE" ]
    wordsArray = ["RED", "GREEN", "BLUE", "ORANGE" ]
   // Random top and bottom words
  let randomTopWord = wordsArray[randomNumber()];
   document.getElementById("topWord").innerHTML = randomTopWord
  let randomBottomWord = wordsArray[randomNumber()];
   document.getElementById("bottomWord").innerHTML = randomBottomWord
  // Random colors
  let randomTopColor = colorsArray[randomNumber()]
  document.getElementById("topWord").style.color = randomTopColor ;
  let randomBottomColor = colorsArray[randomNumber()]
  document.getElementById("bottomWord").style.color = randomBottomColor ;
  
  
  

}

function checkCorrectAnswerIfYes() {
  
  // Top word and color of bottom word
  let topWordOnScreen = document.getElementById("topWord").innerText;
  let bottomColorOnScreen = document.getElementById("bottomWord").style.color;
  // Change Captial letters to lower case so they can compare to colors
  let toLowerCaseWords = topWordOnScreen.toLowerCase() ;
  // If statement that compares that the to word and the color of the bottom word match

  let score = parseInt(document.getElementById("score").innerText);
  if (toLowerCaseWords == bottomColorOnScreen) {
    
    document.getElementById("score").innerText = ++score ;
  } else {
    
    document.getElementById("score").innerText = --score ;
  }

}

function checkCorrectAnswerIfNo() {
  
  // Top word and color of bottom word
  let topWordOnScreen = document.getElementById("topWord").innerText;
  let bottomColorOnScreen = document.getElementById("bottomWord").style.color;
  // Change Captial letters to lower case so they can compare to colors
  let toLowerCaseWords = topWordOnScreen.toLowerCase() ;
  // If statement that compares that the to word and the color of the bottom word match
 
  
  
  let score = parseInt(document.getElementById("score").innerText);
  if (toLowerCaseWords !== bottomColorOnScreen) {
    
    document.getElementById("score").innerText = ++score ;
  } else {
    
    document.getElementById("score").innerText = --score ;
  }

}


function highScore() {
// adds endscore to high score array
 let finalScore = parseInt(document.getElementById("score").textContent);
  highScoreArray.push(finalScore)
  highScoreArray.sort()
  highScoreArray.reverse()
  document.getElementById("highScore").innerHTML = highScoreArray[0]
}