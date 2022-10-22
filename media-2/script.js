const rs = require('readline-sync')

const A = Number(rs.question("Digite a primeira nota: "))
const B = Number(rs.question("Digite a segunda nota: "))
const C = Number(rs.question("Digite a terceira nota: "))
const pA = 2
const pB = 3
const pC = 5
const verificaNota = A >= 0 && A <= 10 && B >= 0 && B <= 10 && C >= 0 && C <= 10
if(verificaNota){
  const media = (((A * pA) + (B * pB) + (C * pC)) / (pA + pB + pC)).toFixed(1)
  console.log(`Média = ${media}`)
}else{
  console.log("Insira notas de 0 a 10")
}
