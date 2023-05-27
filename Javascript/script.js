//Important Variables
var targetTime;
var started = false;

const timerLabel = document.getElementById("timerText");
const timerBtn = document.getElementById("timerButton");
const workBtn = document.getElementById("workButton");
const breakBtn = document.getElementById("breakButton");


//timerLabel.innerHTML = timer;
workBtn.onclick = setWorkTime;
breakBtn.onclick = setBreakTime;
timerBtn.onclick = timerButtonClick;

function timerButtonClick() {
    if (started) //Stop Timer
    {
        stopTimer();
    }
    else //Start Timer
    {
        startTimer();
    }
    started = !started;
}

function startTimer() {
    // Update the count down every 1 second
    timerBtn.innerText = "Stop";
    var x = setInterval(function () {
        var currentTime = Date.now();
        timerLabel.innerHTML = calculateTimeDiff(currentTime, targetTime);
    }, 1000);
}

function stopTimer() {
    timerBtn.innerText = "Start";
}


//Helper Functions
function calculateTimeDiff(startTime, endTime) {
    var miliseconds = endTime - startTime
    var minutes = Math.floor(miliseconds / 60000);
    var seconds = Math.floor((miliseconds / 1000) % 60);
    return minutes + ":" + seconds;
}

function addMinutes(minutes) {
    var currentTime = new Date();
    return new Date(currentTime.getTime() + minutes * 60000);
}
function setWorkTime() {
    targetTime = addMinutes(50);
    timerLabel.innerHTML = "50:00";
}
function setBreakTime() {
    targetTime = addMinutes(10);
    timerLabel.innerHTML = "10:00";
}