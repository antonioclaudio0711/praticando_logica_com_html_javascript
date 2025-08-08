// Desenho da bandeira do Brasil
// var tela = document.querySelector("canvas");
// var pincel = tela.getContext("2d");
// criarRetangulo("green", 0, 0, 600, 400);

// pincel.fillStyle = "yellow";
// pincel.beginPath();
// pincel.moveTo(300, 50);
// pincel.lineTo(50, 200);
// pincel.lineTo(550, 200);
// pincel.fill();

// pincel.beginPath();
// pincel.moveTo(300, 350);
// pincel.lineTo(50, 200);
// pincel.lineTo(550, 200);
// pincel.fill();

// pincel.fillStyle = "darkblue";
// pincel.beginPath();
// pincel.arc(300, 200, 100, 0, 2 * 3.14);
// pincel.fill();


// Desenho quadrados até o limite do Canvas usando loop
// function desenhaQuadrado(corQuadrado, coordenadaInicialX, coordenadaInicialY) {
//     var tela = document.querySelector("canvas");
//     var pincel = tela.getContext("2d");

//     pincel.fillStyle = corQuadrado;
//     pincel.fillRect(coordenadaInicialX, coordenadaInicialY, 50, 50);
//     pincel.fillStroke = "red";
//     pincel.strokeStyle = "black";
//     pincel.strokeRect(coordenadaInicialX, coordenadaInicialY, 50, 50);
// }

// var maxWidth = 0;
// while (maxWidth <= 600) {
//     desenhaQuadrado("blue", maxWidth, 0);
//     maxWidth += 50;
// }


// Desenho de círculos utilizando o movimento do mouse
// var tela = document.querySelector("canvas");
// var pincel = tela.getContext("2d");

// var habilitaDesenhar = false;

// function plotarCirculo(evento) {
//     if (habilitaDesenhar) {
//         let posicaoX = evento.pageX - tela.offsetLeft;
//         let posicaoY = evento.pageY - tela.offsetTop;

//         // pincel.fillStyle = "white";
//         // pincel.font = "10px Georgia";
//         // pincel.fillText(`X = ${posicaoX}, Y = ${posicaoY}`, posicaoX + 15, posicaoY);

//         pincel.fillStyle = "red";
//         pincel.beginPath();
//         pincel.arc(posicaoX, posicaoY, 10, 0, 2 * 3.14);
//         pincel.fill();
//     }
// }

// pincel.fillStyle = "grey";
// pincel.fillRect(0, 0, 600, 400);

// tela.onmousemove = plotarCirculo;

// tela.onmousedown = function() {
//     habilitaDesenhar = true;
// };

// tela.onmouseup = function() {
//     habilitaDesenhar = false;
// }


var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(coordenadaX, coordenadaY, raio) {
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(coordenadaX, coordenadaY, raio, 0, 2 * Math.PI);
    pincel.fill();
}

var coordenadaX = 20;
function atualizaTela() {
    pincel.clearRect(0, 0, 600, 400);
    desenhaCirculo(coordenadaX, 20, 10);
    coordenadaX++;
}

setInterval(atualizaTela, 10);




