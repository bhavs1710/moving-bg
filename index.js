const video=document.getElementById("videos");
const pause=document.getElementById("pause");

function myvideo(){
    if(video.paused){
        video.play();
        pause.innerHTML="pause";
    }
    else{
        video.pause();
        pause.innerHTML="play";
    }
}


