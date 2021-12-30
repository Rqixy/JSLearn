const fs = require('fs');

fs.writeFile('hello.txt', 'Nodeからごあいさつです！\n', function(err) {
    if(err) return console.log('エラー：ファイルが読み込めません。');
});

