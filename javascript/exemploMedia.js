//Entrada - variaveis
//Media aritmetica de 3 notas, e menor 3 horrivel
//menor que 7 da pra melhorar, maior 7 excelente
const nota1 = prompt("Digite a 1ª nota")
const nota2 = prompt("Digite a 2ª nota")
const nota3 = Number(prompt("Digite a 3ª nota"))

//Processamento
const soma = Number(nota1) + Number(nota2) + nota3
const media = soma / 3

//media menor que 3
//media menor que 7
//media maior que 7
if(media < 3) {
    alert("Média é insuficiente " + media + " - Horrivel")
} 
else if (media < 7) {
     alert("Média é insuficiente " + media + " - Da pra melhorar")
} 
else {
     alert("Média é suficiente " + media + " - Excelente")
}