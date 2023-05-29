//Important Variables
var minutes = 50;
var seconds = 00;
var paused = true;
var firstTime = true;

const timerLabel = document.getElementById("timerText");
const timerBtn = document.getElementById("timerButton");
const workBtn = document.getElementById("workButton");
const breakBtn = document.getElementById("breakButton");


workBtn.onclick = setWorkTime;
breakBtn.onclick = setBreakTime;
timerBtn.onclick = timerButtonClick;

function timerButtonClick() {
    if (firstTime) {
        firstTime = false;
        startTimer();
    }
    if (paused) //Start Timer
    {
        paused = false;
        timerBtn.innerText = "Stop";
    }
    else //Stop Timer
    {
        stopTimer();
    }
}

function startTimer() {
    // Update the count down every 1 second
    var x = setInterval(function () {
        if (paused == false) {
            if (minutes == 0 && seconds < 1) {
                stopTimer();
                ringAlarm();
                return;
            }
            if (seconds == 00) {
                setMinuteTime(minutes - 1, 59);
            }
            else {
                setMinuteTime(minutes, seconds - 1);
            }
        }
    }, 1000); // Thousand here means every single second
}

function stopTimer() {
    paused = true;
    timerBtn.innerText = "Start";
}


//Helper Functions
function getMinuteTime() {
    if (seconds < 10) {
        return minutes + ":0" + seconds;
    }
    return minutes + ":" + seconds;
}

function setMinuteTime(min, sec) {
    minutes = min;
    seconds = sec;
    timerLabel.innerHTML = getMinuteTime();
}

function setWorkTime() {
    setMinuteTime(50, 00);
    stopTimer();
}

function setBreakTime() {
    setMinuteTime(10, 00);
    stopTimer();
}