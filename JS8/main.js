// const arr1 = [1, 2, 3];
// const arr2 = ["one", 2, "three"];
// const arr3 = [[1, 2, 3], ["one", 2, "three"]];
// const arr4 = [
//     {name: "monkey", type: "object", luckynumbers: [5, 7, 3]},
//     {name: "bird", type: "object"},
//     {name: "鬼", type: "object"},
//     1,
//     function() { return "配列の要素として関数を記憶することもできる";},
//     "three",
// ];

// console.log(arr1[1]);
// console.log(arr3[1]);
// console.log(arr4[1]);
// arr1[4] = 5;
// console.log(arr1);
// console.log(arr1[3]);

// const arr = new Array();
// console.log(arr);
// const arr1 = new Array(1, 2, 3);
// console.log(arr1);
// const arr2 = new Array(2);
// console.log(arr2);


// let arr = ["b", "c", "d"];
// console.log(arr.push("e")); //配列の最後に要素を追加
// console.log(arr);
// console.log(arr.pop()); //最後の要素を削除
// console.log(arr);
// console.log(arr.unshift("a"));  //配列の最初に要素を追加
// console.log(arr);
// console.log(arr.shift());   //最初の要素を削除
// console.log(arr);

// let arr = [1, 2, 3];
// let arr2 = arr.concat(4, 5, 6);
// console.log(arr);
// console.log(arr2);

// arr2 = arr.concat([4, 5], 6);
// console.log(arr2);
// arr2 = arr.concat([4, 5], [6, 7]);
// console.log(arr2);
// arr2 = arr.concat([[4, 5], 6]);
// console.log(arr2);

// let arr = [11, 12, 13, 14, 15];
// let arr2 = arr.slice(3);
// console.log(arr2);
// console.log(arr);
// arr2 = arr.slice(2, 4);
// console.log(arr2);
// arr2 = arr.slice(1, -1);
// console.log(arr2);
// arr2 = arr.slice(-2, -1);
// console.log(arr2);

// let arr = [1, 5, 7];
// let arr2 = arr.splice(1, 0, 2, 3, 4);
// console.log(arr);
// console.log(arr2);
// arr2 = arr.splice(5, 0 ,6);
// console.log(arr);
// arr2 = arr.splice(1, 2);
// console.log(arr);
// console.log(arr2);
// arr2 = arr.splice(2, 1, 'a', 'b');
// console.log(arr);
// console.log(arr2);

// let arr = [11, 12, 13, 14];
// let arr2 = arr.copyWithin(1, 2);
// console.log(arr);
// console.log(arr2);
// console.log(arr.copyWithin(2, 0, 2));

// let arr = new Array(5).fill(1);
// console.log(arr);
// let arr2 = arr.fill("a");
// console.log(arr);
// console.log(arr2);
// console.log(arr.fill("b", 1));
// console.log(arr.fill("c", 2, 4));
// console.log(arr.fill(5.5, -4));
// console.log(arr.fill(0, -3, -1));

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.reverse();
// console.log(arr);
// console.log(arr2);

// arr.reverse();
// console.log(arr);
// console.log(arr2);

// let arr = [5, 2, 1, 4, 3];
// let arr2 = arr.sort();
// console.log(arr);
// console.log(arr2);
// arr2.reverse();
// console.log(arr);
// console.log(arr2);

// let arr = [
//     {name: "Suzanne"}, 
//     {name: "Jim"}, 
//     {name: "Trevor"}, 
//     {name: "Amanda"},
// ];

// console.log(arr);
// arr.sort((a, b) => a.name > b.name ? 1 : (a.name === b.name ? 0 : -1));
// console.log("----------");
// console.log(arr);
// arr.sort((a, b) => a.name[1] < b.name[1] ? 1 : (a.name[1] === b.name[1] ? 0 : -1));
// console.log("------------");
// console.log(arr);

// const o = {name: "ジェリー"};
// const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(5));
// console.log((arr.indexOf("a")));
// console.log(arr.indexOf({name: "ジェリー"}));
// console.log(arr.indexOf(o));
// console.log(arr.indexOf([1, 2]));
// console.log(arr.indexOf("9"));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf("a" , 5));
// console.log(arr.indexOf(5, 5));
// console.log(arr.lastIndexOf(5, 4));
// console.log(arr.lastIndexOf(true, 3));

