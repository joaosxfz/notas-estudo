//Peça dois números e uma operação matemática (+, -, *, /).
// Calcule e mostre o resultado da operação escolhida.

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))
const operação = prompt("Escolha uma operação: (+, -, *, /)")

if (operação === "+") {
    alert("O resultado é " + (num1 + num2))
}
else if (operação === "-") {
    alert("O resultado é " + (num1 - num2))
}
else if (operação === "*") {
    alert("O resultado é " + (num1 * num2))
}

else {
    alert("O resultado é " + (+num1 / +num2))
}