var audioFiles = [musicURL('g8i4mPZDPoFdt9XpF3ExysJlgOUbPF2W'),
musicURL('ZdAWWeUB4vg6jiRrbeAkurjZsVVQOULU'),
musicURL('gDbFwaoX3CP6muZB5LMV0yOGIRFS6h93'),
musicURL('tle9hsTc8fBS1Sip2yfMWJHaxni7Nsi9'),
musicURL('pftuN6fy7XKIYsVswVnxUrmdzQxe6Lre'),
musicURL('H62x1P19oZHlpdkdUfPB2TrF8AH8oSEr'),
musicURL('kH1ekepotpGLgw0ocuMAucK2SBkpaqAB'),
musicURL('niptpFc6N8em4u5577BRrUOgdFYzEbmc'),];

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

function musicURL(id) {
    return 'https://audio.jukehost.co.uk/' + id + ".mp3";
}

//Adjust Volume
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.onchange = changeVolume;
function changeVolume() {
    Howler.volume(volumeSlider.value / 10);
}

function ringAlarm() {
    Howler.stop();
    var sound = new Howl({
        src: [musicURL('S1Y8dmmYd38F5WQHwPUbYHBbdDGOtK7x')],
        onend: function () {
            console.log("alarm stopped");
        }
    })
    sound.play();
    setTimeout(function () {
        sound.stop();
        autoplay(0, audioFiles);
    }, 6000);
}