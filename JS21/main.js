// const USER_EMAIL = Symbol();

// class User {
//     setEmail(value) {
//         if(!/@/.test(value)) throw new Error(`不正なアドレス：${value}`);
//         this[USER_EMAIL] = value;
//     }
//     getEmail() {
//         return this[USER_EMAIL];
//     }
// }

// const u = new User();
// u.setEmail("John@doe.com");
// console.log(`email: ${u.getEmail()}`);

// const USER_EMAIL = Symbol();

// class User {
//     set email(value) {
//         if(!/@/.test(value)) throw new Error(`不正なアドレス : ${value}`);
//         this[USER_EMAIL] = value;
//     }

//     get email() {
//         return this[USER_EMAIL];
//     }
// }

// const u = new User();
// u.email = "John@doe.com";
// console.log(`email : ${u.email}`);

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     get perimeter() {
//         return this.width*2 + this.height*2;
//     }
// }

// const r = new Rectangle(5, 10);
// console.log(`外周の長さ：${r.perimeter}`);

// const obj = {foo: "bar"};
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

// Object.defineProperty(obj, 'foo', {writable: false});
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

// const obj = {foo: 'bar'};
// Object.defineProperty(obj, 'color', {
//     get: function() { return this.color },
//     set: function(value) { this.color = value },
// });

// Object.defineProperty(obj, 'name', {
//     value: 'シンシア',
// });
// Object.defineProperty(obj, 'greet', {
//     value: function() { return `こんにちは。私の名前は${this.name}です。`; }
// });

// console.log(obj);
// console.log(obj.name);
// console.log(obj.greet());

// const arr = [3, 1.5, 9, 2, 5.2];
// arr.sum = function() { return this.reduce((a, x) => a + x); }
// arr.avg = function() { return this.sum() / this.length; }
// Object.defineProperty(arr, 'sum', { enumerable: false });
// Object.defineProperty(arr, 'avg', { enumerable: false });
// console.log(arr.sum());
// console.log(arr.avg());

// const arr = [3, 1.5, 9, 2, 5.2];
// Object.defineProperty(arr, 'sum', {
//     value: function() { return this.reduce((a, x) => a + x); },
//     enumerable: false,
// });
// Object.defineProperty(arr, 'avg', {
//     value: function() { return this.sum() / this.length; },
//     enumerable: false,
// });
// console.log(arr.sum());
// console.log(arr.avg());

// const arr = [3, 1.5, 9, 2, 5.2];
// Object.defineProperties(arr, {
//     sum: {
//         value: function() { return this.reduce((a, x) => a + x); },
//         enumerable: false,
//     },

//     avg: {
//         value: function() { return this.sum() / this.length; },
//         enumerable: false,
//     },
// });

// console.log(arr.sum());
// console.log(arr.avg());

// 'use strict'

// const appInfo = {
//     company: 'White Knight Software, Inc.',
//     version: '1.3.5',
//     buildId: '0a995448-ead4-4a8b-9c9083279ea2',
//     copyright() {
//         return `©${new Date().getFullYear()}, ${this.company}`;
//     },
// };
// Object.freeze(appInfo);
// console.log(Object.isFrozen(appInfo));

// appInfo.newProp = 'test';    //XXX
// delete appInfo.company;  //XXX
// appInfo.company = 'test';    //XXX
// Object.defineProperty(appInfo, 'company', { enumerable: false });    //XXX

// 'use strict'
// class Logger {
//     constructor(name) {
//         this.name = name;
//         this.log = [];
//     }
//     add(entry) {
//         this.log.push({
//             log: entry,
//             timestamp: Date.now(),
//         });
//     }
// }
// const log = new Logger("船長の航海日記");
// Object.seal(log);
// console.log(Object.isSealed(log));

// log.name = "船長の退屈な航海日記だ";
// log.add("またまた退屈な日だ...");

// log.newProp = 'test'; //XXX
// log.name = 'テスト';
// delete log.name;    //XXX
// Object.defineProperty(log, 'log', { enumerable: false });   //XXX

// const log2 = new Logger("一等航海士の航海日記");
// Object.preventExtensions(log2);
// console.log(Object.isExtensible(log2));
// log2.name = "一等航海士の退屈な日誌";
// log2.add("またまた退屈な日だ...");
// // console.log(log2);

// // log2.newProp = 'test';  //XXX
// log2.name = 'テスト';
// delete log2.name;
// Object.defineProperty(log2, 'log', { enumerable: false });
// console.log(log2);

// const coefficients = {
//     a: 1,
//     b: 2,
//     c: 5,
// };

// function evaluate(x, c) {
//     return c.a + c.b * x + c.c * Math.pow(x, 2);
// }

// console.log(evaluate(3, coefficients));

// const coefficients = {
//     a: 1, 
//     c: 3
// };
// console.log(evaluate(5, coefficients));

// const betterCoefficients = new Proxy(coefficients, {
//     get(target, key) {
//         return target[key] || 0;
//     },
// });

// console.log(betterCoefficients.a);
// console.log(betterCoefficients.b);
// console.log(betterCoefficients.c);
// console.log(betterCoefficients.d);
// console.log(betterCoefficients.z);

// const betterCoefficients = new Proxy(coefficients, {
//     get(target, key) {
//         if(!/^[a-z]$/.test(key)) return target[key];
//         return target[key] || 0;
//     },
// });

// console.log(betterCoefficients.a);
// console.log(betterCoefficients.b);
// console.log(betterCoefficients.c);
// console.log(betterCoefficients.d);
// console.log(betterCoefficients.z);
// console.log(betterCoefficients.anything);
// console.log(evaluate(5, betterCoefficients));

const cook = {
    name: "Walt",
    redPhosphorus: 100,
    water: 500,
};
const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if(key === 'redPhosphorus') {
            if(target.allowDangerousOperations){
                return target.redPhosphorus = value;
            } else {
                return console.log("危険すぎます！");
            }
        }
        target[key] = value;
    },
});

protectedCook.water = 550;
console.log(protectedCook.water);
console.log(protectedCook.redPhosphorus);
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150
console.log(protectedCook.redPhosphorus);
