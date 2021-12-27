const moment = require('moment-timezone');

// const d = new Date();
// console.log(d);

// console.log(d.valueOf());

// let d = new Date();
// console.log(d);

// d = new Date(2017, 0);
// console.log(d);
// d = new Date(2017, 1);
// console.log(d);
// d = new Date(2017, 1, 14);
// console.log(d);
// d = new Date(2017, 1, 14, 13);
// console.log(d);
// d = new Date(2017, 1, 14, 13, 30);
// console.log(d);
// d = new Date(2017, 1, 14, 13, 30, 5);
// console.log(d);
// d = new Date(2017, 1, 14, 13, 30, 5, 500);
// console.log(d);

// d = new Date(0);
// console.log(d);
// d = new Date(1000);
// console.log(d);
// d = new Date(1463443200000);
// console.log(d);\

// d = new Date(-365*24*60*60*1000);
// console.log(d);

// d = new Date('June 14, 1903');
// console.log(d);
// d = new Date('June 14, 1903 GMT-0000');
// console.log(d);
// d = new Date('2020年7月10日');
// console.log(d);

// const d = moment.tz([2017, 3, 27, 11, 30], 'Asia/Tokyo').toDate();
// console.log(d);

// const before = {d: new Date()};
// console.log(before.d);
// console.log(before.d instanceof Date);
// const json = JSON.stringify(before);
// console.log(json);
// const after = JSON.parse(json);
// console.log(after.d instanceof Date);
// console.log(typeof after.d);
// console.log(after.d);
// after.d = new Date(after.d);
// console.log(after.d instanceof Date);
// console.log(after.d);
// console.log(after);

// const before = {d: new Date().valueOf()};
// console.log(before.d);
// console.log(typeof before.d);
// const json = JSON.stringify(before);
// console.log(json);
// const after = JSON.parse(json);
// console.log(after);
// console.log(typeof after.d);
// const d = new Date(after.d);
// console.log(d);

// const d = new Date(Date.UTC(1930, 4, 10, 10, 0));
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toTimeString());
// console.log(d.toUTCString());

// console.log(moment(d).format("YYYY-MM-DD"));
// console.log(moment(d).format("YYYY-MM-DD HH:mm"));
// console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
// console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));
// console.log(moment(d).format("dddd, MMMM [the] Do, YYYY"));
// console.log(moment(d).format("h:mm a"));
// console.log(moment(d).format("YYYY年M月D日 hh:mmA"))

// const d = new Date(Date.UTC(1815, 9, 10));
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// console.log(d.getUTCFullYear());
// console.log(d.getUTCMonth());
// console.log(d.getUTCDate());
// console.log(d.getUTCDay());
// console.log(d.getUTCHours());
// console.log(d.getUTCMinutes());
// console.log(d.getUTCSeconds());
// console.log(d.getUTCMilliseconds());

// const d1 = new Date(1996, 2, 1);
// const d2 = new Date(2000, 4, 27);
// console.log(d1 < d2);
// console.log(d1 > d2);

// const d1 = new Date(1996, 2, 1);
// const d2 = new Date(2009, 4, 27);
// const msDiff = d2 - d1;
// console.log(msDiff);
// const daysDiff = msDiff/1000/60/60/24;
// console.log(daysDiff);

// const dates = [];
// const min = new Date(2017, 0, 1).valueOf();
// const delta = new Date(2020, 0, 1).valueOf() - min;
// for(let i = 0; i < 10; i++) {
//     dates.push(new Date(min + delta * Math.random()));
// }

// printDates(dates);
// console.log("-----");
// dates.sort((a, b) => b - a);
// printDates(dates);
// console.log("-----");
// dates.sort((a, b) => a - b);
// printDates(dates);

// function printDates(dates) {
//     for(let i = 0; i < dates.length; i++) {
//         const d = dates[i];
//         console.log(i + ". " + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日");
//     }
// }

// let m = moment();
// console.log(m.format());
// m.add(3, 'days');
// console.log(m.format());
// m.subtract(2, 'years');
// console.log(m.format());

// m = moment();
// m.startOf('year');
// console.log(m.format());
// m.endOf('month');
// console.log(m.format());

// console.log(moment().format());
// const m = moment().add(10, 'hours').subtract(3, 'days').endOf('month');
// console.log(m.format());

// console.log(moment().fromNow());
// console.log(moment().subtract(1, 'year').format());
// console.log("=======");
// console.log(moment().subtract(10, 'seconds').fromNow());
// console.log(moment().subtract(44, 'seconds').fromNow());
// console.log(moment().subtract(45, 'seconds').fromNow());
// console.log(moment().subtract(5, 'minutes').fromNow());
// console.log(moment().subtract(44, 'minutes').fromNow());
// console.log(moment().subtract(45, 'minutes').fromNow());
// console.log(moment().subtract(5, 'hours').fromNow());
// console.log(moment().subtract(21, 'hours').fromNow());
// console.log(moment().subtract(22, 'hours').fromNow());
// console.log(moment().subtract(300, 'days').fromNow());
// console.log(moment().subtract(321, 'days').fromNow());