/* =========================
   MUSIC PLAYER
========================= */

const loveSong =
document.getElementById("loveSong");

const musicButton =
document.getElementById("musicButton");

const musicPlayer =
document.querySelector(".music-player");


function toggleMusic(){

    if(loveSong.paused){

        loveSong.play();

        musicButton.innerHTML = "❚❚";

        musicPlayer.classList.add("playing");

    }

    else{

        loveSong.pause();

        musicButton.innerHTML = "♫";

        musicPlayer.classList.remove("playing");

    }

}
