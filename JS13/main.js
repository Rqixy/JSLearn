
// function printLeapYearStatus() {
//     const year = new Date();
//     if(year % 4 !== 0) console.log(`${year}はうるう年ではない`);
//     else if(year % 100 !== 0) console.log(`${year}はうるう年である`);
//     else if(year % 400 !== 0) console.log(`${year}はうるう年ではない`);
//     else console.log(`${year}はうるう年である`);
// }

// printLeapYearStatus();

// function isCurrentYearLeapYear() {
//     const year = new Date().getFullYear();
//     if(year % 4 !== 0) return false;
//     else if(year % 100 !== 0) return true;
//     else if(year % 400 !== 0) return false;
//     else return true;
// }

// console.log(isCurrentYearLeapYear());

// daysInMonth = [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// console.log(daysInMonth);

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'lightblue', 'purple'];
// let colorIndex = -1;
// function getNextRainbowColor() {
//     if(++colorIndex >= colors.length) colorIndex = 0;
//     return colors[colorIndex];
// }

// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());

// function isLeapYear(year) {
//     if(year % 4 !== 0) return false;
//     else if(year % 100 !== 0) return true;
//     else if(year % 400 !== 0) return false;
//     else return true;
// }

// console.log(isLeapYear(new Date().getFullYear()));

// const getNextRainbowColor = (function() {
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'lightblue', 'purple'];
//     let colorIndex = -1;
//     return function () {
//         if(++colorIndex >= colors.length) colorIndex = 0;
//         return colors[colorIndex];
//     }
// })();

// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());
// console.log(getNextRainbowColor());

// setInterval(function() {
//     document.querySelector('.rainbow').style['background-color'] = getNextRainbowColor();
// }, 1000);

// function getRainbowIterator() {
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'lightblue', 'purple'];
//     let colorIndex = -1;
//     return {
//         next() {
//             if(++colorIndex >= colors.length) colorIndex = 0;
//             console.log("in iterator: "+colors[colorIndex])
//             return {value: colors[colorIndex], done: false};
//         }
//     };
// }

// const rainbowIterator = getRainbowIterator();
// setInterval(function() {
//     document.querySelector('.rainbow').style['background-color'] = rainbowIterator.next().value;
// }, 1000);

// const v = function() { };
// const a = [1, 2, 3];

// console.log(typeof(v));
// console.log(typeof(a));
// console.log(v instanceof Object);

// setTimeout(function() { console.log("hello"); }, 1500);

// var i;
// for(i = 5; i >= 0; i--) {
//     setTimeout(function() {
//         console.log(i === 0 ? "go!" : i);
//     }, (5 - i) * 1000);
// }

// function loopBody(i) {
//     setTimeout(function() {
//         console.log(i === 0 ? "Go!" : i);
//     }, (5 - i) * 1000);
// }

// var i;
// for(i = 5; i >= 0; i--) {
//     loopBody(i);
// }

// var i;
// for(i = 5; i >= 0; i--) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i === 0 ? "Go!" : i);
//         }, (5 - i) * 1000);
//     }) (i);
// }

// for(let i = 5; i >= 0; i--) {
//     setTimeout(function() {
//         console.log(i === 0 ? "Go!" : i);
//     }, (5 - i) * 1000);
// }

// let i;
// for(i = 5; i >= 0; i--) {
//     setTimeout(function() {
//         console.log(i === 0 ? "Go!" : i);
//     }, (5 - i) * 1000);
// }

// function addThreeSquareAddFiveTakeSquareRoot(x) {
//     return Math.sqrt(Math.pow(x + 3, 2) + 5);
// }

// const answer1 = (addThreeSquareAddFiveTakeSquareRoot(5) + addThreeSquareAddFiveTakeSquareRoot(2)) / addThreeSquareAddFiveTakeSquareRoot(7);
// console.log(answer1);

// const f = addThreeSquareAddFiveTakeSquareRoot;
// const answer2 = (f(5) + f(2)) / f(7);
// console.log(answer2);

// const Money = require('math-money');
// const oneDollar = Money.Dollar(1);
// const Dollar = Money.Dollar;
// const twoDollar = Dollar(2);

// const sin = Math.sin;
// const cos = Math.cos;
// const theta = Math.PI/4;
// const zoom = 2;
// const offset = [1, -3];

// const pipeline = [
//     function rotate(p) {
//         return {
//             x: p.x * cos(theta) - p.y * sin(theta),
//             y: p.x * sin(theta) + p.y * cos(theta),
//         };
//     },

//     function scale(p) {
//         return {
//             x: p.x * zoom,
//             y: p.y * zoom,
//         };
//     },

//     function translate(p) {
//         return { 
//             x: p.x + offset[0],
//             y: p.y + offset[1],
//         };
//     },
// ];

// const p = {x: 1, y: 1};
// console.log(p);
// let p2 = p;
// for(let i = 0; i < pipeline.length; i++) {
//     p2 = pipeline[i](p2);
//     console.log(p2);
// }

// function sum(arr, f) {
//     if(typeof f != 'function') f = x => x;

//     return arr.reduce((a, x) => a += f(x), 0);
// }

// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3], x => x * x));
// console.log(sum([1, 2, 3], x => Math.pow(x, 3)));

// function newSummer(f) {
//     return arr => sum(arr, f);
// }

// const sumOfSquares = newSummer(x => x*x);
// const sumOfCubes = newSummer(x => Math.pow(x, 3));

// console.log(sumOfSquares([1, 2, 3]));
// console.log(sumOfCubes([1, 2, 3]));

// function findNeedle(haystack) {
//     if(haystack.length === 0) return "針山は無くなった";
//     if(haystack.shift() === '針') return "針が見つかった！";
//     console.log(haystack);
//     return findNeedle(haystack);
// }

// console.log(findNeedle(['薔', '薔', '薔', '薔', '針', '薔', '薔']));

function fact(n) {
    if(n === 1) return 1;
    return n * fact(n - 1);
}

console.log(fact(4));
console.log(fact(5));
console.log(fact(8));