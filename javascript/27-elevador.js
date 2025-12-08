// Simule um elevador. Cada pessoa que entra informa seu peso.
// Quando o peso total atingir 180 kg, o elevador informa que atingiu o peso máximo.

//entrada
let total = 0

//processamento
while (total < 180) {
    total += Number(prompt("Peso da pessoa:"))
}

//saida
alert("Peso máximo atingido!")
