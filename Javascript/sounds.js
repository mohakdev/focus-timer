var audioFiles = [musicPath('MusicOne'), musicPath('MusicTwo'), musicPath('MusicThree'), musicPath('MusicFour')];
autoplay(0, audioFiles);

function autoplay(i, list) {
    var sound = new Howl({
        src: [list[i]],
        preload: true,
        onend: function () {
            if ((i + 1) == list.length) {
                autoplay(0, list)
            } else {
                autoplay(i + 1, list)
            }
        }
    })
    sound.play();
}

function musicPath(filename) {
    return 'Art/Sounds/' + filename + '.mp3';
}

//Adjust Volume
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.onchange = changeVolume;
function changeVolume() {
    Howler.volume(volumeSlider.value / 10);
    console.log("Changing volume to " + Howler.volume);
}

