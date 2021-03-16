var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var numberOfMistakes = 0;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var numButtons = 5;
var volume = 0.05;  //must be between 0.0 and 1.0
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var guessCounter = 0;

document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

function startGame() {
  progress = 0;
  numberOfMistakes = 0;
  gamePlaying = true;
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("mistakes").classList.remove("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  setRandom();
  mistakes();
  playClueSequence();
}

function stopGame() {
  numberOfMistakes = 0;
  mistakes();
  gamePlaying = false;
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("mistakes").classList.add("hidden");
  document.getElementById("stopButton").classList.add("hidden");
}

function mistakes(){
  document.getElementById("numMistakes").innerHTML = numberOfMistakes;
}

function addButtons() {
  var temp = numButtons;
  if(numButtons == 11)
  {
    alert("Max Buttons Added");
    return;
  }
  var button = document.createElement('button');
  button.innerHTML = numButtons;
  button.setAttribute('id', 'button' + numButtons);
  button.onclick = function () {guess(temp)};
  //onmousedown="startTone(1)" onmouseup="stopTone()"

  button.setAttribute('onmousedown', 'startTone(' + temp + ')');
  button.setAttribute('onmouseup', 'stopTone()');

  document.getElementById("buttonDiv").appendChild(button);
  numButtons++;
}

function deleteButtons() {
  if((numButtons - 1) == 2)
  {
    alert("Min Buttons Deleted");
    return;
  }
    
  var element = document.getElementById('button' + (numButtons - 1));
  element.parentNode.removeChild(element);
  numButtons--;
}

function lightButton(button) {
  document.getElementById("button" + button).classList.add("lit")
}
function clearButton(button) {
  document.getElementById("button" + button).classList.remove("lit")
}

function playSingleClue(button) {
  if (gamePlaying) {
    lightButton(button);
    playTone(button, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, button);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
    clueHoldTime -=10;
  }
}

function guess(button) {
  
  console.log("user guessed: " + button);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == button && numberOfMistakes < 3) {
    //Check if our progress equals counter
    if (guessCounter == progress) {
      // Check if it is the last turn
      if (guessCounter == pattern.length - 1) {
        winGame();
      }
      else {
        progress++;
        playClueSequence();
      }
    }
    else
      guessCounter++
  }
  else 
  {
      numberOfMistakes++;
      mistakes();
      guessCounter = 0;

      if(numberOfMistakes == 3)
        loseGame();
  }

}

function loseGame() {
  
  stopGame();
  playMario();
  alert("Game Over. You lost.");
  
}

function playMario() {
  var audio = new Audio('https://cdn.glitch.com/07b868dc-9dbd-4a2c-a1e7-b83d313ca35d%2Fmario%20fail%20sound%20effect.mp3?v=1615917787713');
  audio.volume = .1;
  audio.play();
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
  numberOfMistakes = 0;
  mistakes();

}

function setRandom() {
  for (let i = 0; i < pattern.length; i++) // for each clue that is revealed so far
  {
    pattern[i] = getRandomNum(1, numButtons);
  }
  console.log(pattern);
}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Sound Synthesis Functions
const freqMap = {
  1: 100,
  2: 125,
  3: 150,
  4: 175,
  5: 200,
  6: 225,
  7: 250,
  8: 275,
  9: 300,
  10: 325
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  tonePlaying = true
  setTimeout(function () {
    stopTone()
  }, len)
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    tonePlaying = true
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)