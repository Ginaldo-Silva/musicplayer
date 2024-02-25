const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const audioPlayer = document.getElementById('audio-player');
const progress = document.getElementById('audio-progress')
const totalTime = document.getElementById('total-time');
const currentTime = document.getElementById('current-time');


let playMusic = false;

function PlayMusicSwitch() {
    playMusic = !playMusic;

    if(playMusic) {
        playIcon.innerHTML = 'pause';
        audioPlayer.play();
    } else {
        playIcon.innerHTML = 'play_arrow';
        audioPlayer.pause();
    }
}

function updateProgressBar() {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.value = percentage;

    currentTime.textContent = formatTime(audioPlayer.currentTime);
    totalTime.textContent = formatTime(audioPlayer.duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
}

audioPlayer.addEventListener('timeupdate', updateProgressBar);
