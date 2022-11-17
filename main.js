let seconds = 0;
let minutes = 0;
let hours = 0;
let clickCount = 0;
let intervalId = '';

const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const totalTime = document.querySelector('#totalTime');

resetBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    seconds = 1;
    minutes = 0;
    startBtn.children[0].textContent = "Start";
    clickCount = 0;
    totalTime.innerHTML = "00 : 00";
    document.querySelector('.stopwatch').classList.remove("blinkAni");
})

startBtn.addEventListener('click',()=>{
    if(clickCount % 2 == 0){
        intervalId = setInterval(()=>{
            
            if(seconds < 60){
                if(seconds < 10){
                    totalTime.innerHTML = "00 : 0"+ (++seconds);
                }else{
                    totalTime.innerHTML = "00 : "+ (++seconds);
                }
            }else if(seconds >= 60 && seconds <= 3600){
                minutes = Math.floor(seconds / 60);
                seconds++;
                if(minutes < 10 ){
                    if(seconds < 10){
                        totalTime.innerHTML = "0"+minutes+" : 0"+ (Math.floor(seconds % 60));
                    }else{
                        totalTime.innerHTML = "0"+minutes+" : "+ (Math.floor(seconds % 60));
                    }
                }else{
                    totalTime.innerHTML = minutes+" : "+ (Math.floor(seconds % 60));
                }
            }
        },1000);
        startBtn.children[0].textContent = "Stop";
        document.querySelector('.stopwatch').classList.add("blinkAni");
    }else{
        clearInterval(intervalId);
        startBtn.children[0].textContent = "Start";
        document.querySelector('.stopwatch').classList.remove("blinkAni");
    }
    clickCount++;
})
