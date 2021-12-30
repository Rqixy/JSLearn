'use strict'
const fs = require('fs');

const fileNames = process.argv.slice(2);

let counts = fileNames.map(f => {
    try {
        const data = fs.readFileSync(f, { encoding: 'utf-8' });
        return `${f}: ${data.split('\n').length}`;
    } catch(err) {
        return `${f}: のファイルが読み込めません`;
    }
});