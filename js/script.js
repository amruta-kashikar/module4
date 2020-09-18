
let playbutton = document.getElementById("play");
let music = document.getElementById("music");
let musicimg = document.getElementById("musicimg");

playbutton.addEventListener('click',playaudio);
let musicplaying = false;

function playaudio() {
    if (musicplaying == false) {
      console.log("button click");
      music.play();
      musicplaying = true;
      musicimg.classList.add("animate");
      playbutton.classList.remove("fa-play-circle-o");
      playbutton.classList.add("fa-pause-circle-o");
      
    } else {
      console.log("button click");
      music.pause();
      musicplaying = false;
      musicimg.classList.remove("animate");
      playbutton.classList.remove("fa-pause-circle-o");
      playbutton.classList.add("fa-play-circle-o");
    }
  }
  
