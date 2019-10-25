let input = document.getElementById("input");
let start_btn = document.getElementById("start_btn");
let stop_btn = document.getElementById("stop_btn");
let counterDisplay = document.getElementById("counterDisplay");
function countdown(time){
    counterDisplay.innerHTML = time;
    var y = setInterval(()=>{
        stop_btn.addEventListener('click',()=>{
    clearInterval(y);
    let tmp_count = counterDisplay.value;
    counterDisplay.innerHTML = "Stopped"

    })
        time -= 1 ;
        if(time < 0){
            clearInterval(y);
            counterDisplay.innerHTML = "Time's Up!!"
        } else {
            counterDisplay.innerHTML = time;
        }
        


    },1000);
}

start_btn.addEventListener('click',()=>{
    let init_count = input.value;
    countdown(init_count);
})


