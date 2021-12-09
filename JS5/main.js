// let x;
// x = 3 * 5;
// console.log(x);

// let x = 2;
// console.log(x++ + x++);
// console.log(++x + ++x);
// console.log(x++ + ++x);
// console.log(++x + x++);
// console.log(x);
// console.log("-------------");
// let y = 10;
// console.log(y-- + y--);
// console.log(--y + --y);
// console.log(y-- + --y);
// console.log(--y + y--);
// console.log(y);

// console.log(NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN("abc"));

// let x = 0;
// while(true){
//     x += 0.1;
//     console.log(x);
//     if(Math.abs(x - 0.3) < Number.EPSILON) break;
// }
// console.log(`${x}で停止`);

// console.log(3 + 5 + "8");
// console.log("3" + 5 + 8);

// if(undefined) console.log("t"); else console.log("f");
// if(null) console.log("t"); else console.log("f");
// if(0) console.log("t"); else console.log("f");
// if(NaN) console.log("t"); else console.log("f");
// if('') console.log("t"); else console.log("f");

// console.log('---------------');

// const obj1 = {};
// if(obj1) console.log("t"); else console.log("f");
// const arr = [];
// if(arr) console.log("t"); else console.log("f");
// if(' ') console.log("t"); else console.log("f");
// if('false') console.log("t"); else console.log("f");

// const skipIt = true;
// let x = 0;
// const result1 = skipIt || x++;
// console.log(result1);

// const doIt = true;
// let y = 0;
// const result2 = doIt && y++;
// console.log(result2);

// const doIt = false;
// const result = doIt ? "Did it!" : "Didn't it";
// console.log(result);

// let x = 0, y = 10, z;
// z = (x++, y++);
// console.log(z);

// x = 0, y = 10
// z = x++, y++;
// console.log(z);

// let v, v0;
// v = v0 = 9.8;
// console.log(v);
// console.log(v0);

// const nums = [3, 5, 15, 7, 5];
// let n, i = 0;
// while(i < nums.length && (n = nums[i++]) < 10) {
//     console.log(`10より小さい数字を発見：${n}`);
// }
// console.log(`10より大きい数字を発見：${n}`);
// console.log(`未チェックの数字の個数：${nums.length-i}`);

// const obj = {b: 2, c: 3, d: 4};
// const {a, b, c} = obj;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);  //XXX

// const obj = {b: 2, c: 3, d: 4};
// let a, b, c;
// ({a, b, c} = obj);
// console.log(a);
// console.log(b);
// console.log(c);

// const arr = [1, 2, 3];
// let[x, y] = arr;
// console.log(x);
// console.log(y);

// const arr = [1, 2, 3, 4, 5];
// let [x, y, ...rest] = arr;
// console.log(x);
// console.log(y);
// console.log(rest);

// let a = 5, b = 10;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// const roomTempC = 26.5;
// let currentTempC = 34.5;
// console.log(`室温気温の差：${currentTempC-roomTempC}℃`);
// console.log(`現在の温度(華氏)：${currentTempC * 9/5 + 32}°F`);

// let options;
// // if(!options) options = {};
// options = options || {};
// console.log(options);