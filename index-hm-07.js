// Функция для задания №1.

function game(numberOfPlayers, numberOfThrows) {
    let playersScore = [];
    let sumOfThrows = 0;
    let randomNumber = 0;
    let gameResult = {};
    for (let i = 0; i < numberOfPlayers; i++) {
        sumOfThrows = 0;
        for (let j = 0; j < numberOfThrows; j++) {
            randomNumber = Math.floor(Math.random() * 6) + 1;
            sumOfThrows = sumOfThrows + randomNumber;
        }
        playersScore.push({ player: i + 1, throwForOnePlayer: sumOfThrows });
    }

    let maxVal = 0;
    let winPlayer = null;
    let maxCount = 0;
    
    for (let maxScore of playersScore) {
        if (maxScore.throwForOnePlayer > maxVal) {
            maxVal = maxScore.throwForOnePlayer;
            winPlayer = maxScore.player;
            maxCount = 1;
        } else if (maxScore.throwForOnePlayer === maxVal) {
            maxCount++;
        }
    }
    
    gameResult = {
        allResults: playersScore,
        winner: maxCount > 1 ? "Ничья" : winPlayer
    };

    return gameResult;
}

console.log(game(2, 3));

// Функция для задания №2.

function divideNumber(numberToDivide, amountOfNumbers) {
    let arrOfNumbers = [];
    let sum = 0;
    do {
        arrOfNumbers = [];
        sum = 0;
        for (let i = 0; i < amountOfNumbers; i++) {
            let newNumber = Math.floor(Math.random() * numberToDivide) + 1;
            arrOfNumbers.push(newNumber);
        }
        for (let i in arrOfNumbers) {
            sum += arrOfNumbers[i];
        }
    } while (numberToDivide != sum)
    return arrOfNumbers;
}

console.log(divideNumber(20, 3))

// Функция для задания №3.

function numberOfFridays(day) {
    let numerOfFriday13 = 0;

    do {
        day.setDate(day.getDate() + 1)
        if(day.getDay() === 5 && day.getDate() === 13) {
            numerOfFriday13 = numerOfFriday13 + 1;
        }
    } while (day < new Date());

    return numerOfFriday13;
}

console.log(numberOfFridays(new Date(2000, 2, 2)))

