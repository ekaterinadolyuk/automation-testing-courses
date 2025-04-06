//Task #1

async function taskOne() {

    const promise1 = new Promise((resolve) => {
        setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)
    });

    const racePromise = Promise.race([promise1, promise2, promise3]);

    const result = await racePromise;
    console.log(result);
}

taskOne();

//Task #2

function getNum() {
    const promiseOne = new Promise((resolve) => {
        setTimeout(() => resolve(Math.floor(Math.random() * 5) + 1), 3000)
    });

    return promiseOne;
}

async function newNum() {
    return (await getNum()) ** 2;
}

const promiseTask2 = newNum();

promiseTask2.then((result) => console.log(result))

//Task #3

async function getNewNum() {
    const num = await getNum();
    const newProm = new Promise((resolve) => {
        setTimeout(() => resolve(num + 5), 2000);
    })
    return newProm;
}

getNewNum().then((result) => console.log(result))

async function getSum() {
    const results = await Promise.all([getNum(), getNewNum()])
    return results.reduce((acc, current) => {
        return acc + current;
    }, 0)
}

getSum().then((result) => console.log(result))

