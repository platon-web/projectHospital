var intervalId;

function updateTimer() {
    currentSeconds--;
    var secondsText = document.getElementById("seconds");
    if(currentSeconds<=0){
        clearInterval(intervalId);
        //resetTimer();
    }
    secondsText.textContent=currentSeconds.toString().padStart(2,"0");
}

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function resetTimer() {
    clearInterval(intervalId);
    currentSeconds=maxSeconds;
    document.getElementById("seconds").textContent = maxSeconds.toString().padStart(2,"0");
}

const maxSeconds = 29;
var currentSeconds=maxSeconds;

document.getElementById("resetBtn").addEventListener("click", function () {
    resetTimer();
    startTimer();
});
