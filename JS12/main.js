// const book = [
//     'ある所に初老の夫婦が住んでいたとさ。',
//     '夫は山へ、妻は川へ行ったとさ。',
//     '妻が川で洗濯をしていると、',
//     '上流から桃がばがれてきたとさ。',
//     'ドンブラコッコ、スッコッコ、',
//     'ドンブラコッコ、スッコッコ。',
// ]

// for(let aPage of book) {
//     console.log(aPage);
// }
// book.next(); XXX

// const it = book.values();
// it.next();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let current = it.next();
// while(!current.done) {
//     console.log(current.value);
//     current = it.next();
// }

// const it1 = book.values();
// const it2 = book.values();

// console.log(it1.next());
// console.log(it1.next());

// console.log(it2.next());
// console.log(it2.next());

// class Log {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         const now  = Date.now();
//         console.log(`ログ追加：${message}(${now})`);
//         this.messages.push({message, timestamp: now});
//     }
//     [Symbol.iterator]() {
//         return this.messages.values();
//     }
// }

// const log = new Log();
// log.add("海の監視初日");

// setTimeout(function() {log.add("鯨を見た！");}, 3*1000);
// setTimeout(function() {log.add("１個の船を見た！");}, 7*1000);
// setTimeout(function() {log.add("監視終了");}, 9*1000);

// setTimeout(function() {
//     console.log(`本日の業務報告- (${new Date()})`);
//     for(let entry of log) {
//         const date = new Date(entry.timestamp);
//         console.log(`${entry.message} (${date})`);
//     }
// }, 10*1000);

// [Symbol.iterator](){
//     let i = 0;
//     const messages = this.massages;
//     return {
//         next: () => i >= messages.length ?
//         {value: undefined, done: true} : {value: messages[i++], done: false}
//     }
// }

// [Symbol.iterator]() {
//     return this.massages[Symbol.iterator]();
// }

// const book = [
//     'ある所に初老の夫婦が住んでいたとさ。',
//     '夫は山へ、妻は川へ行ったとさ。',
//     '妻が川で洗濯をしていると、',
//     '上流から桃がばがれてきたとさ。',
//     'ドンブラコッコ、スッコッコ、',
//     'ドンブラコッコ、スッコッコ。',
// ]

// const it = book[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// class FibonacciSequence {
//     [Symbol.iterator]() {
//         let a = 0, b = 1;
//         return {
//             next() {
//                 let rval = {value: b, done: false};
//                 b += a;
//                 a = rval.value;
//                 return rval;
//             }
//         }
//     }
// }

// const fs = new FibonacciSequence;
// let i = 0;

// for(let n of fs) {
//     console.log(`${i + 1}: ${n}`);
//     if(++i > 99){
//         break;
//     }
// }

// function* rainbow() {
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'skyblue';
//     yield 'purple';
// }

// const it = rainbow();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for(let color of rainbow()) {
//     console.log(color);
// }

// function* interrogate() {
//     const name = yield "お名前は？";
//     const color = yield "好きな色はなんですか？";
//     return `${name}さんの好きな色は${color}だそうです。`;
// }

// const it = interrogate();
// console.log(it.next());
// console.log(it.next('Kaede'));
// console.log(it.next('green'));
// console.log(it.next());

function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it = abc();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let i of abc()) {
    console.log(i);
}