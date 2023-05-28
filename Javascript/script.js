//Important Variables
var targetTime;
var paused = true;

const timerLabel = document.getElementById("timerText");
const timerBtn = document.getElementById("timerButton");
const workBtn = document.getElementById("workButton");
const breakBtn = document.getElementById("breakButton");


//timerLabel.innerHTML = timer;
workBtn.onclick = setWorkTime;
breakBtn.onclick = setBreakTime;
timerBtn.onclick = timerButtonClick;

function timerButtonClick() {

    if (paused) //Start Timer
    {
        console.log(paused);
        startTimer();
    }
    else //Stop Timer
    {
        console.log(paused);
        stopTimer();
    }
    paused = !paused;

}

function startTimer() {
    // Update the count down every 1 second
    timerBtn.innerText = "Stop";
    var x = setInterval(function () {
        if (paused == false) {
            var currentTime = Date.now();
            var timeDiff = calculateTimeDiff(currentTime, targetTime);
            if (timeDiff == "00:00") {
                return;
            }
            timerLabel.innerHTML = timeDiff;
        }
    }, 1000); // Thousand here means every single second
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