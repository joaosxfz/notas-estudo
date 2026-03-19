# Notas - Estudos
## 01 - Configurando ambiete:

cmd (windows): 
```bash
git config --global user.name "nome"
git config --global user.email "email"
```
ssh (gitbash):

Adicinar uma nova chave:
```bash
ssh-keygen -t ed25519 -C "email"
```
Iniciar agente-ssh:
```bash
eval "$(ssh-agent -s)"
```
Adicionar chave ssh ao agente:
```bash
ssh-add ~/.ssh/id_ed25519
```
Copiar a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```
Resultado colocar em "SSH and GPG keys"

teste: 
```bash 
ssh -T git@github.com
```

## 02 - Comandos Básicos

Clonar Repositório:
```bash
git clone
```
Atualizar Repositório:
```bash
git pull
```

Linkar ao CSS:
```bash
<link type="text/css" rel="stylesheet" href="./css/tema.css">
```

Linkar:
```bash
<script src="./..."></script>
```

Entre dois números (10-50):
```bash
variavel >= 10 && variavel <= 50
```


## 03 - Fórmulas

Porcentagem:
```bash
valor * (1 + porcentagem / 100)
```

## 04 - Doom

Função e Conexão com Botão no Index:
```bash
function exercicio1() {

}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })
```

Botão no Index:
```bash
<button id="exercicio1">Executar Exercicio 1</button>
```

## 05 - HTML e CSS
```bash
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <body style="background-color:rgba(23, 56, 104, 0.945);"></body>
    <div id="titulo">
        <h1><i>AVALIAÇÃO 01 - RENAN<i></h1>
    </div>
    <div id="titulo2">
        <h3>Feito por João Victor Costa Souza</h3>
    </div>
    <main>
        <ol>
            <h2> Exercicios:</h2>
            <div class="botao">
                <li><button id="exercicio1">Executar Exercicio 1</button></li>
                <li><button id="exercicio2">Executar Exercicio 2</button></li>
            </div>
        </ol>
    </main>

    <script src="scripts/avaliacao.js"></script>
    <link type="text/css" rel="stylesheet" href="./css/tema.css">
</body>

</html>
```
```bash
#titulo {
    text-align: center;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    background-color: dimgray;
    border: 2px solid black;
    border-radius: 10px;
}

#titulo2 {
    text-align: center;
}

.botao {
   border: none;
   width: 200px;
}

li:hover {
    background: rgb(0, 0, 0);
}
```

## 06 - Exercicios Lista 2

```bash
function exercicio1() {
    const produto = prompt("Digite o nome do produto")
    const preco = prompt("Digite o preço do produto")

    alert("O " + produto + " custa " + preco)

}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })

// -------------------------QUESTÃO 2---------------------------------------------

function exercicio2() {
    const comp = prompt("Digite o comprimento do terreno")
    const largura = prompt("Digite a largura do terreno")
    const resultado = comp * largura

    alert("A área possui " + resultado + " m por quadrado")
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2() })

// -------------------------QUESTÃO 3---------------------------------------------

function exercicio3() {
    const valorT = Number(prompt("Digite o valor da compra"))
    const numP = Number(prompt("Digite o número de parcelas da compra"))
    const resultado = valorT / numP

    alert(+numP + " parcelas de  R$ " + resultado)
}
const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3() })

// -------------------------QUESTÃO 4---------------------------------------------

function exercicio4() {
    const dias = prompt("Digite a quantidade de dias viajados")
    const resultado = 24 * dias

    alert(dias + " dias equivalem à " + resultado + "h")
}
const buttonexercicio4 = document.getElementById("exercicio4")
buttonexercicio4.addEventListener('click', () => { exercicio4() })

// -------------------------QUESTÃO 5---------------------------------------------

function exercicio5() {
    const valorD = Number(prompt("Digite o valor do depósito"))
    const resultado = valorD * (1 + 2 / 100)

    alert("O saldo final após adicionar 2% fica " + resultado)
}
const buttonexercicio5 = document.getElementById("exercicio5")
buttonexercicio5.addEventListener('click', () => { exercicio5() })

// -------------------------QUESTÃO 6---------------------------------------------

function exercicio6() {
    const litros = Number(prompt("Digite a quantidade de litros consumidos"))
    const distancia = Number(prompt("Digite a distância percorrida"))
    const resultado = distancia / litros

    alert(resultado + "km por litro")
}
const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => { exercicio6() })

// -------------------------QUESTÃO 7---------------------------------------------

function exercicio7() {
    const pedido = Number(prompt("Digite um número"))
    const ante = pedido - 1
    const suce = pedido + 1

    alert("antecessor = " + ante + "     sucessor = " + suce)
}
const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7() })

// -------------------------QUESTÃO 8---------------------------------------------

function exercicio8() {
    const idade = Number(prompt("Digite a idade"))
    const resultado = 52 * idade

    alert("Essa pessoa viveu " + resultado)
}
const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => { exercicio8() })

// -------------------------QUESTÃO 9---------------------------------------------

