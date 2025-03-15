function uniqueElements(objects, compareFunction) {
    let finalArr = [];
    for (let i = 0; i < objects.length; i++) {
        let currentValue = objects[i];
        let isLast = true;
        for (let j = i + 1; j < objects.length; j++ ) {
            if (compareFunction(currentValue, objects[j])) {
                isLast = false
            }
        }
        if (isLast) {
            finalArr.push(currentValue)
        }
    }
    return finalArr  
}

//console.log(uniqueElements([1,2,5,1,2,1,3,5,6]))

//console.log(JSON.stringify(uniqueElements([{name: 'Alex'}, {name: 'John'}, {name: 'Alex'}], (objOne, objTwo) => {return false})))

console.log(JSON.stringify(uniqueElements([{name: 'Alex'}, {name: 'John'}, {name: 'Alex'}], (objOne, objTwo) => {
    return objOne.name === objTwo.name})))

