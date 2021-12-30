const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'hello.txt'), 'Nodeからごあいさつです！', function(err) {
    if(err) return console.log('エラー：ファイルが読み込めません');
});