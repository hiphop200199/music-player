document.addEventListener("DOMContentLoaded",()=>{
   
    const songs=[{name:"少女",url:"/songs/少女.mp3"},{name:"心酸",url:"/songs/心酸.mp3"},{name:"成全",url:"/songs/成全.mp3"},{name:"伯樂",url:"/songs/伯樂.mp3"},{name:"背影",url:"/songs/背影.mp3"},{name:"時光腳步聲",url:"/songs/時光腳步聲.mp3"},{name:"浪費",url:"/songs/浪費.mp3"},{name:"神秘嘉賓"},{name:"連名帶姓",url:"/songs/連名帶姓.mp3"},{name:"想自由",url:"/songs/想自由.mp3"},{name:"感同身受",url:"/songs/感同身受.mp3"},{name:"說謊",url:"/songs/說謊.mp3"},{name:"cinematicMelody",url:"/songs/cinematicMelody.mp3"},{name:"FirstLove",url:"/songs/FirstLove.mp3"},{name:'LaLaLaLoveSong',url:"/songs/LaLaLaLoveSong.mp3"},{name:"Levitating",url:"/songs/Levitating.mp3"},{name:"LoveMeLikeYouDo",url:"/songs/LoveMeLikeYouDo.mp3"},{name:"pianoMoment",url:"/songs/pianoMoment.mp3"},{name:"SaveYourTears",url:"/songs/SaveYourTears.mp3"},{name:"Sugar",url:"/songs/Sugar.mp3"}];
    function checkAudioEnded(){
        if(player.ended){
            playBtn.innerHTML=`&#9658`;
            timeBar.style.width=`0%`;
            timeIcon.style.left=`0%`;
            return true;
        }
        return false;
    }
    let trackIndex=0;
    let player=new Audio(songs[trackIndex]["url"]);
    const prevBtn=document.getElementById("prev");
    const nextBtn=document.getElementById("next");
    const playBtn=document.getElementById("play");
    const loopBtn=document.getElementById("loop");
    const plusBtn=document.getElementById("plus");
    const minusBtn=document.getElementById("minus");
    let currentTime=document.querySelector(".current-time");
    let songDuration=document.querySelector(".song-duration");
    let message=document.getElementById("title");
    let timeBar=document.querySelector(".time");
    let timeIcon=document.querySelector(".icon");
    let convertTime = function(time){    
        let mins = Math.floor(time / 60);
        let secs = Math.floor(time % 60);
        if (secs < 10) {
          secs = '0' + secs;
        }
    
        return mins + ':' + secs;
    }
  
playBtn.addEventListener("click",function(){
     let timeUnit=100/(Math.floor(player.duration));
     songDuration.innerText=convertTime(player.duration);
     setInterval(()=>{
        currentTime.innerText=convertTime(player.currentTime);
        timeBar.style.width=`${timeUnit * player.currentTime}%`;
        timeIcon.style.left=`${timeUnit * player.currentTime}%`;
        checkAudioEnded();
    },1000);
    if(player.paused)  {
   
    playBtn.innerText="||";
    message.innerText=songs[trackIndex]["name"];
    player.play();
    /*time.style.animation=`progress ${60/(song1.bpm)*4}s  infinite`;
    icon.style.animation=`beats ${60/(song1.bpm)*4}s  infinite`;
    info.innerText=song1.bpm+"BPM..";*/
    }
   else{
        playBtn.innerHTML=`&#9658`;
        player.pause();
    }
});
nextBtn.addEventListener("click",function(){
    if(trackIndex==songs.length-1){
        player.pause();
        playBtn.innerHTML=`&#9658`;
        trackIndex=0;
        message.innerText=songs[trackIndex]["name"];
        player.src=songs[trackIndex]["url"];
    }else{
    player.pause();
    playBtn.innerHTML=`&#9658`;
    trackIndex+=1;
    message.innerText=songs[trackIndex]["name"];
    player.src=songs[trackIndex]["url"];
    }
});
prevBtn.addEventListener("click",function(){
    if(trackIndex==0){
        player.pause;
        playBtn.innerHTML=`&#9658`;
        trackIndex=songs.length-1;
        message.innerText=songs[trackIndex]["name"];
        player.src=songs[trackIndex]["url"];
    }else{
    player.pause;
    playBtn.innerHTML=`&#9658`;
    trackIndex-=1;
    message.innerText=songs[trackIndex]["name"];
    player.src=songs[trackIndex]["url"];
    }
});
plusBtn.addEventListener("click",function(){
    player.volume+=0.1;
});
minusBtn.addEventListener("click",function(){
    player.volume-=0.1;
});
loopBtn.addEventListener("click",function(){
    if(player.loop==false){
    player.loop=true;
    loopBtn.style.borderBlockStart="4px solid";
    loopBtn.style.borderBlockEnd="2px solid";
    loopBtn.style.borderInlineStart="1px solid";
    loopBtn.style.borderInlineEnd="3px solid";
    loopBtn.style.borderImageSource="linear-gradient(90deg,#00e4ff,transparent)";
    loopBtn.style.borderImageSlice="1";
    loopBtn.style.animation="bor 2s linear infinite";
    }else{
    player.loop=false;
    loopBtn.style.borderBlockStart="none";
    loopBtn.style.borderBlockEnd="none";
    loopBtn.style.borderInlineStart="none";
    loopBtn.style.borderInlineEnd="none";
    loopBtn.style.borderImageSource="none";
    loopBtn.style.borderImageSlice="none";
    loopBtn.style.animation="none";
    }
});



});
