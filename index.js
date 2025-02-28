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
