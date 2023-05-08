const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.txt');
const output = fs.createWriteStream(filePath);

const {stdin, stdout} = process;

stdout.write('Привет, введите какой-нибудь текст\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'выход') {


    process.exit();

  } else {

    output.write(data);

  }
});

process.on('SIGINT', () => process.exit())
 process.on('exit', () => stdout.write('Счастливо!'))