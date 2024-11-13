console.log("Olá, nós somos da Nutricale. Calcularemos quantas calorias você deve ingerir diariamente.");

let sexo = parseInt(prompt("Diga o seu sexo, digite 1 para masculino, digite 2 para feminino: "));
let peso = parseFloat(prompt("Digite seu peso em quilos: "));
let idade = parseFloat(prompt("Digite sua idade: "));
let altura = parseFloat(prompt("Digite sua altura em centímetros: "));

let resultadoHomem = (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));
let resultadoMulher = (665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));

function calcularcalorias() {
    let resultadoFinal;
    if (sexo === 1) {
        resultadoFinal = "Você deve ingerir" + resultadoHomem + " calorias.";
    }
    else if (sexo === 2) {
        resultadoFinal ="Você deve ingerir" + resultadoMulher + " calorias.";
    }
    else {
        resultadoFinal = "Escolha o sexo correto."; 
    }

    document.getElementById("resposta").innerHTML = resultadoFinal; 
}