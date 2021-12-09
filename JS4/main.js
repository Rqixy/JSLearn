// let funds = 50; //開始時の資金
// let round = 0;  //何回目の賭けか
// let moneyCount = 0;

// while (funds < 100) {
//     while(funds > 0 && funds < 100) {
//         round++;
//         console.log(`第${round}ラウンド`);
//         console.log(`手持ち資金：${funds}`);
    
//         //賭ける
//         let  bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
//         let totalBet = rand(1, funds);
//         if(new Date().getDay() === 3){
//             totalBet = 1;
//         }
//         else if(totalBet === 7) { //全部賭ける
//             totalBet = funds;
//             bets.heart = totalBet;
//         }
//         else {  //賭け金を振り分ける
//             let remaining = totalBet;
//             do {
//                 let bet = rand(1, remaining);
//                 let face = randFace();
//                 bets[face] = bets[face] + bet;
//                 remaining = remaining - bet;
//             }while(remaining > 0)
//         }
    
//         funds = funds - totalBet;
//         console.log(`   賭け金：${totalBet} (` + Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(', ') + ") ");
    
//         //サイコロを振る
//         const hand = [];
//         for(let roll = 0; roll < 3; roll++) {
//             hand.push(randFace());
//         }
//         console.log(`   出目：${hand.join(', ')}`);
    
//         //払戻金をもらう
//         let winnings = 0;
//         for(let die = 0; die < hand.length; die++) {
//             let face = hand[die];
//             if(bets[face] > 0) winnings = winnings + bets[face];
//         }
//         funds = funds + winnings;
//         console.log(`     払戻金：${winnings}`);
//     }
    
//     if(funds <= 0) {
//         moneyCount++;
//         console.log(`${moneyCount}回目の資金追加！`);
//         funds = 50;
//     }
    
// }

// console.log("意気揚々を船に戻る\n");

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rand(0, 5)];
}


// for(let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp) {
//     console.log(j);
// }

// let s = '3';
// for(; s.length < 10; s = ' ' + s);
// console.log(s);

// for(let x = 0; x < 3.0; x += 0.2){
//     console.log(x);
// }

// const player = { name: 'Thomas', rank: 'Midshpman', age:25};
// for (let prop in player) {
//     if(!player.hasOwnProperty(prop)) continue;
//     console.log(prop + ': ' + player[prop]);
// }

// const hand = [randFace(), randFace(), randFace()];
// for(face of hand){
//     console.log(`サイコロの目...${face}!`);
// }

// for(let i = 0; i < hand.length; i++){
//     console.log(`${i + 1}回目：${hand[i]}`);
// }

let  i = 0;
for(; i < bigArrayOfNumbers; i++) {
    
}