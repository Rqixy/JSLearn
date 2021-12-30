const fs = require('fs');
const path = require('path');
try {
    fs.writeFileSync(path.join(__dirname, 'hello5.txt'), 'Nodeからのご挨拶です！');
} catch(err) {
    console.error('エラー：ファイルは読み込めません。');
}