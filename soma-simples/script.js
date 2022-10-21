const rs = require('readline-sync')

const n =  3.14159
const raio = Number(rs.question("Informe o raio: "))
console.log(`A = ${n * Math.pow(raio, 2)}`)