// const arr = [{id: 5, name: "Taro"}, {id: 7, name: "Hanako"}];
// console.log(arr.findIndex(o => o.id === 5));
// console.log(arr.findIndex(o => o.name === "Hanako"));
// console.log(arr.findIndex(o => o === 3));
// console.log(arr.findIndex(o => o.id === 17));
// console.log(arr.findIndex(o => o.id === 7));

// console.log(arr.find(o => o.id === 5));
// console.log(arr.find(o => o.id === 2));

// const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
// console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));

// console.log(arr.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x))));

// class Person {
//     constructor(name) {
//         this.name = name;
//         this.id = Person.nextId++;
//     }
// }
// Person.nextId = 0;
// const Ichiro = new Person("Ichiro"),
//       Jiro = new Person("Jiro"),
//       Saburo = new Person("Saburo"),
//       Shiro = new Person("Shiro");

// const arr = [Ichiro, Jiro, Saburo, Shiro];

// console.log(arr.find(p => p.id === Saburo.id));
// console.log(arr.find(function(p) { return p.id === Saburo.id}));
// console.log(arr.find((p => p.id === this.id, Saburo)));

// const arr = [5, 7, 12, 15, 17];
// console.log(arr.some(x => x%2===0));

// const arr = [4, 6, 16, 36];
// console.log(arr.every(x => x%2===0));

// const cart = [{name: "iPhone", price: 54800}, {name: "Android", price: 49800}];
// const names = cart.map(x => x.name);
// console.log(names);

// const prices = cart.map(x => x.price);
// console.log(prices);

// const discountPrices = prices.map(x => x*0.8);
// console.log(discountPrices);

// const lcNames = names.map(x => x.toLowerCase());
// console.log(lcNames);

// console.log(cart);

// const items = ["iPhone", "Android"];
// const prices = [54800, 49800];
// const cart = items.map((x, i) => ({name: x, price: prices[i]}));
// console.log(cart);

// const cards = [];
// const marks = ['Heart', 'Clover', 'Diamond', 'Spade'];
// for(let mark of marks){
//     for (let num=1 ; num<=13; num++){
//         cards.push({mark, num});
//     }
// }

// let chooseCard = cards.filter(card => card.num === 2);
// console.log(chooseCard);



// function changeMark(card) {
//     const mark_emoji = { 'Heart': '♡', 'Clover': '♧', 'Dia': '♢', 'Spade': '♤' };
//     const numToAJOK = {1: 'A', 11: 'J', 12: 'Q', 13:'K'};
//     for(let i=2; i<=10; i++){
//         numToAJOK[i] = i;
//     }
//     return mark_emoji[card.mark]+numToAJOK[card.num];
// }

// const cards = [];
// const marks = ['Heart', 'Clover', 'Dia', 'Spade'];
// for(let mark of marks){
//     for(let num=1; num<=13; num++){
//         cards.push({mark, num});
//     }
// }

// let chooseCard_mark = cards.filter(card => card.num === 2).map(changeMark);
// // console.log(chooseCard_mark);

// // chooseCard_mark = cards.filter(card => card.mark === "Dia").map(changeMark);
// // console.log(chooseCard_mark);

// // chooseCard_mark = cards.filter(card => card.num > 10).map(changeMark);
// // console.log(chooseCard_mark);

// // chooseCard_mark = cards.filter(card => card.num > 10 && card.mark ==='Heart').map(changeMark);
// // console.log(chooseCard_mark);

// chooseCard_mark = cards.filter(card => card.num%2 === 0 && (card.mark === 'Heart' || card.mark === 'Dia')).map(changeMark);
// console.log(chooseCard_mark)

// const arr = [5, 7, 2, 4];
// const sum = arr.reduce((a, x) => a += x, 4);
// console.log(sum);

// const sum2 = arr.reduce((a, x) => a +=x, 0);
// console.log(sum2);