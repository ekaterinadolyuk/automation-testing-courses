const Calculator = require('./calculator.js')

describe('Test add method for calculator', () => {
    let calculatorInstance;

    beforeAll(() => { calculatorInstance = new Calculator() })

    it('add two positive numbers', () => {
        const result = calculatorInstance.add(4, 4)
        expect(result).toEqual(8);
    })

    it('add two negative numbers', () => {
        const result = calculatorInstance.add(-4, -4)
        expect(result).toEqual(-8);
    })

    it('add negative and positive numbers', () => {
        const result = calculatorInstance.add(-4, 4)
        expect(result).toEqual(0);
    })

    it('add floating point numbers', () => {
        const result = calculatorInstance.add(0.4, 0.4)
        expect(result).toEqual(0.8);
    })

    it('add positive number and zero', () => {
        const result = calculatorInstance.add(4, 0)
        expect(result).toEqual(4);
    })

    it('add 0.1 and 0.2', () => {
        const result = calculatorInstance.add(0.1, 0.2)
        expect(result).toEqual(0.3);
    })

    it('add string to a number', () => {
        expect(() => calculatorInstance.add('4', 0)).toThrow('Invalid parameters');
    })
})

describe('Test multiply method for calculator', () => {
    let calculatorInstance;

    beforeAll(() => {
        calculatorInstance = new Calculator()
    })
    
    it('multiply two positive numbers', () => {
        const result = calculatorInstance.multiply(4, 4)
        expect(result).toEqual(16);
    })
    
    it('multiply two negative numbers', () => {
        const result = calculatorInstance.multiply(-4, -4)
        expect(result).toEqual(16);
    })
    
    it('multiply negative and positive numbers', () => {
        const result = calculatorInstance.multiply(-4, 4)
        expect(result).toEqual(-16);
    })
    
    it('multiply floating point numbers', () => {
        const result = calculatorInstance.multiply(0.4, 0.4)
        expect(result).toEqual(0.16);
    })
    
    it('multiply positive number and 0', () => {
        const result = calculatorInstance.multiply(0, 4)
        expect(result).toEqual(0);
    })

    it('multiply string to a number', () => {
        expect(() => calculatorInstance.multiply('4', 0)).toThrow('Invalid parameters');
    })

})

describe('Test divide method for calculator', () => {
    let calculatorInstance;

    beforeAll(() => {
        calculatorInstance = new Calculator()
    })
    
    it('divide two positive numbers', () => {
        const result = calculatorInstance.divide(4, 4)
        expect(result).toEqual(1);
    })
    
    it('divide two negative numbers', () => {
        const result = calculatorInstance.divide(-4, -4)
        expect(result).toEqual(1);
    })
    
    it('divide negative and positive numbers', () => {
        const result = calculatorInstance.divide(-4, 4)
        expect(result).toEqual(-1);
    })
    
    it('divide floating point numbers', () => {
        const result = calculatorInstance.divide(0.4, 0.4)
        expect(result).toEqual(1);
    })
    
    it('divide positive number and 0', () => {
        expect(() => calculatorInstance.divide(4, 0)).toThrow('Division by zero');
    })
    
    it('divide 0 and positive number', () => {
        const result = calculatorInstance.divide(0, 4)
        expect(result).toEqual(0);
    })

    it('divide string to a number', () => {
        expect(() => calculatorInstance.divide('4', 0)).toThrow('Invalid parameters');
    })
})

describe('Test substraction method for calculator', () => {
    let calculatorInstance;

    beforeAll(() => {
        calculatorInstance = new Calculator()
    })
    
    it('substract two positive numbers', () => {
        const result = calculatorInstance.subtraction(15, 4)
        expect(result).toEqual(11);
    })
    
    it('substract two negative numbers', () => {
        const result = calculatorInstance.subtraction(-4, -4)
        expect(result).toEqual(0);
    })
    
    it('substract positive and negative numbers', () => {
        const result = calculatorInstance.subtraction(15, -4)
        expect(result).toEqual(19);
    })
    
    it('substract floating point numbers', () => {
        const result = calculatorInstance.subtraction(0.4, 0.4)
        expect(result).toEqual(0);
    })
    
    it('substract positive number and 0', () => {
        const result = calculatorInstance.subtraction(4, 0)
        expect(result).toEqual(4);
    })
    
    it('substract 0 and positive number', () => {
        const result = calculatorInstance.subtraction(0, -4)
        expect(result).toEqual(-4);
    })

    it('substract string to a number', () => {
        expect(() => calculatorInstance.subtraction('4', 0)).toThrow('Invalid parameters');
    })
})

describe('Test exponentiation method for calculator', () => {
    let calculatorInstance;

    beforeAll(() => {
        calculatorInstance = new Calculator()
    })
    
    it('exponentiate positive number', () => {
        const result = calculatorInstance.exponentiation(4)
        expect(result).toEqual(16);
    })
    
    it('exponentiate negative number', () => {
        const result = calculatorInstance.exponentiation(-4)
        expect(result).toEqual(16);
    })
    
    it('exponentiate 0', () => {
        const result = calculatorInstance.exponentiation(0)
        expect(result).toEqual(0);
    })
    
    it('exponentiate floating point number', () => {
        const result = calculatorInstance.exponentiation(0.1)
        expect(result).toEqual(0.01);
    })

    it('exponentiate string to a number', () => {
        expect(() => calculatorInstance.exponentiation('4', 0)).toThrow('Invalid parameters');
    })
})