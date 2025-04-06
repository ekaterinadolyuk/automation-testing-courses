function returnObj(arrOfStr, someFunction) {
    let object = arrOfStr.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = someFunction(currentValue);
        return accumulator;
    }, {})
    console.log(JSON.stringify(object))
    return object
}

returnObj(['asd','1'], (str) => {
    return str.length;
})

// {asd: 3, 1: 1}
