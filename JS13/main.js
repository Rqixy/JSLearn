
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

