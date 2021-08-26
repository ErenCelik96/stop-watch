document.querySelector(".play").addEventListener("click", function() {
    startTimer();
    document.querySelector(".pause").style.display="inline";
    document.querySelector(".play").style.display="none";
});

document.querySelector(".pause").addEventListener("click", function() {
    stopTimer();
    document.querySelector(".play").style.display="inline";
    document.querySelector(".pause").style.display="none";
});

document.querySelector(".stop").addEventListener("click", function() {
    resetTimer()
    document.querySelector(".play").style.display="inline";
    document.querySelector(".pause").style.display="none";
});

let timer = document.querySelector("p");

let mls = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer(){
   if (stoptime == true) {
       stoptime = false;
       timerCycle();
   }
};

function stopTimer(){
    if(stoptime == false){
        stoptime = true;
    }
};

function timerCycle(){
    if(stoptime==false){
        mls = parseInt(mls);
        sec = parseInt(sec);
        min = parseInt(min);



    mls = mls + 1;

    if (mls == 100) {
        sec = sec +1;
        min = 0;
        mls =0;
    }

    if (sec == 60) {
        min = min + 1;
        mls = 0;
    }

    if (sec < 10 || sec == 0) {
        sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
        min = "0" + min;
    }
    if (mls < 10 || mls == 0) {
        mls = "0" + mls;
    }

    timer.innerHTML=min+":"+sec+":"+mls;

    setTimeout("timerCycle()", 10);

    }
}

function resetTimer() {
    timer.innerHTML="00:00:00";
    stoptime=true;
    mls=0;
    sec=0;
    min=0;
}
