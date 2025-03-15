function multiplicationTable(n) {
    let allNumbers = [];
    for (let i = 1; i <= n; i++) {
        allNumbers.push(i);
    }
    let allNumbersStr = allNumbers.join(" ")
    let x = 'X | '
    let header = x + allNumbersStr
    console.log(header)

    let secondRow = '';
    for (let j = 1; j <= ((2 * n - 1) + 4); j++) {
        secondRow = secondRow + '-';
    }
    console.log(secondRow)

    let rowSums = new Array(n).fill(0);
    let colSums = new Array(n).fill(0);
    let totalSum = 0;

    for (let i = 1; i <= n; i++) {
        let row = [i];
        let rowSum = 0;

        for (let j = 1; j <= n; j++) {
            let value = i * j;
            row.push(value);
            rowSum += value;
            colSums[j - 1] += value;
        }

        rowSums[i - 1] = rowSum;
        totalSum += rowSum;
        console.log(row.join(" "));
    }

    console.log(secondRow);
    console.log(`Sum of Rows: ${rowSums.join(" ")}`);
    console.log(`Sum of Columns: ${colSums.join(" ")}`);
    console.log(`Total Sum of Table: ${totalSum}`);
}

multiplicationTable(5)