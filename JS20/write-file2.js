const fs = require('fs');
fs.writeFile(__dirname + 'hello.txt', 'Nodeからごあいさつです！\n', function(err) {
    if(err) return console.log('エラー:ファイルを読み込めません。');
});

console.log(__dirname);