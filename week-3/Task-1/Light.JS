let lights = document.querySelectorAll(".light");                               let current = 0;
let autoMode = false;
let autoInterval;
let timings = [5000, 2000, 4000]; 

function changeLight() {
lights.forEach(light => light.classList.remove("active")); 
lights[current].classList.add("active"); 
}

function nextLight() {
current = (current + 1) % 3; 
changeLight();
}

document.getElementById("next").addEventListener("click", () => {
if (!autoMode) {
 nextLight();
    }
});

document.getElementById("auto").addEventListener("click", () => {
if (autoMode) {
clearInterval(autoInterval); 
document.getElementById("auto").innerText = "Auto Mode";
 } else {
changeLight(); 
autoInterval = setInterval(nextLight, timings[current]);
document.getElementById("auto").innerText = "Stop Auto Mode"; 
 }

    autoMode = !autoMode; 
});