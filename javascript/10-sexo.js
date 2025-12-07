//10. Peça o sexo da pessoa (H para homem, M para mulher) 
// e a altura. Use as fórmulas para calcular o peso ideal:
//Homens: (72.7 × altura) - 58
//Mulheres: (62.1 × altura) - 44.7

const sexo = prompt("Sexo H/M:")
const altura = Number(prompt("Altura:"))

if (sexo === "H") {
    alert("Seu peso ideal é: " +(72.7 * altura - 58))
}
else if (sexo === "M") {
    alert("O seu peso ideal é: " +(62.1 * altura - 44.7))
}
else {
    alert("Este sexo não existe bro")
}
