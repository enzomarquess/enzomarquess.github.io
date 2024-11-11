console.log("Olá, nós somos da Nutricale. Calcularemos quantas calorias você deve ingerir diariamente.");

let sexo = parseInt(prompt("Diga o seu sexo, digite 1 para masculino, digite 2 para feminino: "));
let peso = parseFloat(prompt("Digite seu peso em quilos: "));
let idade = parseFloat(prompt("Digite sua idade: "));
let altura = parseFloat(prompt("Digite sua altura em centímetros: "));

let resultadoHomem = (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
let resultadoMulher = (665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));

let RespostaHomem = "o ideal é ingerir  " + resultadoHomem 
let RespostaMulher = "o ideal é ingerir " + resultadoMulher

if (sexo === 1) {
    console.log("Você tem que ingerir", resultadoHomem, "calorias.");
} else if (sexo === 2) {
    console.log("Você tem que ingerir", resultadoMulher, "calorias.");
} else {
    console.log("Escolha o sexo certo.");
}

function calcularIMC(){
    document.getElementById("resposta").innerHTML = RespostaHomem
}