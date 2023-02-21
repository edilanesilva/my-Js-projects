const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");
const lamp = document.querySelector("#lamp");
let lampMain = document.querySelector('.lampada');

function ligarLampada() {
  lamp.src = "assets/img/ligada.png";
}

function desligarLampada() {
  lamp.src = "assets/img/desligada.png";
}

function quebrarLampada() {
  lamp.src="assets/img/quebrada.png"
}
function trocarLampada() {
  lamp.src="assets/img/desligada.png"
}
turnOn.addEventListener("click", ligarLampada);
turnOff.addEventListener("click", desligarLampada);
lamp.addEventListener("click", quebrarLampada);
lamp.addEventListener('dblclick',trocarLampada)

lampMain.addEventListener("mouseover", function () {
  this.style.backgroundColor = "yellow";
 
});

lampMain.addEventListener("mouseout", function () {
  this.style.backgroundColor = "red";
 
});