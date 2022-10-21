const rs = require('readline-sync')

const A = Number(rs.question("Digite a primeira nota: "))
const B = Number(rs.question("Digite a segunda nota: "))
const pA = 3.5
const pB = 7.5

const media = (((A * pA) + (B * pB)) / (pA + pB)).toFixed(2)
console.log(media)