let timer;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;
let laps = [];

document.getElementById('start').addEventListener('click', startTime);
document.getElementById('pause').addEventListener('click', pauseTime);
document.getElementById('reset').addEventListener('click', resetTime);
document.getElementById('lap').addEventListener('click', recordLap);

function startTime() {
    if (isRunning){
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1000 / 60);
    }
}

function resetTime() {
    if (isRunning) {
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
    }
}

function resetTime() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    laps = [];
    updateDisplay();
    updateLaps();
}

function recordLap() {
    if (isRunning) {
        laps.push(elapsedTime);
        updateLaps();
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const time =new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const miliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
    document.getElementById('display').textContent = '${minutes}:${seconds}:${miliseconds}';
}

function updateDisplay() {
    const lapList = document.getElementById('laps');
    lapList.innerHTML = '';
    laps.forEach((lap, index) => {
      const time = new Date(lap);
      const minites = String(time.getUTCMinutes()).padStart(2, '0');
      const seconds = String(time.getUTCSeconds()).padStart(2, '0');
      const miliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
      const li = document.createElement('li');
      li.textContent = 'Lap ${index + 1}: ${minutes}:${seconds}:${miliseconds}';
      lapslist.appendChild(li);
    });
}