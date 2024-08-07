let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const runner = document.getElementById('runner');

function updateDisplay() {
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

function updateProgress() {
    const totalSeconds = 25 * 60;
    const elapsedSeconds = (25 - minutes) * 60 + (60 - seconds);
    const progressPercentage = (elapsedSeconds / totalSeconds) * 100;
    runner.style.left = `calc(${progressPercentage}% - 25px)`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert('Time\'s up!');
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
        updateProgress();
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    updateProgress();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
updateProgress();