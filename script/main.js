// Desenho da bandeira do Brasil
// function desenharBandeiraDoBrasil() {
//     var tela = document.querySelector("canvas");
//     var pincel = tela.getContext("2d");

//     pincel.fillStyle("green");
//     pincel.fillRect(0, 0, 600, 400);
//     pincel.fill();

//     pincel.fillStyle = "yellow";
//     pincel.beginPath();
//     pincel.moveTo(300, 50);
//     pincel.lineTo(50, 200);
//     pincel.lineTo(550, 200);
//     pincel.fill();

//     pincel.beginPath();
//     pincel.moveTo(300, 350);
//     pincel.lineTo(50, 200);
//     pincel.lineTo(550, 200);
//     pincel.fill();

//     pincel.fillStyle = "darkblue";
//     pincel.beginPath();
//     pincel.arc(300, 200, 100, 0, 2 * 3.14);
//     pincel.fill();
// }


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


// Desenhando um círculo que vai e volta na tela
// var tela = document.querySelector("canvas");
// var pincel = tela.getContext("2d");

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// function desenhaCirculo(coordenadaX, coordenadaY, raio) {
//     pincel.fillStyle = "blue";
//     pincel.beginPath();
//     pincel.arc(coordenadaX, coordenadaY, raio, 0, 2 * Math.PI);
//     pincel.fill();
// }

// var coordenadaX = 20;
// let volta = false;

// function atualizaTela() {
//     pincel.clearRect(0, 0, 600, 400);
//     desenhaCirculo(coordenadaX, 20, 10);

//     if (volta) {
//         coordenadaX--;
//         if (coordenadaX <= 20) {
//             volta = false;
//         }
//     } else {
//         coordenadaX++;
//         if (coordenadaX >= 600) {
//            volta = true; 
//         }
//     }
// }

// setInterval(atualizaTela, 10);


// Jogo de Tiro ao alvo
// var tela = document.querySelector("canvas");
// var pincel = tela.getContext("2d");

// var raio = 10;
// var coordenadaXAlvo;
// var coordenadaYAlvo;

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// function desenhaCirculo(corCirculo, coordenadaX, coordenadaY, raioCirculo) {
//     pincel.fillStyle = corCirculo;
//     pincel.beginPath();
//     pincel.arc(coordenadaX, coordenadaY, raioCirculo, 0, 2 * 3.14);
//     pincel.fill();
// }

// function desenhaAlvo(coordenadaXAlvo, coordenadaYAlvo) {
//     desenhaCirculo("red", coordenadaXAlvo, coordenadaYAlvo, raio + 20);
//     desenhaCirculo("white", coordenadaXAlvo, coordenadaYAlvo, raio + 10);
//     desenhaCirculo("red", coordenadaXAlvo, coordenadaYAlvo, raio);
// }

// function sorteiaPosicaoAlvo(limite) {
//     return Math.floor(Math.random() * limite);
// }

// function atualizaTela() {
//     coordenadaXAlvo = sorteiaPosicaoAlvo(600);
//     coordenadaYAlvo = sorteiaPosicaoAlvo(400);

//     pincel.clearRect(0, 0, 600, 400);
//     desenhaAlvo(coordenadaXAlvo, coordenadaYAlvo);
// }

// function acertarAlvo(evento) {
//     let posicaoCliqueX = evento.pageX - tela.offsetLeft;
//     let posicaoCliqueY = evento.pageY - tela.offsetTop;

//     if (posicaoCliqueX > coordenadaXAlvo - raio 
//         && posicaoCliqueX < coordenadaXAlvo + raio
//         && posicaoCliqueY > coordenadaYAlvo - raio
//         && posicaoCliqueY < coordenadaYAlvo + raio
//     ) {
//         alert("Acertou!");
//     }
// }

// setInterval(atualizaTela, 2000);

// tela.onclick = acertarAlvo;


var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

var habilitaDesenhar = false;
var corAtual = "red";
var ladoQuadradoPaleta = 100;

function desenhaLousa() {
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);
    pincel.fill();
}

function desenhaQuadradoPaleta(corPaleta, posicaoXQuadrado, posicaoYQuadrado) {
    pincel.fillStyle = corPaleta;
    pincel.fillRect(posicaoXQuadrado, posicaoYQuadrado, ladoQuadradoPaleta, ladoQuadradoPaleta);
    pincel.fill();
}

function habilitaNovaCorPaleta(coordenadaXClique) {
    if (coordenadaXClique <= ladoQuadradoPaleta) {
        corAtual = "blue";
    } else if (coordenadaXClique > ladoQuadradoPaleta && coordenadaXClique <= ladoQuadradoPaleta * 2) {
        corAtual = "red";
    } else {
        corAtual = "green";
    }
}

function desenhaCirculo(coordenadaXCirculo, coordenadaYCirculo, raioCirculo) {
    if (habilitaDesenhar && (coordenadaXCirculo > ladoQuadradoPaleta * 3 || coordenadaYCirculo > ladoQuadradoPaleta)) {
        pincel.fillStyle = corAtual;
        pincel.beginPath();
        pincel.arc(coordenadaXCirculo, coordenadaYCirculo, raioCirculo, 0, 2 * 3.14);
        pincel.fill();
    }
}

desenhaLousa();
desenhaQuadradoPaleta("blue", 0, 0);
desenhaQuadradoPaleta("red", ladoQuadradoPaleta, 0);
desenhaQuadradoPaleta("green", ladoQuadradoPaleta * 2, 0);

tela.onmousemove = function (evento) {
    let coordenadaX = evento.pageX - tela.offsetLeft;
    let coordenadaY = evento.pageY - tela.offsetTop;
    
    desenhaCirculo(coordenadaX, coordenadaY, 10);
}

tela.onmousedown = function (evento) {
    let coordenadaX = evento.pageX - tela.offsetLeft;
    let coordenadaY = evento.pageY - tela.offsetTop;

    habilitaDesenhar = true;

    if (coordenadaX <= ladoQuadradoPaleta * 3 && coordenadaY <= ladoQuadradoPaleta) {
        habilitaNovaCorPaleta(coordenadaX, coordenadaY);
    }
}

tela.onmouseup = function() {
    habilitaDesenhar = false;
}