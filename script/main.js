// document.writeln("18" + 20); // 1820

// var media = (39 + 20 + 41) / 3;
// document.writeln(`A média das idades é ${Math.round(media)}`);

// imc = peso / altura * altura;
var nomeUsuario = validador(nomeUsuario, "Informe o seu nome:");
var pesoUsuario = parseFloat(validador(pesoUsuario, "Informe o seu peso:"));
var alturaUsuario = parseFloat(validador(alturaUsuario, "Informe a sua altura:"));

if (isNaN(pesoUsuario) || isNaN(alturaUsuario)) {
    document.writeln("Valores inválidos inseridos!")
} else {
    var imcUsuario = calcularIMC(pesoUsuario, alturaUsuario);
    document.writeln(`IMC ${nomeUsuario} = ${imcUsuario}`);
}

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function validador(variavel, mensagemPrompt) {
    while (variavel == "" || variavel == null) {
        variavel = prompt(mensagemPrompt);
    }

    return variavel;
}
