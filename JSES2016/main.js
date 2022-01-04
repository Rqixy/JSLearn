// const a = 3**4;
// const b = Math.pow(3, 4);

// console.log(a);
// console.log(b);
// console.log(a===b);

// const array2 = [1, 4, [9, 16], 25, 36, NaN];
// console.log(array2.includes(1));
// console.log(array2.indexOf(1));
// console.log(array2.includes(0));
// console.log(array2.indexOf(0));
// console.log(array2.includes(16));
// console.log(array2.indexOf(16));
// console.log(array2.includes(NaN));
// console.log(array2.indexOf(NaN));

// console.log(["山", "川", "やま", "かわ"].includes("山"));
// console.log(["山", "川", "やま", "かわ"].includes("かわ"));
// console.log(["山", "川", "やま", "かわ"].includes("皮"));

// function func1(int1, int2,) {
//     return int1 * int2; 
// }
// console.log(func1(3, 5,));

// const result = (function( int1, int2,) {
//     console.log(`足し算の結果=${int1+int2}`,);
//     return int1 * int2;
// }) (3, 5,);

// console.log(`掛け算の結果=${result}`);

// for(let i=0; i<=300; i++) {
//     const num = i.toString().padStart(3, 0);
//     const file = `pictures/pict${num}.jpg`;
//     console.log(`<img src="${file}" style="width: 4cm;"`);
// }

// console.log("".padStart(30, "1234567890"));
// const l = 0.34e-2.toString();
// const m = "3.14";
// const n = "3";
// console.log(l.padStart(10) + m.padStart(10) + n.padStart(10));
// console.log(l.padStart(10, "_") + m.padStart(10, "_") + n.padStart(10, "_"));
// console.log(l.padEnd(10) + m.padEnd(10) + n.padEnd(10));

// console.log("".padStart(20, "一二三四五六七八九〇"));
// let hyou = "".padStart(20, "＝＊＊＝") + "\n";
// hyou += "| " + "右寄せ".padStart(8, "  ") + " | " + "左寄せ".padEnd(8, "  ") + " |\n";
// hyou += "| " + "左寄せ".padEnd(8, "  ") + " | " + "右寄せ".padStart(8, "  ") + " |\n";
// hyou += "".padStart(20, "＝＊＊＝") + "\n";
// console.log(hyou);

// const SPECIAL = Symbol();
// let bets = {
//     crown: 0,
//     armer: 5,
//     heart: 2,
//     spade: 0,
//     club: 3,
//     dia: 0,
//     [SPECIAL]: 13,
// };

// const arr1 = Object.entries(bet);
// console.log(arr1);

// for(let i=0; i<arr1.length; i++) {
//     console.log(arr1[i]);
// }

// console.log("   Mark | bet");
// console.log("---------------");
// for(let [mark, bet] of Object.entries(bets)) {
//     console.log(mark.padStart(5, " ") + " | " + bet);
// }
// console.log(`special | ${bets[SPECIAL]}`);

// console.log(Object.values(bets));

// const SPECIAL = Symbol();
// let bets = {
//     crown: 0,
//     armer: 5,
//     [SPECIAL]: 13,
// };

// let x = Object.getOwnPropertyDescriptors(bets);

// console.log(x.crown);
// console.log(x.armer);
// console.log(x[SPECIAL]);

// for(let [property, descriptor] of Object.entries(x)) {
//     console.log(property + ":");
//     for(let [p, v] of Object.entries(descriptor)) {
//         console.log(" " + p + ":" + v);
//     }
// }

const fs = require('fs');

function readFile(fileName) {
    return new Promise( (successFunc, failedFunc) => {
        fs.readFile(fileName, "utf-8", (err, readData) => {
            err ? failedFunc(err) : successFunc(readData);
        });
    });
}

function writeFile(fileName, writeData) {
    return new Promise( (successFunc, failedFunc) => {
        fs.writeFile(fileName, writeData, err => {
            err ? failedFunc(err) : successFunc('OK!');
        });
    });
}

// async function doReadingFileAndWritingFile() {
//     try {
//         let writeData = await readFile("a.txt");
//         writeData += await readFile("b.txt");
//         writeData += await readFile("c.txt");
//         await writeFile("d.txt", writeData);
//     } catch(err) {
//         console.error("エラーが起こりました: " + err);
//     }
// }

// doReadingFileAndWritingFile();

// let writeData = "";
// readFile("a.txt")
// .then(function(dataToFile) {
//     writeData += dataToFile;
//     return readFile("b.txt");})
// .then(function(dataToFile) {
//     writeData += dataToFile;
//     return readFile("c.txt");})
// .then(function(dataToFile) {
//     writeData += dataToFile;
//     return writeFile("d.txt", writeData);})
// .then(function(message) {
//     console.log("ファイルの合体に成功しました。");})
// .catch(err => {
//     console.error("えらーが起こりました。:" + err);});

// function generatorRunner(g) {
//     const it = g();

//     (function iterate(val) {
//         const x = it.next(val);
//         if(!x.done) {
//             if(x.value instanceof Promise) {
//                 x.value.then(iterate).catch(err => it.throw(err));
//             } else {
//                 setTimeout(iterate, 0, x.value);
//             }
//         }
//     })();
// }

// function* doReadingFileAndWritingFile() {
//     try {
//         let writeData = yield readFile("a.txt");
//         writeData += yield readFile("b.txt");
//         writeData += yield readFile("c.txt");
//         yield writeFile("d.txt", writeData);
//     } catch(err) {
//         console.error("エラーが起こりました。:" + err);
//     }
// }

// generatorRunner(doReadingFileAndWritingFile);

// async function doReadingFileAndWritingFile() {
//     try {
//         const resultArray = await Promise.all([
//             readFile("a.txt"),
//             readFile("b.txt"),
//             readFile("c.txt"),]);
//         await writeFile("d.txt", resultArray[0] + resultArray[1] + resultArray[2]);
//         console.log("ファイルの合体に成功した");
//     } catch(err) {
//         console.error("エラーが起こりました。:" + err);
//     }
// }

// doReadingFileAndWritingFile();

'use strict'
function startCountDown(seconds) {
    return new Promise(function(successFunc, failFunc) {
        const timeoutIDArray = [];
        for(let i=seconds; i>=0; i--) {
            const timeoutID = setTimeout(() => {
                if(i === 13) {
                    timeoutIDArray.forEach(clearTimeout);
                    return failFunc(new Error(`${i}という数字は不吉すぎます！`));
                }
                i > 0 ? console.log(i + '...') : successFunc(console.log("GO!!"));
            }, (seconds - i) * 1000)
            timeoutIDArray.push(timeoutID);
        }
    });
}

function launchRocket() {
    return new Promise(function(successFunc, failFunc) {
        if(Math.random() < 0.5) return failFunc(new Error("打ち上げ失敗"));
        console.log("発射！");
        setTimeout(function() {
            successFunc("周回軌道に乗った！");
        }, 2 * 1000);
    });
}

async function launchRocketAfterTheCountDown(countDownSeconds) {
    try {
        await startCountDown(countDownSeconds);
        console.log(await launchRocket());
    } catch(err) {
        console.error("管制塔、管制塔。トラブル発生..." + err.message);
    }
}

launchRocketAfterTheCountDown(1);