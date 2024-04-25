const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("current-time");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const controls = document.getElementById("controls");

const playPause = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes

  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
};

const setProgress = () => {
  video.currentTime = +(progress.value * video.duration) / 100;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// //video.addEventListener("pause", updateIcon);
video.addEventListener("click", playPause);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", playPause);
stop.addEventListener("click", stopVideo);
progress.addEventListener("click", setProgress);
