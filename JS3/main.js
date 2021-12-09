// let currentTempC = 16;
// console.log(currentTempC);
// currentTempC = 22;
// console.log(currentTempC);

// const ROOM_TEMP_C = 26.5, MAX_TEMP_C = 36;

// let 現在の温度　= 16;
// console.log(現在の温度);

// let room1 = "会議室A";
// console.log("room1 = " + room1);
// let currentRoom = room1;
// console.log("currentRoom = " + currentRoom);
// let nextRoom = 会議室A;

// const x = 0.1 + 0.2;
// console.log(x);

// let count = 10;
// console.log("整数 : " + count);
// const blue = 0x0000ff;
// console.log("16進数　:　" + blue);
// const umask = 0o0022;
// console.log("8進数 : " + umask);
// const roomTemp = 21.5;
// console.log("少数 : " + roomTemp);
// const c = 3.0e6;
// console.log("指数表記" + c);
// const e =-1.6e-19;
// console.log("指数表記" + e);
// const inf = Infinity;
// console.log(inf);
// const ninf = -Infinity;
// console.log(ninf);
// const nan = NaN;
// console.log(nan);


// console.log(1/0);
// console.log(-1/0);
// console.log(Infinity/Infinity);

// const small = Number.EPSILON;
// console.log(small);

// const dialog = 'Sam looked up, and said "hello old friend!", as Max walked in.';
// const imperative = "Don't do that!";

// // const dialog2 = "sam looked up, and said "Don't do that!", as Max"
// const dialog1 = "He looked up and said \"don't do that!\" to Max.";
// const dialog2 = 'He looked up and said "don\'t do that!" to Max.';

// console.log(dialog1);
// console.log(dialog2);
// console.log(dialog1==dialog2);

// const dialog3 = `He looked up and said "don't do that!" to Max.`;
// console.log(dialog3);
// console.log(dialog1==dialog3);

// const s = "In Javascript, use \\ as an escape character in strings.";
// const s2 = "Javascriptの文字列では、\\はエスケープ文字として使われる。";

// console.log(s);
// console.log(s2);
// const n = "Line1\nLine2";
// console.log(n);

// const r = "Windows line 1\r\nWindows line 2";
// console.log(r);

// const t = "Speed:\t60kph";
// console.log(t);

// const s = "Don\'t";
// console.log(s);
// const d = 'Sam said \"Hello\".';
// console.log(d);
// const b = `New in ES2015: \` strings.`;
// console.log(b);
// const doll = `New in ES02015: ${d}`;
// console.log(doll);
// const back = "「\\\\」で「\\」を表す";
// console.log(back);

// let currentTemp = 19.5;
// const message ="現在の温度は" + currentTemp + "℃です。";
// console.log(message);

// let currentTemp = 19.5;
// const message =`現在の温度\$は${currentTemp}℃です。`;
// console.log(message);

// const multiline = "1行目\n\
// 2行目";
// console.log(multiline);

// const multiline = `1行目
//                    2行目
//                    3行目`;
// console.log(multiline);

// const multiline = "1行目\n" + 
//                   "2行目\n" + 
//                   "3行目"; 
// console.log(multiline);

// const currentTemp = 13.5;
// const multiline = '現在の温度は：' +
//                   `${currentTemp}℃です。\n` +
//                   "もうじき暖かくなるはずですから少々お待ちください。";

// console.log(multiline);

// const result1 = 3 + '30';
// console.log(result1);

// const result2 = 3 * '30';
// console.log(result2);

// let heating = true;
// let colding = false;

// console.log(heating);
// console.log(colding);

// const RED = Symbol();
// const BLUE = Symbol();
// const ORANGE = Symbol("夕日の色");
// console.log(RED);
// console.log(ORANGE);
// console.log(RED === BLUE);
// console.log(RED === ORANGE);

// let currentTemp;
// console.log(currentTemp);
// currentTemp = null;
// console.log(currentTemp);
// currentTemp = 26.5;
// console.log(currentTemp);
// currentTemp = undefined;
// console.log(currentTemp);

// const obj = {};
// obj.color = "黄色";
// obj["not an identifier"] = 3;

// console.log(obj["not an identifier"]);
// console.log(obj.color);
// console.log(obj["color"]);

// const SIZE = Symbol();
// obj[SIZE] = 8;
// console.log(obj[SIZE]);
// console.log(obj);

// const obj = {};
// const SIZE = Symbol();
// obj[SIZE] = 8;
// console.log(obj[SIZE]);
// console.log(obj);

