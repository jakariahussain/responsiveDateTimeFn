const hoursEl = document.querySelector('#hours')
const minuteEl = document.querySelector('#minutes')
const secondEl = document.querySelector('#second')
const ampmEL = document.querySelector("#ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = h >= 12 ? 'pm' : 'am';

    // update AM PM
   

    // Upadate clock
    hoursEl.innerText=h;
    minuteEl.innerText=m; 
    secondEl.innerText=s;
    ampmEL.innerText = ampm
   

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    setTimeout(()=>{
        updateClock()
    }, 1000);

}
updateClock()