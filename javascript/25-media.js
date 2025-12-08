//Peça quantas pessoas serão cadastradas. Depois, peça a 
// altura de cada uma e calcule a média das alturas.

//entrada
let qtd = Number(prompt("Quantas pessoas?"))
if (qtd <= 0) {

//processamento
  alert("Quantidade inválida.")
} else {
  let soma = 0
  for (let i = 1; i <= qtd; i++) {
    soma += Number(prompt("Altura da pessoa " + i + ":"))
  }
//saida
  alert("Média = " + (soma / qtd))
}