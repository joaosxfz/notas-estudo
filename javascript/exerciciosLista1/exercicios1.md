# Exercícios Lista 1

```bash
// -------------------------QUESTÃO1---------------------------------------------
// FUP que solicite dois números reais, realize a soma e imprima o resultado.

function exercicio1() {
    const num1 = Number(prompt("Escolha um número"))
    const num2 = Number(prompt("Escolha um número"))
    const resultado = num1 + num2

    alert("A soma do " + num1 + " com " + num2 + " é " + resultado)
}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })

// -------------------------QUESTÃO 2---------------------------------------------
// FUP que leia o valor da hora do trabalhador e a quantidade de horas
// trabalhadas e diga o valor recebido no final do mês.

function exercicio2() {
    const num1 = Number(prompt("Digite quanto você ganha por hora"))
    const num2 = Number(prompt("Digite a quantidade de horas trabalhadas"))

    alert("Se você recebe " + num1 + " por hora e trabalha " + num2 + " horas por mês. Você ganha " + (num1 * num2) + " mensalmente")
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2() })

// -------------------------QUESTÃO 3---------------------------------------------
// FUP que solicite o peso de 5 pessoas e calcule a média.

function exercicio3() {
    const num1 = Number(prompt("Peso da 1ª pessoa"))
    const num2 = Number(prompt("Peso da 2ª pessoa"))
    const num3 = Number(prompt("Peso da 3ª pessoa"))
    const num4 = Number(prompt("Peso da 4ª pessoa"))
    const num5 = Number(prompt("Peso da 5ª pessoa"))
    const resultado = (num1 + num2 + num3 + num4 + num5) / 5

    alert("A média do peso das 5 pessoas é " + resultado + " kg")
}
const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3() })

// -------------------------QUESTÃO 4---------------------------------------------
// FUP que converte celsius para fahrenheit.

function exercicio4() {
    const num1 = 1.8
    const num2 = prompt("Digite um número")
    const num3 = 32
    const resultado = num1 * num2 + num3

    alert("A conversão do " + num2 + " em celsius pra fahrenheit é " + resultado)
}
const buttonexercicio4 = document.getElementById("exercicio4")
buttonexercicio4.addEventListener('click', () => { exercicio4() })

// -------------------------QUESTÃO 5---------------------------------------------
// Peça uma distância em milhas e converta para quilômetros.
// (Dica: 1 milha = 1.60934 km)

function exercicio5() {
    // entrada
    const num1 = Number(prompt("Digite um número"))
    // processamento
    const num2 = num1 * 1.60934
    // saida
    alert(+num1 + " daria " + num2 + " Km")
}
const buttonexercicio5 = document.getElementById("exercicio5")
buttonexercicio5.addEventListener('click', () => { exercicio5() })

// -------------------------QUESTÃO 6---------------------------------------------
// Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.

function exercicio6() {
    // entrada
    const num1 = Number(prompt("Quantos segundos?"))

    // processamento
    const num2 = 3600
    const num3 = 60
    const num4 = parseInt(num1 / num2)
    const num5 = num1 % num2
    const num6 = parseInt(num5 / num3)
    const num7 = num5 % num3

    // saida
    alert(+num4 + "h " + num6 + "m " + num7 + "s")
}
const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => { exercicio6() })

// -------------------------QUESTÃO 7---------------------------------------------
// Peça uma distância em quilômetros e converta para metros e centímetros.

function exercicio7() {
    // entrada
    const km = Number(prompt("Digite uma distância"))

    // processamento
    const m = km * 1000
    const cm = km * 100

    // saida
    alert(+km + " fica " + m + " m e " + cm + " cm")
}
const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7() })

// -------------------------QUESTÃO 8---------------------------------------------
// Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).

function exercicio8() {
    // entrada
    const num1 = Number(prompt("Digite um número"))

    // processamento
    const zero = num1 * 0
    const um = num1 * 1
    const dois = num1 * 2
    const três = num1 * 3
    const quatro = num1 * 4
    const cinco = num1 * 5
    const seis = num1 * 6
    const sete = num1 * 7
    const oito = num1 * 8
    const nove = num1 * 9
    const dez = num1 * 10

    // saida
    alert("A tabuada do " + num1 + " é " + zero + ", " + um + ", " + dois + ", " + três + ", " + quatro + ", " + cinco + ", " + seis + ", " + sete + ", " + oito + ", " + nove + ", " + dez)
}
const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => { exercicio8() })

// -------------------------QUESTÃO 10---------------------------------------------
// Peça o sexo da pessoa (H para homem, M para mulher) e a altura.
// Use as fórmulas para calcular o peso ideal:
// Homens: (72.7 × altura) - 58
// Mulheres: (62.1 × altura) - 44.7

function exercicio10() {
    const sexo = prompt("Sexo H/M:")
    const altura = Number(prompt("Altura:"))

    if (sexo === "H") {
        alert("Seu peso ideal é: " + (72.7 * altura - 58))
    }
    else if (sexo === "M") {
        alert("O seu peso ideal é: " + (62.1 * altura - 44.7))
    }
    else {
        alert("Este sexo não existe bro")
    }
}
const buttonexercicio10 = document.getElementById("exercicio10")
buttonexercicio10.addEventListener('click', () => { exercicio10() })

// -------------------------QUESTÃO 11---------------------------------------------
// Peça dois números e uma operação matemática (+, -, *, /).
// Calcule e mostre o resultado da operação escolhida.

function exercicio11() {
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
}
const buttonexercicio11 = document.getElementById("exercicio11")
buttonexercicio11.addEventListener('click', () => { exercicio11() })

// -------------------------QUESTÃO 13---------------------------------------------
// Peça um número inteiro e diga se ele é par ou ímpar.
// (Dica: se o número dividido por 2 tiver resto 0, é par)

function exercicio13() {
    // entrada
    const num = Number(prompt('Digite um número, vou avaliar se é par ou impar: '))

    // processamento
    const resto = num % 2

    // saida
    if (resto == 0) {
        alert("O número indicado é par")
    } else {
        alert("O número informado é Impar")
    }
}
const buttonexercicio13 = document.getElementById("exercicio13")
buttonexercicio13.addEventListener('click', () => { exercicio13() })

// -------------------------QUESTÃO 23---------------------------------------------
// Enquanto o usuário digitar o número 1, continue mostrando a palavra "Batata".

function exercicio23() {
    // entrada
    let n = Number(prompt("Digite 1):"))

    // processamento
    while (n === 1) {
        // saida
        alert("Batata")
        n = Number(prompt("Digite 1"))
    }
}
const buttonexercicio23 = document.getElementById("exercicio23")
buttonexercicio23.addEventListener('click', () => { exercicio23() })

// -------------------------QUESTÃO 24---------------------------------------------
// Peça um número e mostre a tabuada dele (de 0 a 10).

function exercicio24() {
    // entrada
    let num = Number(prompt("Número:"))

    // processamento
    for (let i = 0; i <= 10; i++) {
        // saida
        alert(`${num} x ${i} = ${num * i}`)
    }
}
const buttonexercicio24 = document.getElementById("exercicio24")
buttonexercicio24.addEventListener('click', () => { exercicio24() })

// -------------------------QUESTÃO 25---------------------------------------------
// Peça quantas pessoas serão cadastradas. Depois, peça a altura de cada uma
// e calcule a média das alturas.

function exercicio25() {
    // entrada
    let qtd = Number(prompt("Quantas pessoas?"))

    if (qtd <= 0) {
        // processamento
        alert("Quantidade inválida.")
    } else {
        let soma = 0
        for (let i = 1; i <= qtd; i++) {
            soma += Number(prompt("Altura da pessoa " + i + ":"))
        }
        // saida
        alert("Média = " + (soma / qtd))
    }
}
const buttonexercicio25 = document.getElementById("exercicio25")
buttonexercicio25.addEventListener('click', () => { exercicio25() })

// -------------------------QUESTÃO 26---------------------------------------------
// Peça o peso de 5 pessoas e calcule a média dos pesos.

function exercicio26() {
    // entrada
    let soma = 0

    // processamento
    for (let i = 1; i <= 5; i++) {
        soma += Number(prompt("Peso da pessoa " + i + ":"))
    }

    // saida
    alert("Média = " + (soma / 5))
}
const buttonexercicio26 = document.getElementById("exercicio26")
buttonexercicio26.addEventListener('click', () => { exercicio26() })

// -------------------------QUESTÃO 27---------------------------------------------
// Simule um elevador. Cada pessoa que entra informa seu peso.
// Quando o peso total atingir 180 kg, o elevador informa que atingiu o peso máximo.

function exercicio27() {
    // entrada
    let total = 0

    // processamento
    while (total < 180) {
        total += Number(prompt("Peso da pessoa:"))
    }

    // saida
    alert("Peso máximo atingido!")
}
const buttonexercicio27 = document.getElementById("exercicio27")
buttonexercicio27.addEventListener('click', () => { exercicio27() })

// -------------------------QUESTÃO 28---------------------------------------------
// Peça 10 números e diga quantos deles são negativos.

function exercicio28() {
    // entrada
    let negativos = 0

    // processamento
    for (let i = 1; i <= 10; i++) {
        let num = Number(prompt("Número " + i + ":"))
        if (num < 0) {
            negativos++
        }
    }

    // saida
    alert("Quantidade de negativos: " + negativos)
}
const buttonexercicio28 = document.getElementById("exercicio28")
buttonexercicio28.addEventListener('click', () => { exercicio28() })
```