function exercicio9() {
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
    const valor = Number(prompt("Digite o valor do produto"))

    const aumento = valor * 1.15
    const desconto = valor * 0.90

    alert(valor + " com 15% de aumento = " + aumento + " e com 10% de desconto = " + desconto)
}
const buttonexercicio10 = document.getElementById("exercicio10")
buttonexercicio10.addEventListener('click', () => { exercicio10() })

// -------------------------QUESTÃO 11---------------------------------------------

function exercicio11() {
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
    const raio = Number(prompt("Digite o raio de um círculo"))
    const area = Math.PI * raio ** 2
    const circu = 2 * Math.PI * raio

    alert("A área é: " + area + " e Circunferência: " + circu)
}
const buttonexercicio19 = document.getElementById("exercicio19")
buttonexercicio19.addEventListener('click', () => { exercicio19() })

// -------------------------QUESTÃO 20---------------------------------------------

function exercicio20() {
    const altura = Number(prompt("Digite sua altura"))
    const peso = Number(prompt("Digite seu peso"))
    const resultado = peso / (altura * altura)

    alert("Teu imc é: " + resultado.toFixed(1))
}
const buttonexercicio20 = document.getElementById("exercicio20")
buttonexercicio20.addEventListener('click', () => { exercicio20() })
```

## 07 - Exercicios Lista 1

```bash
//01 - Produto
{
const produto = prompt("Digite o nome do produto")
const preco = prompt("Digite o preço do produto")
alert("O " + produto + " custa " + preco)
}

//02 - Área do terreno
{
const comp = prompt("Digite o comprimento")
const largura = prompt("Digite a largura")
alert("Área: " + (comp * largura))
}

//03 - Parcelas
{
const total = Number(prompt("Valor total"))
const parcelas = Number(prompt("Número de parcelas"))
alert(parcelas + "x de R$ " + (total / parcelas))
}

//04 - Dias → Horas
{
const dias = Number(prompt("Dias"))
alert("Horas: " + (dias * 24))
}

//05 - Depósito +2%
{
const valor = Number(prompt("Depósito"))
alert("Saldo: " + (valor * 1.02))
}

//06 - Consumo km/l
{
const litros = Number(prompt("Litros"))
const km = Number(prompt("Km"))
alert("Consumo: " + (km / litros))
}

//07 - Antecessor e sucessor
{
const n = Number(prompt("Número"))
alert("Antecessor: " + (n-1) + " Sucessor: " + (n+1))
}

//08 - Semanas vividas
{
const idade = Number(prompt("Idade"))
alert("Semanas: " + (idade * 52))
}

//09 - Arredondamento
{
const num = Number(prompt("Decimal"))
const baixo = num - (num % 1)
const cima = baixo + 1
alert("Baixo: " + baixo + " Cima: " + cima + " 2 casas: " + num.toFixed(2))
}

//10 - Aumento e desconto
{
const valor = Number(prompt("Valor"))
alert("Aumento: " + (valor*1.15) + " Desconto: " + (valor*0.90))
}

//11 - Comparar números
{
const n1 = Number(prompt("Número 1"))
const n2 = Number(prompt("Número 2"))
if (n1 === n2) {
    alert("Iguais")
} else if (n1 < n2) {
    alert("Menor: " + n1)
} else {
    alert("Menor: " + n2)
}
}

//12 - Votação
{
const idade = Number(prompt("Idade"))
if (idade < 16) {
    alert("Não vota")
} else if (idade <= 17) {
    alert("Opcional")
} else {
    alert("Obrigatório")
}
}

//13 - Desconto 5%
{
const compra = Number(prompt("Valor"))
if (compra > 100) {
    alert("Com desconto: " + (compra*0.95))
} else {
    alert("Sem desconto")
}
}

//14 - Temperatura
{
const t = Number(prompt("Temperatura"))
if (t < 15) {
    alert("Frio")
} else if (t <= 25) {
    alert("Agradável")
} else {
    alert("Quente")
}
}

//15 - Múltiplo de 5
{
const n = Number(prompt("Número"))
if (n % 5 === 0) {
    alert("Múltiplo de 5")
} else {
    alert("Não é múltiplo")
}
}

//16 - Divisibilidade
{
const n1 = Number(prompt("Número 1"))
const n2 = Number(prompt("Número 2"))
if (n1 % n2 === 0) {
    alert("Divisível")
} else {
    alert("Não divisível")
}
}

//17 - Saudação
{
const h = Number(prompt("Hora"))
if (h >= 5 && h <= 11) {
    alert("Bom dia")
} else if (h <= 17) {
    alert("Boa tarde")
} else {
    alert("Boa noite")
}
}

//18 - Área trapézio
{
const B = Number(prompt("Base maior"))
const b = Number(prompt("Base menor"))
const h = Number(prompt("Altura"))
alert("Área: " + ((B + b) * h / 2))
}

//19 - Círculo
{
const r = Number(prompt("Raio"))
alert("Área: " + (Math.PI*r*r) + " Circunferência: " + (2*Math.PI*r))
}

//20 - IMC
{
const altura = Number(prompt("Altura"))
const peso = Number(prompt("Peso"))
alert("IMC: " + (peso / (altura*altura)).toFixed(1))
}
```