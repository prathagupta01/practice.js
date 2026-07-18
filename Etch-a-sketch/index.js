const custom = document.getElementById("custom")




let sign = 0;
let bgcolo;
let wbcolo;
let mode = "ns";

let o = 0;
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  o=  o + (10/100);
  return `rgb(${r}, ${g}, ${b},${o})`;
}

function randomwb(){
    const random = Math.floor(Math.random()*10 + 1);
    if(random %2 == 0) return '#ffffff'
    else return '#000000'
}

document.getElementById("ns").addEventListener("click", () => {
    mode = "ns";
});

document.getElementById("wb").addEventListener("click", () => {
    mode = "bw";
});


custom.addEventListener("click",()=>{

const container = document.getElementById("container");
    container.innerHTML = "";
    sign = prompt("enter the number of grid that you want in the board");
    let cell = 500/sign;

    for(let a = 0; a < sign;a++){
    for(let b = 0;b<sign;b++){
        const div = document.createElement("div");
        div.style.backgroundColor = "lightblue";
        div.className = "hovering" 
        div.style.height = `${cell}px`;
        div.style.width = `${cell}px`;
        
        container.appendChild(div);
        div.addEventListener("mouseenter",() =>{
          
    if (mode === "bw") {
        div.style.backgroundColor = randomwb();
    } else {
        div.style.backgroundColor = getRandomRgbColor();
    }
});

    }
}})