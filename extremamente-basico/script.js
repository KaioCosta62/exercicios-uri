const rs = require('readline-sync')

const A = Number(rs.question("Digite o primeiro valor: "))
const B = Number(rs.question("Digite o segundo valor: "))
const X = A + B
console.log(`X = ${X}`)