let elevator = document.getElementById("elevator");
let level0 = document.getElementById("level0");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let liftAudio = new Audio("./assets/sound.wav");

const levelZeroBtn = document.getElementById("level-0-up-btn");
const levelOneUpBtn = document.getElementById("level-1-up-btn");
const levelOneDownBtn = document.getElementById("level-1-down-btn");
const levelTwoDownBtn = document.getElementById("level-2-down-button");

levelZeroBtn.addEventListener("click", levelZeroGoUp);
levelOneUpBtn.addEventListener("click", levelOneGoUp);
levelOneDownBtn.addEventListener("click", levelOneGoDown);
levelTwoDownBtn.addEventListener("click", levelTwoFoDown);

let groundFloor = 0;
let nextFloor;

function levelZeroGoUp() {
  nextFloor = 2;
  var distance = (groundFloor - nextFloor) * 250 - 3;
  elevator.style["transition"] = "10s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    liftAudio.play();
  }, 10000);
}

function levelOneGoUp() {
  if (nextFloor == 0) {
    return;
  }
  nextFloor = 1;
  var distance = (groundFloor - nextFloor) * 250;
  elevator.style["transition"] = "5s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    liftAudio.play();
  }, 5000);
}
function levelTwoFoDown() {
  nextFloor = 0;
  var distance = (groundFloor - nextFloor) * 250;
  elevator.style["transition"] = "10s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    liftAudio.play();
  }, 10000);
}
function levelOneGoDown() {
  if (nextFloor == 2) {
    return;
  }
  nextFloor = 1;
  var distance = (groundFloor - nextFloor) * 250;
  elevator.style["transition"] = "5s linear";
  elevator.style.transform = "translateY(" + distance + "px)";
  setTimeout(() => {
    liftAudio.play();
  }, 5000);
}
