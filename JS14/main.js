// console.log("setTimeoutの前：" + new Date());
// function f() {
//     console.log("これは関数fの中：" + new Date());
// }
// setTimeout(f, 10 * 1000);
// console.log("setTimeoutの後");
// console.log("これもsetTimeoutの後");

// console.log("setTimeoutの前：" + new Date());
// setTimeout(function() {
//     console.log("setTimeoutに指定された無名関数の中：" + new Date());
// }, 10 * 1000);
// console.log("setTimeoutの後");
// console.log("これもsetTimeoutの後");

// console.log("setTimeoutの前：" + new Date());
// setTimeout(() => console.log("アロー関数の中：" + new Date()), 10 * 1000);
// console.log("setTimeoutの後");
// console.log("これもsetTimeoutの後");

// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function() {
//     let now = new Date();
//     if(now.getMinutes() !== start.getMinutes() || ++i > 10) {
//         console.log(`i == ${i}`);
//         console.log(`nowMinutes == ${now.getMinutes()}`);
//         console.log(`startMinutes == ${start.getMinutes()}`);
//         return clearInterval(intervalId);
//     }
//     console.log(`${i} : ${now}`);
// }, 5 * 1000);

// function countDown() {
//     let i;
//     console.log("かうんとだうん");
//     for(i = 5; i >= 0; i--) {
//         setTimeout(function() {
//             console.log(i === 0 ? "GO!" : i);
//         }, (5 - i) * 1000);
//     }
// }

// countDown();

// function countDown() {
//     console.log("かうんとだうん");
//     for(let i = 5; i >= 0; i--) {
//         setTimeout(function() {
//             console.log(i === 0 ? "GO!" : i);
//         }, (5 - i) * 1000);
//     }
// }

// countDown();

// const fs = require('fs');

// const fname = 'xxx';
// fs.readFile(fname, function(err, data) {
//     if(err) {
//         return console.error(`ファイル読み込み時のエラー ${fname}: ${err.message}`);
//     }
//     console.log(`ファイル「${fname}」の内容を表示します : \n${data}`);
// });

// const fs = require('fs');

// fs.readFile('a.txt', function(err, dataA) {
//     if(err) console.error(err);
//     fs.readFile('b.txt', function(err, dataB) {
//         if(err) console.error(err);
//         fs.readFile('c.txt', function(err, dataC) {
//             if(err) console.error(err);
//             fs.writeFile('d.txt', dataA + dataB + dataC, function(err) {
//                 if(err) console.error(err);
//             });
//         });
//     });
// });

// const fs = require('fs');
// function readSketchyFile() {
//     try {
//         fs.readFile('does_not_exist.txt', function(err, data) {
//             if(err) throw err;
//             else console.log('無事に読み込まれました。');
//         });
//     } catch(err) {
//         console.log('警告 : マイナーな問題が発生。実行を継続をします。');
//     }
// }

// readSketchyFile();

// function countDown(seconds) {
//     return new Promise(
//         function(onFulfilled, onRejected) {
//             for(let i = seconds; i >= 0; i--) {
//                 setTimeout(function() {
//                     if(i > 0) console.log(i + '...');
//                     else onFulfilled(console.log("GO!"));
//                 }, (seconds - i) * 1000);
//             }
//         }
//     );
// }

// countDown(10);

// function countDown(seconds) {
//     return new Promise(
//         function(onFulfilled, onRejected) {
//             for(let i = seconds; i >= 0; i--) {
//                 setTimeout(function() {
//                     if(i > 0) console.log(i + '...');
//                     else onFulfilled(console.log("GO!"));
//                 }, (seconds - i) * 1000);
//             }
//         }
//     );
// }

// countDown(5).then(
//     function() {
//         console.log("カウントダウン成功");
//     },
//     function(err) {
//         console.log("カウントダウンでエラーが起こった : " + err.message);
//     }
// );

// const p = countDown(5);
// p.then(
//     function() {
//         console.log("カウントダウン成功！");
//     }
// );

// p.catch(
//     function(err) {
//         console.log("カウントダウンでエラーが起こった : " + err.message);
//     }
// );

// function countDown(seconds) {
//     return new Promise(
//         function(onFulfilled, onRejected) {
//             for(let i = seconds; i >= 0; i--) {
//                 setTimeout(function() {
//                     if(i === 13) return onRejected(new Error("この数は不吉すぎます。"));
//                     if(i > 0) console.log(i + '...');
//                     else onFulfilled(console.log("GO!"));
//                 }, (seconds - i) * 1000);
//             }
//         }
//     );
// }

// countDown(15).then(
//     function() {
//         console.log("カウントダウン成功！");
//     },
//     function(err) {
//         console.log("カウントダウンでエラーが起こった : " + err.message);
//     }
// );

// function countDown(seconds) {
//     return new Promise(
//         function(onFulfilled, onRejected) {
//             const timeoutIds = [];
//             for(let i = seconds; i >= 0; i--) {
//                 timeoutIds.push(
//                     setTimeout(
//                         function() {
//                             if(i === 13) {
//                                 timeoutIds.forEach(clearTimeout);
//                                 onRejected(new Error(`${i}という数字は不吉すぎます`));
//                             }
//                             else if(i > 0) {
//                                 console.log(i + '...');
//                             }
//                             else {
//                                 console.log("GO!");
//                                 onFulfilled();
//                             }
//                     }, (seconds - i) * 1000)
//                 );
//             }
//         }
//     );
// }

// countDown(15).then(
//     function() {
//         console.log("カウントダウン成功！");
//     },
//     function(err) {
//         console.log("カウントダウンでエラーが起こった : " + err.message);
//     }
// );

