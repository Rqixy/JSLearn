// function sayHello() {
//     console.log("Hello");
//     console.log("こんにちは！世界");
//     console.log("Hola mundo!");
// }

// sayHello();

function getGreeting() {
    return "Hello world";
}

// const message = getGreeting();
// console.log(message);

// console.log(getGreeting);
// console.log(getGreeting());

// const f = getGreeting;
// console.log(f());

// const o = {};
// o.f = getGreeting;
// console.log(o.f());

// const arr = [1, 2, 3];
// arr[1] = getGreeting;
// console.log(arr);
// const message = arr[1]();
// console.log(message);

// function ave(a, b) {
//     return (a + b)/2;
// }

// console.log(ave(3,5));

// const a = 5, b = 10;
// console.log(ave(a, b));

// function f(o) {
//     console.log(`関数fの中、o.messageに代入する前の値："${o.message}"`);
//     o.message = "messageの値を関数fの中で設定した！";
//     console.log(`関数fの中、o.messageに代入した後の値："${o.message}"`);
// }

// let o = {
//     message: "message初期値",
// };

// console.log(`関数f呼び出す前：o.message = "${o.message}}"`);
// f(o);
// console.log(`関数f呼び出した後：o.message = "${o.message}}"`);

// function f(o){
//     console.log(`fの中で(２つの代入の前)：o.message="${o.message}"`);
//     o.message = "fで最初セットされた"
//     console.log(`fの中（２つの代入の間）：o.message="${o.message}"`);
//     o = {
//         message: '新しいオブジェクト',
//     };
//     console.log(`fの中（２つの代入の後）：o.message="${o.message}"`);
// }

// let o = {
//     message: '初期値',
// };
// console.log(`fの呼び出し前：o.message="${o.message}"`);
// f(o);
// console.log(`fの呼び出し後：o.message="${o.message}"`);

// function f(x){
//     return `fの中のxの値：${x}`;
// }

// console.log(f());
// console.log(f(2));
// console.log(f("x"));

// function getSentence([subject, verb, object]){
//     return `${subject} ${verb} ${object}`;
// }

// const arr = ["I", "love", "javascript"];
// console.log(getSentence(arr));

// function addPrefix(prefix, ...words){
//     const prefixWords = [];
//     for(let i = 0; i <  words.length; i++){
//         prefixWords[i] = prefix + words[i];
//     }
//     return prefixWords
// }

// console.log(addPrefix("con", "verse", "vex"));
// console.log(addPrefix("非","プログラマー","デザイナー","コーダー"));

// function f(a, b = "default", c = 3){
//     return `${a} - ${b} - ${c}`;
// }

// console.log(f(5, 6, 7));
// console.log(f(5, 6));
// console.log(f(5));
// console.log(f());

// const o = {
//     name: 'wallace',
//     bark: function() {return 'Woof!';},
// }
// const o2 = {
//     名前:'ポチ',
//     吠える:function() {return 'ウーッ、ワン！';}
// }
// console.log(o);
// console.log(o2);
// console.log(o.bark);
// console.log(o2.吠える);

// const o = {
//     name: 'wallace',
//     bark() {return 'Woof!';},
// }
// const o2 = {
//     名前:'ポチ',
//     吠える() {return 'ウーッ、ワン！';}
// }
// console.log(o);
// console.log(o2);
// console.log(o.bark);
// console.log(o2.吠える);

// const o = {
//     name: 'Wallace',
//     speak() {return `My name is ${this.name}`;},
// }
// const o2 = {
//     名前: 'ポチ',
//     話す() {return `僕の名前は${this.名前}です`;},
// };
// const speak = o.speak;
// console.log(speak === o.speak);

// console.log(speak());
// // console.log(o2);
// console.log(o.speak());
// // console.log(o2.話す());

// const o = {
//     name: 'Julie',
//     greetBackwards: function() {
//         const self = this //thisを覚えておく

//         function getReverseName(){
//             let nameBackWords = '';
//             for(let i = self.name.length-1; i>=0; i--){
//                 nameBackWords += self.name[i];
//             }
//             return nameBackWords;
//         }

//         return `${getReverseName()} si eman ym,olleH`;
//     },
// };
// console.log(o.greetBackwards());

// const g = function f(stop){
//     if(stop){
//         console.log('停止');
//         return;
//     }
//     else {
//         console.log('fは停止していない');
//         f(true);
//     }
// };
// g(false);
// console.log("--------");
// g(true);

// const f1 = function() {return "Hello!"};
// const f2 = () => "Hello!";

// const f3 = function(name) {return `${name}, Hello`};
// const f4 = name => `${name}, Hello!`;

// const f5 = function(a, b) {return a + b};
// const f6 = (a, b) => a + b;

// console.log(f1());
// console.log(f2());
// console.log(f3('sato'));
// console.log(f4('sato'));
// console.log(f5(3,5));
// console.log(f6(2,3));

// const o = {
//     name: 'Julie',
//     greetBackwards: function() {
//         const getReverseName = () => {
//             console.log(this);
//             let nameBackWords = '';
//             for(let i = this.name.length-1; i>=0; i--){
//                 nameBackWords += this.name[i];
//             }
//             return nameBackWords;
//         }

//         return `${getReverseName()} si eman ym,olleH`;
//     },
// };
// console.log(o.greetBackwards());

// const bruce = {name: 'bruce'};
// const madeline = {name: 'madeline'};

// function greet(){
//     return `My name is ${this.name}`;
// }

// console.log(greet());
// console.log(greet(bruce));
// console.log(greet.call(bruce));
// console.log(greet(madeline));
// console.log(greet.call(madeline));

// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// console.log(bruce);
// update.call(bruce, 1949, 'Singer');
// console.log(bruce);

// console.log(bruce);
// update.apply(bruce, [1949, 'Singer']);
// console.log(bruce)

'use strict';
// const arr = [2, 3, -5, 15, 7];
// console.log(Math.min.apply(this, arr));
// console.log(Math.max.apply(null, arr));

const bruce = {name: 'bruce'};
const newBruce = [1940, 'Fighter'];
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// console.log(bruce);
// update.call(bruce, ...newBruce);
// console.log(bruce);

// const arr = [2, 3, -5, 15, 7];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// const updateBruce = update.bind(bruce);
// console.log(bruce);
// updateBruce(1940, 'Fighter');
// console.log(bruce);

const updateBruce1949 = update.bind(bruce, '1949');
console.log(bruce);
updateBruce1949('Singer');
console.log(bruce);