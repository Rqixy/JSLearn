// const input = "As I was going to Saint Ives";
// console.log(input.startsWith("As"));
// console.log(input.endsWith("Ives"));
// console.log(input.startsWith("going", 9));
// console.log(input.endsWith("going", 14));
// console.log(input.includes("going"));
// console.log(input.includes("going", 10));
// console.log(input.indexOf("going"));
// console.log(input.indexOf("going",10));
// console.log("-----");
// const input2 = "セント・アイヴスはイギリスにある町の名前です。";
// console.log(input2.startsWith("セント"));
// console.log(input2.endsWith("です。"));
// console.log(input2.startsWith("イギリス", 9));
// console.log(input2.includes("アメリカ"));
// console.log(input2.includes("町", 10));
// console.log(input2.indexOf("町"));
// console.log(input2.indexOf("町", 10 ));
// console.log(input2.indexOf("アメリカ"));

// console.log(input.toLowerCase().startsWith('as'));
// const output = input.replace("going", "walking");
// console.log(output);
// let output2 = input2.replace("イギリス", "英国");
// output2 = output2.replace("名前", "名称");
// console.log(output2);

// const re1 = /going/;
// const re2 = new RegExp("going");
// const re3 = /イギリス/;

// const input = "As I was going to Saint Ives";

// const re = /\w{3,}/ig;
// console.log(input.match(re));
// console.log(input.search(re));

// console.log(re.test(input));
// let a = re.exec(input);
// console.log(a);
// console.log(a[0]);
// console.log(a.index);
// console.log(a.input);
// console.log(a[1]);

// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));

// console.log(input.match(/\w{3,}/ig));
// console.log(input.match(/\w{3,}/i));
// console.log(input.search(/\w{3,}/ig));

const input = "As I was going to Saint Ives";
const output = input.replace(/\w{4,}/ig, '****');
console.log(output);

const input2 = "セント・アイヴスはイギリスにある町の名前です。";
const output2 = input2.replace(/[はをにで]/g, '　');
console.log(output2);