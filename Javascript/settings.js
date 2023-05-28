var settingsBox = document.getElementById("settingsBox");
var settingsButton = document.getElementById("settingsButton");
var themeSelector = document.getElementById("theme");
var background = document.getElementById("background");

themeSelector.onchange = function () {
    background.src = "Art/Images/" + themeSelector.value + ".jpg";
}

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
