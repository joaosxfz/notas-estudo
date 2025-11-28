//Pegar o exercicio no git e colar aqui
//13. Peça um número inteiro e diga se ele é par ou ímpar
//  . (Dica: se o número dividido por 2 tiver resto 0, é par)

//entrada- sempre colocar variaveis, 
//pedir info para o usuario
// Sempre colocar variaveis, dois tipos:
//const - algo fixo
//let - algo não fixo
//var - erro
//tipo - nome
// pedir informação para o usuario dentro do prompt
// explaicar do que se trata ao usuario
const num = Number(prompt('Digite um número, vou avaliar se é par ou impar: '))

//processamento 
//normalmente vem o conteudo principal
//pode se usar variavel no processamento
//fazer uma divisão e pegar o resto
const resto = num % 2

//saida
// mostra o resltado com o alert()
if (resto == 0) {
    alert("O número indicado é par")
} else {
    alert("O número informado é Impar")
}6
