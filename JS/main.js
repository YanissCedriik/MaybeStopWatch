const app = document.getElementById("app");
const roundTime = document.getElementById("lastRound");
let milliseconds,
  seconds = 0,
  minuets = 0,
  hours = 0;
var timer;

function startTimer() {
  setInterval(countSeconds, 10);
}

function countSeconds() {
  app.innerHTML = `${hours}:${minuets}:${seconds}:${milliseconds}`;
  milliseconds++;

  if (milliseconds == 100) {
    seconds++;
  }

  if (seconds == 60) {
    minuets++;
  }



}

function pauseTimer() {
  roundTime.innerHTML += `<li>${hours}:${minuets}:${seconds}:${milliseconds}</li>`;
  clearInterval(timer);
  milliseconds = 0;
}

function stopAll() {
  location.reload();
}
