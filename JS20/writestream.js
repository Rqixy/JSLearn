const fs = require('fs');

const ws = fs.createWriteStream('stream.txt', { encoding: 'utf-8' });
ws.write('1行目\n');
ws.write('2行目\n');
ws.end();