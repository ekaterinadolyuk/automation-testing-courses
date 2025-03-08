// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
let firstPointOne = 'abc' + true;
console.log('String + Boolean:', `${firstPointOne}`);

let firstPointTwo = 'abc' + 10;
console.log('String + Number:', `${firstPointTwo}`);

let firstPointThree = 2 + false;
console.log('Number + Boolean:', `${firstPointThree}`);

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
let secondPointOne = 'Hello' * false;
console.log('String * Boolean:', `${secondPointOne}`);

let secondPointTwo = 'World' * 5;
console.log('String * Number:', `${secondPointTwo}`);

let secondPointThree = 3 * true;
console.log('Number * Boolean:', `${secondPointThree}`);

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
let thirdPointOne = 'Mike' / true;
console.log('String / Boolean:', `${thirdPointOne}`);

let thirdPointTwo = 'World' / 5;
console.log('String / Number:', `${thirdPointTwo}`);

let thirdPointThree = 1 / true;
console.log('Number / Boolean:', `${thirdPointThree}`);

// Выполнить явное преобразование(number, string, boolean)
let forthPointOne = 8;
console.log('Number to String:', forthPointOne.toString());

let forthPointTwo = '100%Automation';
console.log('String to Number:', parseInt(forthPointTwo));

let forthPointThree = true;
console.log('Boolean to String:', forthPointThree.toString());

let forthPointFour = false;
console.log('Boolean to Number:', +(forthPointFour));
const fse = require('fs-extra');

const first_folder = '.\\first_folder';
fse.ensureDirSync(first_folder);

const file = '.\\first_folder\\file.txt';
fse.ensureFileSync(file);

const second_folder = '.\\second_folder';
fse.ensureDirSync(second_folder);

fse.moveSync('.\\first_folder\\file.txt', '.\\second_folder\\file.txt');

const third_folder = '.\\third_folder';
fse.ensureDirSync(third_folder);

fse.copySync('.\\second_folder\\file.txt', '.\\third_folder\\file.txt');

fse.removeSync('.\\second_folder\\file.txt');
fse.removeSync('.\\third_folder\\file.txt');

fse.removeSync('.\\first_folder');
fse.removeSync('.\\second_folder');
fse.removeSync('.\\third_folder');
