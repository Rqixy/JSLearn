const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname, 'hello4.txt'), { encoding: 'utf-8' });
console.log('読み込んだファイル内容：' + data);