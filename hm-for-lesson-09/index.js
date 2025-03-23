const Calculator = require('./calculator.js')

const calculatorInstance = new Calculator()

console.log(calculatorInstance.add(2,5,4))
console.log(calculatorInstance.multiply(2,2,4))
console.log(calculatorInstance.subtraction(10,5))
console.log(calculatorInstance.divide(10,5))
console.log(calculatorInstance.exponentiation(2))