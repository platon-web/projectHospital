let intervalId;

const updateTimer = () => {
    currentSeconds--;
    let secondsText = document.getElementById("seconds");
    if (currentSeconds <= 0) {
        clearInterval(intervalId);
    }
    secondsText.textContent = currentSeconds.toString().padStart(2, "0");
}

const startTimer = () => {
    intervalId = setInterval(updateTimer, 1000);
}

const resetTimer = () => {
    clearInterval(intervalId);
    currentSeconds = maxSeconds;
    document.getElementById("seconds").textContent = maxSeconds.toString().padStart(2, "0");
}

const maxSeconds = 29;
let currentSeconds = maxSeconds;

document.getElementById("resetBtn").addEventListener("click", time = () => {
    resetTimer();
    startTimer();
});
