// 1. Дана строка из четного количества цифр. Проверьте, что сумма первой половины цифр равняется сумме второй половине цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
function countNumbers(string) {
    if ((string.length % 2) === 0) {
        let sum1 = 0;
        let sum2 = 0;
        const half = string.length / 2;

        for (let i = 0; i < half; i++) {
            sum1 += +string[i];
            sum2 += +string[i + half];
        }
        if (sum1 === sum2) {
            console.log('да');
        } else {
            console.log('нет');
        }
    } else {
        console.log('Количество символов в строке нечётное!');
    }
}

countNumbers('1111');

// 2. Дано число n=1000 (может быть заданное любое число). Делите его на 2 столько раз, пока результат деления не станет меньше 50 (может быть любое заданное число). Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
function countIterations(largeNumber, smallNumber) {
    let num = 0;
    let remainder = largeNumber;
    if (remainder >= smallNumber) {
        do {
            remainder = (remainder / 2);
            num = num + 1;
        }
        while (remainder >= smallNumber);
    }
    console.log(num);
}

countIterations(200, 5);


// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20, 25, 59, 79];
const average = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
console.log(average);


// 4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
function addParameters(currentArray, arrayToInsert, index) {
    let arrayPart1 = currentArray.slice(0, index);
    let arrayPart2 = currentArray.slice(index);
    let returningArray = (arrayPart1.concat(arrayToInsert)).concat(arrayPart2);
    return returningArray;
}
console.log(addParameters([1, 2, 3, 4, 5], ['a', 'b', 'c'], 3));
// 5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
function addParametersSeveralTimes(givenArray, dataToInsert) {
    let newlyCreatedArr = givenArray;
    for (let i = 0; i < dataToInsert.length; i++) {
        newlyCreatedArr = addParameters(newlyCreatedArr, dataToInsert[i].arrayToInsert, dataToInsert[i].index);
    }
    return newlyCreatedArr;
}
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
console.log(addParametersSeveralTimes([1, 2, 3, 4, 5], [
    {
        arrayToInsert: ['a', 'b'],
        index: 1
    },
    {
        arrayToInsert: ['c'],
        index: 6
    },
    {
        arrayToInsert: ['e'],
        index: 8
    }
]));

// 6. Дан массив [3, 4, 1, 2, 7, 30, 50]. Отсортируйте его
let numbers = [3, 4, 1, 2, 7, 30, 50];
function compareFn(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return -1
    } else if (firstNumber > secondNumber) {
        return 1
    }
    return 0
}

numbers.sort(compareFn);
console.log(numbers);
