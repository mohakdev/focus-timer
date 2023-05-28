var audioFiles = [musicPath('MusicThree'), musicPath('MusicOne'), musicPath('MusicTwo')];


function musicPath(filename) {
    return 'Art/Sounds/' + filename + '.mp3';
}

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.onchange = changeVolume;
function changeVolume() {
    Howler.volume(volumeSlider.value / 10);
    console.log("Changing volume to " + Howler.volume);
}

