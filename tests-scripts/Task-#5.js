function sumOfNumbers(arr) {
    let sum = arr.reduce((accumulator, currentValue) => {
        let newSum = 0;
        if (typeof currentValue === 'number') {
            newSum = accumulator + currentValue
        } else if (Array.isArray(currentValue)) {
            let arrValue = sumOfNumbers(currentValue)
            newSum = accumulator + arrValue
        } else {
            newSum = accumulator
        }
        return newSum
    }, 0)
    return sum
}


console.log(sumOfNumbers([1, 2, 'a', [2]]))