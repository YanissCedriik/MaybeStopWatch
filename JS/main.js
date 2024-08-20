const app = document.getElementById("app");
const roundTime = document.getElementById("lastRound");   
let milliseconds = 0,
  seconds = 0,
  minuets = 0,                              
  hours = 0;              
  days = 0;
var timer;

function startTimer() {                 
  setInterval(countSeconds, 10);                // Starter timer, med intervaller på 10 millisekunder
}

function countSeconds() {
  app.innerHTML = `${days}:${hours}:${minuets}:${seconds}:${milliseconds}`;       // Endrer hva som blir vist i  <div id= "app">
  milliseconds++;           

  if (milliseconds == 100) {                //Hvis millisekunder blir 100 --> legg til 1 sekund og restart millisekunder
    seconds++;
    milliseconds = 00;
  }

  if (seconds == 60) {                      //Hvis sekunder blir 60 --> legg til 1 minutt og restart sekunder
    minuets++;
    seconds = 0;
  }

  if (minuets == 60 ){                      //Hvis minutter blir 60 --> legg til 1 time og restart minutter
    hours++;
    minuets = 0;
  }

  if (hours == 24){                         //Hvis du ikke ser mønsteret --> Logg av
    days++;
    hours = 0;
  }



}

function pauseTimer() {
  roundTime.innerHTML += `<li>${days}:${hours}:${minuets}:${seconds}:${milliseconds}</li>`;       //Trykk på knappen for å vise tid i roundTime (Output definert på linje 2)
  clearInterval(timer);
  milliseconds = 0;
}

function stopAll() {                      // Reload siden
  location.reload();
}
