//Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.

//entrada
const num1 = Number(prompt("Quantos segundos?"))

//processamento
const num2 = 3600
const num3 = 60
const num4 = parseInt(num1/num2)
const num5 = num1%num2
const num6 = parseInt(num5/num3)
const num7 = num5%num3

//saida
alert(+num4+ "h " +num6+ "m " +num7+ "s")