document.addEventListener("DOMContentLoaded",()=>{
   
    const songs=[{name:"少女",url:"https://github.com/hiphop200199/music-player/blob/main/少女.mp3?raw=true"},{name:"心酸",url:"https://github.com/hiphop200199/music-player/blob/main/心酸.mp3?raw=true"},{name:"成全",url:"https://github.com/hiphop200199/music-player/blob/main/成全.mp3?raw=true"},{name:"伯樂",url:"https://github.com/hiphop200199/music-player/blob/main/伯樂.mp3?raw=true"},{name:"背影",url:"https://github.com/hiphop200199/music-player/blob/main/背影.mp3?raw=true"},{name:"時光腳步聲",url:"https://github.com/hiphop200199/music-player/blob/main/時光腳步聲.mp3?raw=true"},{name:"浪費",url:"https://github.com/hiphop200199/music-player/blob/main/浪費.mp3?raw=true"},{name:"神秘嘉賓",url:"https://github.com/hiphop200199/music-player/blob/main/神秘嘉賓.mp3?raw=true"},{name:"連名帶姓",url:"https://github.com/hiphop200199/music-player/blob/main/連名帶姓.mp3?raw=true"},{name:"想自由",url:"https://github.com/hiphop200199/music-player/blob/main/想自由.mp3?raw=true"},{name:"感同身受",url:"https://github.com/hiphop200199/music-player/blob/main/感同身受.mp3?raw=true"},{name:"說謊",url:"https://github.com/hiphop200199/music-player/blob/main/說謊.mp3?raw=true"},{name:"cinematicMelody",url:"https://github.com/hiphop200199/music-player/blob/main/cinematicMelody.mp3?raw=true"},{name:"FirstLove",url:"https://github.com/hiphop200199/music-player/blob/main/FirstLove.mp3?raw=true"},{name:'LaLaLaLoveSong',url:"https://github.com/hiphop200199/music-player/blob/main/LaLaLaLoveSong.mp3?raw=true"},{name:"Levitating",url:"https://github.com/hiphop200199/music-player/blob/main/Levitating.mp3?raw=true"},{name:"LoveMeLikeYouDo",url:"https://github.com/hiphop200199/music-player/blob/main/LoveMeLikeYouDo.mp3?raw=true"},{name:"pianoMoment",url:"https://github.com/hiphop200199/music-player/blob/main/pianoMoment.mp3?raw=true"},{name:"SaveYourTears",url:"https://github.com/hiphop200199/music-player/blob/main/SaveYourTears.mp3?raw=true"},{name:"Sugar",url:"https://github.com/hiphop200199/music-player/blob/main/Sugar.mp3?raw=true"}];
    let trackIndex=0;
    //let timeUnit;
    let player=new Audio(songs[trackIndex]["url"]);
    const whole=document.body;
    const prevBtn=document.getElementById("prev");
    const nextBtn=document.getElementById("next");
    const playBtn=document.getElementById("play");
    const loopBtn=document.getElementById("loop");
    const plusBtn=document.getElementById("plus");
    const minusBtn=document.getElementById("minus");
    const byeBtn=document.querySelector(".bye");
    let currentTime=document.querySelector(".current-time");
    let songDuration=document.querySelector(".song-duration");
    let message=document.getElementById("title");
    /*let timeBar=document.querySelector(".time");
    let timeIcon=document.querySelector(".icon");*/
    let timeRangeBar=document.getElementById("time-bar");
    let convertTime = function(time){    
        let mins = Math.floor(time / 60);
        let secs = Math.floor(time % 60);
        if (secs < 10) {
          secs = '0' + secs;
        }
    
        return mins + ':' + secs;
    }
    function checkAudioEnded(){
        if(player.ended){
            playBtn.innerHTML=`&#9658`;
            /*/timeBar.style.width=`0%`;
            timeIcon.style.left=`0%`;*/
        }
        
    }
    function getTime(){
        //timeUnit=100/(Math.floor(player.duration));
        currentTime.innerText=convertTime(player.currentTime);
        songDuration.innerText=convertTime(player.duration);
       console.log(timeRangeBar.value);
        timeRangeBar.setAttribute("max",player.duration);
        timeRangeBar.value=player.currentTime;
        /*timeBar.style.width=`${timeUnit * player.currentTime}%`;
        timeIcon.style.left=`${timeUnit * player.currentTime}%`;*/
        checkAudioEnded();
    };
   let musicInterval=setInterval(getTime,1000);
   musicInterval;
   byeBtn.addEventListener("click",function(){
        player.pause();
        clearInterval(musicInterval);
        message.innerText="Good bye!";
        setTimeout(()=>{
            whole.style.background="none";
        },1000);
        setTimeout(()=>{
            whole.style.animation="rot 2s cubic-bezier(1, -0.61, 0, 0.99) forwards";
        },2000);
        setTimeout(()=>{
            location.href="https://www.google.com.tw/?hl=zh_TW";
        },6000);
   });
playBtn.addEventListener("click",function(){
     
     
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
        timeRangeBar.value=0;
        playBtn.innerHTML=`&#9658`;
        trackIndex=0;
        message.innerText=songs[trackIndex]["name"];
        player.src=songs[trackIndex]["url"];
    }else{
    player.pause();
    timeRangeBar.value=0;
    playBtn.innerHTML=`&#9658`;
    trackIndex+=1;
    message.innerText=songs[trackIndex]["name"];
    player.src=songs[trackIndex]["url"];
    }
});
prevBtn.addEventListener("click",function(){
    
    if(trackIndex==0){
        player.pause;
        timeRangeBar.value=0;
        playBtn.innerHTML=`&#9658`;
        trackIndex=songs.length-1;
        message.innerText=songs[trackIndex]["name"];
        player.src=songs[trackIndex]["url"];
    }else{
    player.pause;
    timeRangeBar.value=0;
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
timeRangeBar.addEventListener("change",function(){
    player.currentTime=timeRangeBar.value;
});


});
