let [ms, s, m, h] = [0, 0, 0, 0]
let timeRef = document.querySelector(".display")
let int = null;
let castNow = null;
let count = 0;

document.getElementById("startBtn").addEventListener("click", ()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pauseBtn").addEventListener("click", ()=>{
    clearInterval(int);
});

document.getElementById("resetBtn").addEventListener("click", ()=>{
    clearInterval(int);
    [ms, s, m, h] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
    document.getElementById("castRecords").innerHTML = "";
    count = 0;
});

function displayTimer(){
    ms += 10;
    if(ms == 1000){
        ms = 0;
        s++;

        if(s == 60){
            s = 0;
            m++

            if(m == 60){
                m = 0;
                h++;
            }
        }
    }

    let hr = h < 10 ? "0" + h : h;
    let min = m < 10 ? "0" + m : m;
    let sec = s < 10 ? "0" + s : s;
    let miliSec = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms

    timeRef.innerHTML = `${hr} : ${min} : ${sec} : ${miliSec}`
}

function cast(){
    count += 1
    castNow = h + " : " + m + " : " + s + " : " + ms;
    document.getElementById("castRecords").innerHTML =  document.getElementById("castRecords").innerHTML + "<p>" + "Cast "+count +" " + "=>" + " " + castNow + "</p>"
}
