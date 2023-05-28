var settingsBox = document.getElementById("settingsBox");
var settingsButton = document.getElementById("settingsButton");

settingsButton.onclick = toggleSettingsBox;
var boxActive = false;

function toggleSettingsBox() {
    if (boxActive == false) {
        settingsBox.style.display = "block";
    }
    else {
        settingsBox.style.display = "none";
    }
    boxActive = !boxActive;
}
