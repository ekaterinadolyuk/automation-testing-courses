let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 3000);
});

promiseOne
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result * result); 
            }, 3000);
        });
    })
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result * result);
            }, 3000);
        });
    })
    .then(result => {
        console.log(`Result: ${result}`);
    })