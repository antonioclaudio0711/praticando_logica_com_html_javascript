// document.writeln("18" + 20); // 1820

// var media = (39 + 20 + 41) / 3;
// document.writeln(`A média das idades é ${Math.round(media)}`);

// imc = peso / altura * altura;
// var nomeUsuario = validador(nomeUsuario, "Informe o seu nome:");
// var pesoUsuario = parseFloat(validador(pesoUsuario, "Informe o seu peso:"));
// var alturaUsuario = parseFloat(validador(alturaUsuario, "Informe a sua altura:"));

// if (isNaN(pesoUsuario) || isNaN(alturaUsuario)) {
//     document.writeln("Valores inválidos inseridos!")
// } else {
//     var imcUsuario = calcularIMC(pesoUsuario, alturaUsuario);
//     document.writeln(`IMC ${nomeUsuario} = ${imcUsuario}<br>`);

//     if (imcUsuario < 18.5) {
//         document.writeln("IMC abaixo do recomendado!");
//     } else if (imcUsuario >= 18.5 && imcUsuario <= 35) {
//         document.writeln("IMC normal!");
//     } else {
//         document.writeln("IMC acima do recomendado!");
//     }
// }

// function calcularIMC(peso, altura) {
//     let imc = peso / (altura * altura);
//     return imc;
// }

// function validador(variavel, mensagemPrompt) {
//     while (variavel == "" || variavel == null) {
//         variavel = prompt(mensagemPrompt);
//     }

//     return variavel;
// }

var anosBrasilCampeao = [1958, 1962, 1970, 1994, 2002];
var anoCorrente = new Date().getFullYear();
var anoInicioCopas = 1930;
// while (anoInicioCopas <= anoCorrente) {
//     document.writeln(`<br>Tivemos Copa do Mundo no ano de ${anoInicioCopas}<br>`);

//     if (anosBrasilCampeao.includes(anoInicioCopas)) {
//         document.writeln("Brasil campeão!!<br>");
//     }
//     anoInicioCopas += 4;
// }

for (let index = anoInicioCopas; index <= anoCorrente; index += 4) {
    document.writeln(`<br>Tivemos Copa do Mundo no ano de ${index}<br>`);

    if (anosBrasilCampeao.includes(index)) {
        document.writeln("Brasil campeão!!<br>");
    }
}
