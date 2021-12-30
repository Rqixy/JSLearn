// const debug = require('debug')('main');
// debug('開始');

// for(let i=0; i<10; i++) {
//     console.log(i);
// }

// debug('終了');

const debug1 =  require('./debug')('1:');
const debug2 =  require('./debug')('2:');

debug1('1番目のデバッガをスタート');
debug2('2番目のデバッガをスタート');

setTimeout(function() {
    debug1('時間がたつと...');
    debug2('何が起こるか？');
}, 200);