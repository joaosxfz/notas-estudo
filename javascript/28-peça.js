// Peça 10 números e diga quantos deles são negativos.

//entrada
let negativos = 0

//processamento
for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Número " + i + ":"))
    if (num < 0) {
        negativos++
    }
}

//saida
alert("Quantidade de negativos: " + negativos)
