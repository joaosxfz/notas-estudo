# Exercicios Lista 2

```bash
function exercicio1() {
//1. Peça ao usuário o nome de um produto e o preço. Mostre uma mensagem dizendo quanto custa o produto.
    const produto = prompt("Digite o nome do produto")
    const preco = prompt("Digite o preço do produto")

    alert("O " + produto + " custa " + preco)

}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })

// -------------------------QUESTÃO 2---------------------------------------------

function exercicio2() {
//2. Peça o comprimento e a largura de um terreno. Calcule e mostre a quantidade de metros quadrados.

    const comp = prompt("Digite o comprimento do terreno")
    const largura = prompt("Digite a largura do terreno")
    const resultado = comp * largura

    alert("A área possui " + resultado + " m por quadrado")
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2() })

// -------------------------QUESTÃO 3---------------------------------------------

function exercicio3() {
//3. Peça o valor total de uma compra e o número de parcelas. Mostre o valor de cada parcela.
    const valorT = Number(prompt("Digite o valor da compra"))
    const numP = Number(prompt("Digite o número de parcelas da compra"))
    const resultado = valorT / numP

    alert(+numP + " parcelas de  R$ " + resultado)
}
const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3() })

// -------------------------QUESTÃO 4---------------------------------------------

function exercicio4() {
//4. Peça a quantidade de dias que uma pessoa viajou. Mostre quantas horas isso representa.

    const dias = prompt("Digite a quantidade de dias viajados")
    const resultado = 24 * dias

    alert(dias + " dias equivalem à " + resultado + "h")
}
const buttonexercicio4 = document.getElementById("exercicio4")
buttonexercicio4.addEventListener('click', () => { exercicio4() })

// -------------------------QUESTÃO 5---------------------------------------------

function exercicio5() {
//5. Peça o valor de um depósito bancário e calcule o saldo após adicionar 2% de rendimento.
    const valorD = Number(prompt("Digite o valor do depósito"))
    const resultado = valorD * (1 + 2 / 100)

    alert("O saldo final após adicionar 2% fica " + resultado)
}
const buttonexercicio5 = document.getElementById("exercicio5")
buttonexercicio5.addEventListener('click', () => { exercicio5() })

// -------------------------QUESTÃO 6---------------------------------------------

function exercicio6() {
//6. Peça a quantidade de litros de combustível consumidos e a distância percorrida. Calcule o consumo médio(km por litro).

    const litros = Number(prompt("Digite a quantidade de litros consumidos"))
    const distancia = Number(prompt("Digite a distância percorrida"))
    const resultado = distancia / litros

    alert(resultado + "km por litro")
}
const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => { exercicio6() })

// -------------------------QUESTÃO 7---------------------------------------------

function exercicio7() {
//7. Peça um número e mostre: Seu antecessor Seu sucessor
    const pedido = Number(prompt("Digite um número"))
    const ante = pedido - 1
    const suce = pedido + 1

    alert("antecessor = " + ante + "     sucessor = " + suce)
}
const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7() })

// -------------------------QUESTÃO 8---------------------------------------------

function exercicio8() {
//8. Peça a idade de uma pessoa e mostre: Quantas semanas ela já viveu (considere 52 semanas por ano)
    const idade = Number(prompt("Digite a idade"))
    const resultado = 52 * idade

    alert("Essa pessoa viveu " + resultado)
}
const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => { exercicio8() })

// -------------------------QUESTÃO 9---------------------------------------------

function exercicio9() {
//Desafio 0. Peça um número decimal e mostre ele arredondado para:
//Cima
//Baixo
//Duas casas decimais

    const num = Number(prompt("Digite um número decimal"))
    const baixo = num - (num % 1)
    const cima = baixo + 1
    const duasCasas = num.toFixed(2)

    alert("Para baixo = " + baixo +
        " Para cima = " + cima +
        " e Duas Casas = " + duasCasas)
}
const buttonexercicio9 = document.getElementById("exercicio9")
buttonexercicio9.addEventListener('click', () => { exercicio9() })

// -------------------------QUESTÃO 10---------------------------------------------

function exercicio10() {
//Desafio 1. Peça o valor de um produto e calcule:
//Preço com 15% de aumento
//Preço com 10% de desconto

    const valor = Number(prompt("Digite o valor do produto"))

    const aumento = valor * 1.15
    const desconto = valor * 0.90

    alert(valor + " com 15% de aumento = " + aumento + " e com 10% de desconto = " + desconto)
}
const buttonexercicio10 = document.getElementById("exercicio10")
buttonexercicio10.addEventListener('click', () => { exercicio10() })

// -------------------------QUESTÃO 11---------------------------------------------

function exercicio11() {
//Desafio 2. Peça dois números e informe se eles são iguais ou diferentes, se diferentes, informe qual o menor.

    const num1 = Number(prompt("Digite o primeiro número"))
    const num2 = Number(prompt("Digite o segundo número"))

    if (num1 === num2) {
        alert("Eles são iguais")
    }
    else if (num1 < num2) {
        alert("O menor número é " + num1)
    }
    else {
        alert("O menor número é " + num2)
    }
}
const buttonexercicio11 = document.getElementById("exercicio11")
buttonexercicio11.addEventListener('click', () => { exercicio11() })

// -------------------------QUESTÃO 12---------------------------------------------

function exercicio12() {
//9. Peça a idade de uma pessoa e informe se ela pode votar:
//Menor que 16 → Não pode votar
//Entre 16 e 17 → Voto opcional
//18 ou mais → Voto obrigatório

    const idade = Number(prompt("Descubra se vc pode votar 👀"))

    if (idade < 16) {
        alert("Pode não man 😐")
    }
    else if (idade === 16 || idade === 17) {
        alert("Se quiser sim man 😎")
    }
    else {
        alert("Obrigatório 💀")
    }
}
const buttonexercicio12 = document.getElementById("exercicio12")
buttonexercicio12.addEventListener('click', () => { exercicio12() })

// -------------------------QUESTÃO 13---------------------------------------------

function exercicio13() {
//10. Peça o valor de uma compra. Se for maior que 100, aplique 5% de desconto. Mostre o valor final.

    const compra = Number(prompt("Digite o valor da compra"))
    const desconto = compra * (1 - 5 / 100)

    if (compra > 100) {
        alert("Com 5% de desconto o valor fica: " + desconto.toFixed(2))
    }
    else {
        alert("Sem desconto")
    }
}
const buttonexercicio13 = document.getElementById("exercicio13")
buttonexercicio13.addEventListener('click', () => { exercicio13() })

// -------------------------QUESTÃO 14---------------------------------------------

function exercicio14() {
//11. Peça a temperatura atual. Informe se está:
//Frio (menos de 15)
//Agradável (15 a 25)
//Quente (acima de 25)

    const temp = Number(prompt("Digite a temperatura"))

    if (temp < 15) {
        alert("Frio 🥶")
    }
    else if (temp >= 15 && temp <= 25) {
        alert("Agradavel 😎")
    }
    else {
        alert("Quente 🥵")
    }
}
const buttonexercicio14 = document.getElementById("exercicio14")
buttonexercicio14.addEventListener('click', () => { exercicio14() })

// -------------------------QUESTÃO 15---------------------------------------------

function exercicio15() {
//12. Peça um número e informe se ele é múltiplo de 5.
    const num = Number(prompt("Digite um número"))

    if (num % 5 === 0) {
        alert("O " + num + " é multiplo de 5")
    }
    else {
        alert("O número não é multiplo de 5")
    }
}
const buttonexercicio15 = document.getElementById("exercicio15")
buttonexercicio15.addEventListener('click', () => { exercicio15() })

// -------------------------QUESTÃO 16---------------------------------------------

function exercicio16() {
//13. Peça dois números e informe se o primeiro é divisível pelo segundo.

    const num1 = Number(prompt("Digite o primeiro número"))
    const num2 = Number(prompt("Digite o primeiro número"))

    if (num1 % num2 === 0) {
        alert("O " + num1 + " é divisível por " + num2)
    }
    else {
        alert("O " + num1 + " não é divisível por " + num2)
    }
}
const buttonexercicio16 = document.getElementById("exercicio16")
buttonexercicio16.addEventListener('click', () => { exercicio16() })

// -------------------------QUESTÃO 17---------------------------------------------

function exercicio17() {
//14. Peça o horário atual (apenas a hora). Informe:
//Bom dia (5–11)
//Boa tarde (12–17)
//Boa noite (18–4)

    const hora = Number(prompt("Digite o horário atual (APENAS A HORA)"))

    if (hora >= 5 && hora <= 11) {
        alert("BOM DIA ☀️")
    }
    else if (hora >= 12 && hora <= 17) {
        alert("BOA TARDE 🌥️")
    }
    else {
        alert("BOA NOITE 🌑")
    }
}
const buttonexercicio17 = document.getElementById("exercicio17")
buttonexercicio17.addEventListener('click', () => { exercicio17() })

// -------------------------QUESTÃO 18---------------------------------------------

function exercicio18() {
//15. Peça a base maior, base menor e altura de um trapézio. Calcule a área.

    const maior = Number(prompt("Digite a base maior"))
    const menor = Number(prompt("Digite a base menor"))
    const altura = Number(prompt("Digite a altura do trapézio"))
    const resultado = (maior + menor) * (altura / 2)

    alert("A área é: " + resultado)
}
const buttonexercicio18 = document.getElementById("exercicio18")
buttonexercicio18.addEventListener('click', () => { exercicio18() })

// -------------------------QUESTÃO 19---------------------------------------------

function exercicio19() {
//16. Peça o raio de um círculo. Calcule:
//Área
//Circunferência
//(Use Math.PI)

    const raio = Number(prompt("Digite o raio de um círculo"))
    const area = Math.PI * raio ** 2
    const circu = 2 * Math.PI * raio

    alert("A área é: " + area + " e Circunferência: " + circu)
}
const buttonexercicio19 = document.getElementById("exercicio19")
buttonexercicio19.addEventListener('click', () => { exercicio19() })

// -------------------------QUESTÃO 20---------------------------------------------

function exercicio20() {
//17. Peça a altura e o peso de uma pessoa. Calcule o IMC.

    const altura = Number(prompt("Digite sua altura"))
    const peso = Number(prompt("Digite seu peso"))
    const resultado = peso / (altura * altura)

    alert("Teu imc é: " + resultado.toFixed(1))
}
const buttonexercicio20 = document.getElementById("exercicio20")
buttonexercicio20.addEventListener('click', () => { exercicio20() })

function exercicio21() {
//18. Peça um valor em metros e converta para:
//Milímetros
//Decímetros
//Hectômetros

    const metros = Number(prompt("Digite um valor em metros:"));
    const milimetros = metros * 1000;
    const decimetros = metros * 10;
    const hectometros = metros / 100;

    alert("Milímetros: " + milimetros);
    alert("Decímetros: " + decimetros);
    alert("Hectômetros: " + hectometros);
}
const buttonexercicio21 = document.getElementById("exercicio21")
buttonexercicio21.addEventListener('click', () => { exercicio21() })

```