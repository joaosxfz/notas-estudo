///Peça o peso de 5 pessoas e calcule a média dos pesos.

//entrada
let soma = 0

//processamento
for (let i = 1; i <= 5; i++) {
    soma += Number(prompt("Peso da pessoa " + i + ":"))
}

//saida
alert("Média = " + (soma / 5))
