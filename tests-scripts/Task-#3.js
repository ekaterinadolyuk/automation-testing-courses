function sortOfPeople(people) {
    let objectGroup = people.reduce((accumulator, currentValue) => {
        let age = currentValue.age;
        let name = currentValue.name;
        if (accumulator.hasOwnProperty(age)) {
            accumulator[age].push(name)
        } else {
            accumulator[age] = [name]
        }
        return accumulator;
    }, {})
    console.log(JSON.stringify(objectGroup))
    return objectGroup
}

sortOfPeople([
    {
        name: 'John',
        age: 36
    },
    {
        name: 'Mike',
        age: 23
    },
    {
        name: 'Sheila',
        age: 23
    }
])

// { 23: ['Mike', 'Sheila'], 36: ['John']}