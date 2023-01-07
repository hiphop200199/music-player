document.addEventListener("DOMContentLoaded",()=>{
    const s1=new Audio("SavageLove.mp3");
    const song1={
        name:"Savage Love..",
        bpm:150
    }
    const playButton=document.getElementById("play");
    let message=document.getElementById("title");
    let time=document.querySelector(".time");
    let icon=document.querySelector(".icon");
    let info=document.getElementById("info");
playButton.addEventListener("click",()=>{   if(s1.paused){s1.play();
    message.innerText=song1.name;
    time.style.animation=`progress ${60/(song1.bpm)*4}s  infinite`;
    icon.style.animation=`beats ${60/(song1.bpm)*4}s  infinite`;
    info.innerText=song1.bpm+"BPM..";
    }else{
        s1.pause();
    message.innerText="Where`s your beat?..";
    time.style.animation="none";
    icon.style.animation="none";
    info.innerText="";
    }
    
});
})