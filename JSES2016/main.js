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

console.log("".padStart(30, "1234567890"));
const l = 0.34e-2.toString();
const m = "3.14";
const n = "3";
console.log(l.padStart(10) + m.padStart(10) + n.padStart(10));
console.log(l.padStart(10, "_") + m.padStart(10, "_") + n.padStart(10, "_"));
console.log(l.padEnd(10) + m.padEnd(10) + n.padEnd(10));

console.log("".padStart(20, "一二三四五六七八九〇"));
let hyou = "".padStart(20, "＝＊＊＝") + "\n";
hyou += "| " + "右寄せ".padStart(8, "  ") + " | " + "左寄せ".padEnd(8, "  ") + " |\n";
hyou += "| " + "左寄せ".padEnd(8, "  ") + " | " + "右寄せ".padStart(8, "  ") + " |\n";
hyou += "".padStart(20, "＝＊＊＝") + "\n";
console.log(hyou);