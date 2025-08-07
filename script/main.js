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

function desenhaQuadrado(corQuadrado, coordenadaInicialX, coordenadaInicialY) {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = corQuadrado;
    pincel.fillRect(coordenadaInicialX, coordenadaInicialY, 50, 50);
    pincel.fillStroke = "red";
    pincel.strokeStyle = "black";
    pincel.strokeRect(coordenadaInicialX, coordenadaInicialY, 50, 50);
}

var maxWidth = 0;
while (maxWidth <= 600) {
    desenhaQuadrado("blue", maxWidth, 0);
    maxWidth += 50;
}

