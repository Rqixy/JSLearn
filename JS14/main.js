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

// function countDown(seconds) {
//     return new Promise(
//         function(onFulfilled, onRejected) {
//             const timeoutIds = [];
//             for(let i = seconds; i >= 0; i--) {
//                 timeoutIds.push(setTimeout(function() {
//                     if(i === 13) {
//                         timeoutIds.forEach(clearTimeout);
//                         return onRejected(new Error(`${i}という数は不吉すぎます`));
//                     }
//                     if(i > 0) {
//                         console.log(i + '...');
//                     }
//                     else {
//                         onFulfilled(console.log("GO!"));
//                     }
//                 }, (seconds - i) * 1000));
//             }
//         }
//     );
// }

// function launch() {
//     return new Promise(function(onFulfilled, onRejected) {
//         console.log("発射！");
//         setTimeout(function() {
//             onFulfilled("周回軌道に乗った！");
//         }, 2 * 1000);
//     });
// }

// countDown(10)
// .then(launch)
// .then(function(msg) {
//     console.log(msg);
// })
// .catch(function(err) {
//     console.error("管制塔、管制塔。トラブル発生..." + err);
// })

// 'use strict';
// const fs = require('fs');

// function readFile(filename) {
//     return new Promise(
//         (onFulfilled, onRejected) => {
//             fs.readFile(filename, "utf-8", (err, data) => {
//                 // console.log(data);
//                 if(err) {
//                     // console.error("readFile error:" + fileName + err);
//                     onRejected(err);
//                 }
//                 onFulfilled(data);
//             });
//         }
//     );
// }

// function writeFile(fileName, data) {
//     return new Promise(
//         (onFulfilled, onRejected) => {
//             fs.writeFile(fileName, data, err => {
//                 if(err) {
//                     // console.error("writeFile error:" + fileName + err);
//                     onRejected(err);
//                 }
//                 onFulfilled("OK!");
//             });
//         }
//     );
// }

// let allData = "";
// readFile("a.txt")
// .then(function(fileData) {
//     allData += fileData;
//     return readFile("b.txt");
// })
// .then(function(fileData) {
//     allData += fileData;
//     return readFile("c.txt");
// })
// .then(function(fileData) {
//     allData += fileData;
//     return writeFile("d.txt", allData);
// })
// .then(function(mes) {
//     console.log("ファイルの合体に成功しました");
// })
// .catch(err => {
//     console.error("エラーが起こりました" + err);
// });

// Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
// .then(function(results) {
//     const allData = results[0] + results[1] + results[2];
//     return writeFile("d.txt", allData);
// })
// .then(function(mes) {
//     console.log("ファイルの合体に成功しました");
// })
// .catch(err => {
//     console.error("エラーが起こりました" + err);
// });

// const fs = require('fs');

// function writeFile(fileName, data) {
//     return new Promise((onFulfilled, onRejected) => {
//         fs.writeFile(fileName, data, err => {
//             err ? onRejected(err) : onFulfilled('OK!');
//         });
//     });
// }

// function readFile(fileName) {
//     return new Promise((onFulfilled, onRejected) => {
//         const period = Math.random() * 1000;
//         console.log(`${fileName}: ${period}`);
//         setTimeout(() => {
//             fs.readFile(fileName, "utf-8", (err, data) => {
//                 err ? onRejected(err) : onFulfilled([fileName, data]);
//             });
//         }, period);
//     });
// }

// let selected;
// Promise.race([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
// .then(function(results) {
//     selected = results[0];
//     return writeFile("d.txt", results[1]);
// })
// .then(function(mes) {
//     console.log(`ファイル${selected}の内容が書き込まれました。\n----`);
// })
// .catch(err => {
//     console.error("エラーが起こりました" + err);
// });

// function countDown(seconds) {
//     return new Promise(
//         function(onFulfilled, onRejected) {
//             const timeoutIds = [];
//             for(let i = seconds; i >= 0; i--) {
//                 timeoutIds.push(setTimeout(function() {
//                     if(i === 13) {
//                         timeoutIds.forEach(clearTimeout);
//                         return onRejected(new Error(`${i}という数は不吉すぎます`));
//                     }
//                     if(i > 0) {
//                         console.log(i + '...');
//                     }
//                     else {
//                         onFulfilled(console.log("GO!"));
//                     }
//                 }, (seconds - i) * 1000));
//             }
//         }
//     );
// }

// function launch() {
//     return new Promise(function(onFulfilled, onRejected) {
//         if(Math.random() < 0.5) return;
//         console.log("発射！");
//         setTimeout(function() {
//             onFulfilled("周回軌道に乗った！");
//         }, 2 * 1000);
//     });
// }

// function addTimeout(fn, period) {
//     if(period === undefined) period = 1000;
//     return function(...args) {
//         return new Promise(function(onFulfilled, onRejected) {
//             const timeoutId = setTimeout(onRejected, period, fn(...args)
//             .then(function(...args) {
//                 clearTimeout(timeoutId);
//                 onFulfilled(...args);
//             })
//             .catch(function(...args) {
//                 clearTimeout(timeoutId);
//                 onRejected(...args);
//             }));
//         });
//     }
// }

// countDown(3)
// .then(addTimeout(launch, 4 * 1000))
// .then(function(msg) {
//     console.log(msg);
// })
// .catch(function(err) {
//     console.error("管制塔、管制塔。トラブル発生..." + err);
// });

'use strict';
const fs = require('fs');

function grun(g) {
    const it = g();

    (function iterate(val) {
        const x = it.next(val);
        if(!x.done) {
            if(x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } 
            else {
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}

function readFile(fileName) {
    return new Promise(
        (onFulfilled, onRejected) => {
            fs.readFile(fileName, "utf-8", (err, data) => err ? onRejected(err) : onFulfilled(data));
        }
    );
}

function writeFile(fileName, data) {
    return new Promise(
        (onFulfilled, onRejected) => {
            fs.writeFile(fileName, data, err => err ? onRejected(err) : onFulfilled("OK!"));
        }
    );
}

// function* fileReadAndWrite() {
//     const dataA = yield readFile('a.txt');
//     const dataB = yield readFile('b.txt');
//     const dataC = yield readFile('c.txt');
//     yield writeFile('d.txt', dataA + dataB + dataC);
// }

// grun(fileReadAndWrite);

// function* fileReadAndWrite() {
//     const data = yield Promise.all([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')]);
//     yield writeFile('d.txt', data[0] + data[1] + data[2]);
// }

// grun(fileReadAndWrite);

function* fileReadAndWrite() {
    try {
        const data = yield Promise.all([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')]);
        yield writeFile('d.txt', data[0] + data[1] + data[2]);
    } catch(err) {
        console.error("エラー" + err);
    }
}

grun(fileReadAndWrite);