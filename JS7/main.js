// console.log('ブロックの前');
// {
//     console.log('ブロックの中');
//     const x = 3;
//     console.log(x);
// }
// console.log(`ブロックの外x=${x}`);

// {
//     let x = 'blue';
//     console.log(x);
//     {
//         let x = 3;
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(x); XXX

// {
//     let x = {color: "blue"};
//     let y = x;
//     let z = 3;
//     {
//         let x = 5;
//         console.log(x);
//         console.log(y.color);
//         y.color = "red";
//         console.log(z);
//         {
//             y.color = "green";
//         }
//     }
//     console.log(x.color);
//     console.log(y.color);
//     console.log(z);
// }

// let globalFunc;
// {
//     let blockVar = 'a';
//     globalFunc = function(){
//         console.log(blockVar);
//     }
// }

// globalFunc();

// let f;
// {
//     let o = {note: 'safe', note2: 'noprobrem'};
//     f = function() {
//         console.log("無名関数の中：" + o.note);
//         return o;
//     }
// }
// let oRef = f();
// console.log(oRef);
// oRef.note = "全く安全ではない！";
// console.log(oRef);

// const message = (function(){
//     const secret = "私は秘密です。";
//     return `秘密の長さは${secret.length}文字です`;
// })();

// console.log(message);

// const f = (function() {
//     let count = 0;
//     return function() {
//         return `この関数が呼ばれた回数 : ${++count}回`;
//     }
// })();

// console.log(f());
// console.log(f());
// console.log(f());

// let var1;
// let var2 = undefined;
// console.log(var1);
// console.log(var2);
// console.log(undef);

// console.log(x);
// var x = 3;
// console.log(x);

// if(x !== 3){
//     console.log(y);
//     var y = 5;
//     if(y === 5){
//         var x = 5;
//     }

//     console.log(y);
// }
// if(x === 3){
//     console.log(y);
// }

// let f = function(){
//     console.log('hello');
// }
// f();

// if(typeof x === undefined){
//     console.log('xは存在していない、あるいはundefined');
// }
// else {
//     console.log('xはだいじょうぶ');
// }

// var x;