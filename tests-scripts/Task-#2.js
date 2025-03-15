function sortValues(arr) {
    let newArray = arr.filter((element) => {
        return new Boolean(element) != false
    })

    newArray.sort((firstValue, SecondValue) => SecondValue - firstValue);

    console.log(newArray)
    return newArray
}

sortValues(['2222333', 'abc', [], null, 0.23, 0, '0', ' ', 123])