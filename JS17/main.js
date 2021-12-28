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

// const input = "As I was going to Saint Ives";
// const output = input.replace(/\w{4,}/ig, '****');
// console.log(output);

// const input2 = "セント・アイヴスはイギリスにある町の名前です。";
// const output2 = input2.replace(/[はをにで]/g, '　');
// console.log(output2);

// const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>'
// const matches = html.match(/area|a|link|script|source/ig);
// console.log(matches);

// const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>'
// const matches = html.match(/<area|<a|<link|<script|<source/ig);
// console.log(matches);

// const html = '<br> [!CDATA[[<br>]]';
// const matches = html.match(/<br>/ig);
// console.log(matches);

// const beer99 = "99 bottles of beer on the wall" + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";
// const m1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
// console.log(m1);

// const m2 = beer99.match(/[0-9]/g);
// console.log(m2);

// const m3 = beer99.match(/[0-9a-z\-.]/ig);
// console.log(m3);

// const m4 = beer99.match(/[-0-9a-z.]/ig);
// const m5 = beer99.match(/[a-z.0-9-]/ig);

// const m3String = JSON.stringify(m3);
// const m4String = JSON.stringify(m4);
// const m5String = JSON.stringify(m5);
// console.log(m3String);
// console.log(m3String === m4String);
// console.log(m3String === m5String);

// const beer99 = "99 bottles of beer on the wall" + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";

// const match = beer99.match(/[^ 0-9a-z]/g);
// console.log(match);

// const beer99j = "99本のビンが、壁に並んでいます。" + "1本取って渡しました。" + "98本のビンが壁に並んでいます。";

// const match2 = beer99j.match(/[^0-9ァ-ヴぁ-ん。、]+/g);
// console.log(match2);

// const 入力 = "８月３０日ＭＡＺ昨年四月三〇日。";
// let マッチ = 入力.match(/[０-９]/g);
// console.log(マッチ);
// マッチ = 入力.match(/[０-９]/);
// console.log(マッチ);
// マッチ = 入力.match(/[Ａ-Ｚ]/g);
// console.log(マッチ);
// マッチ = 入力.match(/[〇一二三四五六七八九]/g);
// console.log(マッチ);
// マッチ = 入力.match(/[年月日]/g);
// console.log(マッチ);

// const tShirts = 'Small:     9\n' + 'Medium:     5\n' + 'Large:     2\n';
// const numbers = tShirts.match(/:\s*[0-9]/g);
// console.log(numbers);

// const phoneNumber1 = "(0296)99-9876";
// const phoneNumber2 = "0296-99-9876";
// console.log(phoneNumber1.replace(/\D/g, ''));
// console.log(phoneNumber2.replace(/\D/g, ''));

// const field1 = '  x  ';
// const field2 = '　\t  ';
// console.log(/\S/.test(field1));
// console.log(/\S/.test(field2));

// const beer99 = "99 bottles of beer on the wall" + "take 1 down and pass it around -- " + "98 bottles of beer on the wall.";
// const matches = beer99.match(/[0-9]+/g);
// console.log(matches);

// const input = "Address: 333 Main St., Anywhere, NY, 55332.  Phone: 555-555-2525.";
// const match = input.match(/.*\d{5}/);
// console.log(match[0]);

// const equation = "(2 + 3.5) * 7";
// const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
// console.log(match2[0]);

// const beer99 = "99 bottles of beer on the wall\n" + "take 1 down and pass it around -- \n" + "98 bottles of beer on the wall.\n";
// const match3 = beer99.match(/[\s\S]*/);
// console.log(match3[0] === beer99);

// const text = "Visit oreilly.com today!";
// const match = text.match(/[a-z0-9]+(?:\.com|\.org|\.edu)/ig);
// console.log(match);

// const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
//              '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' + 
//              '<link rel="stylesheet" href="http://anything.com/flexible.css">';
// const matches = html.match(/(?:https?:)?\/\/[a-z0-9][a-z0-9.-]+[a-z0-9]+/ig);
// console.log(matches);

