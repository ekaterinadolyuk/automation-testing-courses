function createCurrency(arr) {
    let newStrings = [];
    for (let i = 0; i < arr.length; i++) {
        let currentStr = arr[i];
        if (typeof currentStr === 'string') {
            while (currentStr[0] === '0') {
                currentStr = currentStr.slice(1)
            }
            if (!isNaN(currentStr) && (+currentStr).toString() === currentStr) {
                let newStr = '';
                for (let j = currentStr.length - 1; j >= 0; j = j - 3) {
                    let beginIndex = j - 2;
                    let endIndex = j + 1;
                    if (beginIndex < 0) {
                        beginIndex = 0
                    }
                    newStr = currentStr.slice(beginIndex, endIndex) + ',' + newStr;
                }
                newStr = newStr.slice(0, -1);
                newStrings.push(`$${newStr}.00`);
            } else {
                console.log(`Item ${arr[i]} cannot be converted to currency!`)
            }
        } else {
            console.log(`Item ${arr[i]} cannot be converted to currency!`)
        }
    }
    console.log(newStrings);
    return newStrings;
}

createCurrency(['2222333', '789456', '15486548', '0564', '789', 'abc', [], null, '0.23', 0, '0', ' '])