// obj.SIZE = 12;
// console.log(obj.SIZE);
// console.log(obj["SIZE"]);
// console.log(obj[SIZE]);
// console.log(obj);


// const sam1 = {
//     name: 'Sam',
//     age: 4,
// };
// console.log(sam1);

// const sam2 = {name: 'Sam', age: 4};
// console.log(sam2);

// console.log(sam1.name === sam2.name);
// console.log(sam1.age === sam2.age);
// console.log(sam1 === sam2);

// const sam3 = {
//     name: 'Sam',
//     classification: { //プロパティの値がオブジェクト
//         kingdom: 'Animalia',
//         phylum: 'Chordata',
//         class: 'Mamalia',
//         order: 'Carrnivoria',
//         family: 'Felidae',
//         subfamily: 'Felinae',
//         genus: 'Felis',
//         species: 'F, catus'
//     },
// };
// // console.log(sam3);

// const タマ = {  
//     名前: 'タマ',
//     分類: { //プロパティの値がオブジェクト
//         界: '動物会',
//         門: '脊索動物門',
//         網: '哺乳網',
//         目: 'ネコ目',
//         科: 'ネコ科',
//         亜科: 'ネコ亜科',
//         属: 'ネコ属',
//         種: 'ネコ',
//     }
// };
// console.log(タマ);

// console.log(sam3.classification.family)
// console.log(sam3["classification"].family);
// console.log(sam3.classification["family"]);
// console.log(sam3["classification"]["family"]);

// sam3.speak = function(){return "Meow!"};
// タマ.鳴く = function(){return "にゃー！"};

// console.log(sam3.speak());
// console.log(タマ.鳴く());

// delete sam3.classification;
// delete sam3.speak;
// console.log(sam3);

// delete タマ.分類;
// delete タマ.鳴く;
// console.log(タマ);

// const s = "hello";
// const s2 = s.toUpperCase();
// console.log(s2);

// s.rating = 3;
// console.log(s.rating);

// const a1 = [1,2,3,4];
// const a2 = [1, 'two', 3, null];
// const a3 = [
//     "What the hammer?",
//     "In what furnace was thy brain?",
//     "What the anvil?",
//     "Dare its deadly terrors clasp"
// ];
// const a4 = [
//     {name: "Ruby", hardness: 9},
//     {name: "Diamond", hardness: 10},
//     {name: "Topaz", hardness: 8},
// ];
// const a5 = [
//     [1, 3, 5],
//     [2, 4, 6],
// ];

// console.log(a1[0]);
// console.log(a1.length);
// console.log(a3.length-1);
// console.log(a4[1].name);
// console.log(a4[2].hardness);


// const a = [1, 2, 'c', 4, 5];
// a[2] = 3;
// console.log(a);
// console.log(a.length);

// a[81.3] = "eighty-one point three";
// console.log(a[81.3]);
// a[-2] = "マイナス２";
// console.log(a[-2]);
// console.log(a);


// const now = new Date();
// console.log(now);

// const halloween = new Date(2016, 9, 31);
// console.log(halloween);

// const halloweenParty = new Date(2016, 9, 31, 19, 0);
// console.log(halloweenParty.getFullYear());
// console.log(halloweenParty.getMonth());
// console.log(halloweenParty.getDate());
// console.log(halloweenParty.getDay());
// console.log(halloweenParty.getHours());
// console.log(halloweenParty.getMinutes());
// console.log(halloweenParty.getSeconds());
// console.log(halloweenParty.getMilliseconds());

// const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
// console.log(email);

// const numStr = "33.3";
// const num = Number(numStr);
// console.log(numStr + 3);
// console.log(num + 3);

// const a = parseInt("16 volts", 10);
// console.log(a);

// const b = parseInt("3a", 16);
// console.log(b);

// const c = parseFloat("15.5 kph", 10);
// console.log(c);

// const d = new Date();
// console.log(d);
// const ts = d.valueOf();
// console.log(ts);

// const b = true;
// const c = false;
// const n = b ? 1 : 0;
// console.log(n);
// const m = c ? 1 : 0;
// console.log(m);

// const d = new Date();
// console.log(d);
// console.log(d.toString());

// const arr = [1, true, "hello"];
// console.log(arr);
// console.log(arr.toString());

const n = 0;
const b0 = !n;
const b1 = !!n;
const b2 = Boolean(n);
console.log(n);
console.log(b0);
console.log(b1);
console.log(b2);


const m = 1;
const c0 = !m;
const c1 = !!m;
const c2 = Boolean(m);
console.log(m);
console.log(c0);
console.log(c1);
console.log(c2);