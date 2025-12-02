// Peça uma distância em quilômetros e converta para metros
//  e centímetros.

//entrada
const km = Number(prompt("Digite uma distância"))

//processamento
const m = km*1000
const cm = km*100

//saida
alert(+km+ " fica " +m+ " m e " +cm+ " cm")