function moverPosicion(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.ramdom() * (window.innerHeight - elm.offsetHeigh) + 'px';
    elm.style.left = Math.ramdom() * (window.innerHeight - elm.offsetHeigh) + 'px'; 
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicion(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabia que me dirias que si ')
});
