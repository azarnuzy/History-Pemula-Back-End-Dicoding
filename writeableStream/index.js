const fs = require('fs');
const { resolve } = require('path');

const writeableStream = fs.createWriteStream(
  resolve(__dirname, './output.txt')
);

const readableStream = fs.createReadStream(resolve(__dirname, './input.txt'), {
  highWaterMark: 15,
});

readableStream.on('readable', () => {
  try {
    const text = `${readableStream.read()}\n`;
    writeableStream.write(text);
    console.log(`${readableStream.read()}`);
  } catch (error) {}
});

readableStream.on('end', () => {
  writeableStream.end();
});
