async function returnPromise(functions) {
    let resultFirst = functions.map((element) => element())
    let resultFinal = await Promise.all(resultFirst)
    console.log(JSON.stringify(resultFinal))
    return resultFinal;
}

returnPromise([() => {
    return Promise.resolve("First")
},
() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Second"), 2000)
    })
},
() => {
    return new Promise((resolve, reject) => {
        resolve("Third")
    })
}
])