// const input = "Regex pros know the difference between\n" + "<i>greedy</i> and <i>lazy</i> matching.";
// const output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
// console.log(output);

// const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
// console.log(output2);

// const html = `<img alt='A "simple" example.'>` + `<img alt="Don't abuse it!">`;
// const imageTags = html.match(/<img alt=(['"]).*?\1>/g);
// for(let i = 0; imageTags && i < imageTags.length; i++) {
//     console.log(imageTags[i]);
// }

// let chap2 = "第2章　初めてのJavaScriptアプリ\n" +
//             "第1章では、JavaScriptの開発環境について説明しました。...\n" +
//             "詳しくは第23章を参照してください。...\n" +
//             "第3章では変数や定数について説明します。";
// chap2 = chap2.replace(/第(\d+)章/g, '$1章');
// console.log(chap2);

// let html = '<a class="abc" href="/www.xxx.yyy" id="lmn">xxxのサイト</a>';
// html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
// console.log(html);

// let html1 = `<a class='abc' href="/www.xx.yyy">サイトxx</a>`;
// let html2 = `<a class='abc' href='/www.xx.yyy'>サイトxx</a>`;

// r = html1.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
// console.log(r);
// r = html2.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
// console.log(r);

// let html1 = `<a class='abc' id="s" href="/www.xx.yyy">サイトxx</a>`;
// r = html1.replace(/<a .*?(class=(["']).*?\2) .*?(href=(["']).*?\4).*?>/, '<a $3 $1>');
// console.log(r);

// const input = "One two three";
// let r = input.replace(/two/, '($`)');
// console.log(r);
// r = input.replace(/\w+/g, '($&)');
// console.log(r);
// r = input.replace(/two/, "($')");
// console.log(r);
// r = input.replace(/two/, "($$)");
// console.log(r);

// const html = `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
//              `<a href='/foo' Class="foo">Foo</a>\n` +
//              `<a href="/foo">Foo</a>\n` +
//              `<a onclick="javascript:alert('foo!)" href="/foo">Foo</a>`;

// const html = `〇〇<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;
// console.log(sanitizeATag(html));

// function sanitizeATag(aTag) {
//     const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
//     const attributes = parts[1].split(/\s+/);
//     return '<a ' + attributes.filter(attr => /^(?:class|id|href)[\s=]/i.test(attr)).join(' ') + '>' + parts[2] + '</a>';
// }

// const html = `〇〇<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;

// html.replace(/<a .*?>(.*?)<\/a>/ig, function(match, group1, offset, origin) {
//     console.log(`<a>タグが${offset+1}文字目から見つかった`);
//     console.log(`リンクの対象文字列は[${group1}]`);
//     console.log(`元々の文字列は[${origin}]`);
//     console.log(`マッチしたのは[${match}]`);
// });

// const html = `〇〇<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;
// const r = html.replace(/<a .*?<\/a>/ig, function(m) {
//     return sanitizeATag(m);
// });

// console.log(r);

// const html = `〇〇<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;
// const r = html.replace(/<a .*?<\/a>/ig, sanitizeATag);

// console.log(r);

// const input = "It was the best of times, it was worst of times";
// const beginning = input.match(/^\w+/);
// console.log(beginning[0]);
// const end = input.match(/\w+$/);
// console.log(end[0]);
// const evetything = input.match(/^.*$/);
// console.log(evetything[0]);
// const nomatch1 = input.match(/^best/i);
// console.log(nomatch1);
// const nomatch2 = input.match(/worst$/i);
// console.log(nomatch2);

// const input2 = "あの頃は最高だったな～。まあ、あの頃は最悪でもあったな～。";
// const beginning2 = input2.match(/^.*?[はが]/);
// console.log(beginning2[0]);
// const end2 = input2.match(/[^。]+。$/);
// console.log(end2[0]);

