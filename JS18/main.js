// console.log(document instanceof Node);
// console.log(document.parentNode);
// console.log(document.childNodes);
// console.log(document.nodeType);
// console.log(document.nodeName);

// const children = document.childNodes;
// console.log("子供の数:" + children.length);
// console.log(children[0]);
// console.log(children[1]);
// console.log(children[1].nodeType);
// console.log(children[2]);

// console.log(Node.ELEMENT_NODE);
// console.log(children[1].nodeType === Node.ELEMENT_NODE);
// console.log(Node.TEXT_NODE);

// function printDOM(node, prefix) {
//     console.log(prefix + node.nodeName);
//     for(let i=0; i<node.childNodes.length; i++) {
//         printDOM(node.childNodes[i], prefix + '     ');
//     }
// }
// printDOM(document, '');

// const paral = document.getElementsByTagName('p')[0];
// console.log(paral.textContent);
// console.log(paral.innerHTML);
// alert('変更します');
// paral.textContent = "HTMLを修正しました。"
// console.log(paral.textContent);
// alert("変更します。");
// paral.innerHTML = "innerHTMLを使った<b>修正後</b>のHTML";
// console.log(paral.innerHTML);

// const body = document.getElementsByTagName('body')[0];
// alert('変更します。');
// body.innerHTML = "<h1>新しい内容</h1>";

// const p1 = document.createElement('p');
// const p2 = document.createElement('p');
// p1.textContent = "この段落は動的に生成されました。";
// p2.textContent = "この段落は動的に生成された2つ目の段落です。";
// const parent = document.getElementById('content');
// const firstChild = parent.childNodes[0]
// alert("変更します。第1段階");
// parent.insertBefore(p1, firstChild);
// alert("変更します。第2段階");
// parent.appendChild(p2);

// function highlightParas(containing) {
//     if(typeof containing === 'string') {
//         containing = new RegExp(`${containing}`);
//     }
//     const paras = document.getElementsByTagName('p');
//     for(let p of paras) {
//         if(!containing.test(p.textContent)) continue;
//         p.classList.add('highlight');
//     }
// }

// // highlightParas('ユニーク');

// function removeParaHighlights() {
//     const paras = document.getElementsByTagName('p');
//     for(let p of paras) {
//         p.classList.remove('highlight');
//     }
// }

// // // alert('クラスを取り除きます');
// // // removeParaHighlights();

// // const highlightActions = document.querySelectorAll('[data-action="highlight"]');

// // console.log(highlightActions[0].dataset);

// const highlightActions = document.querySelectorAll('[data-action="highlight"]');
// for(let a of highlightActions) {
//     a.addEventListener('click', evt=> {
//         evt.preventDefault();
//         highlightParas(a.dataset.containing);
//     });
// }

// const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
// for(let a of removeHighlightActions) {
//     a.addEventListener('click', evt => {
//         evt.preventDefault();
//         removeParaHighlights();
//     });
// }

// function logEvent(handlerName, type, cancel, stop, stopImmediate) {
//     return function(evt) {
//         if(cancel) evt.preventDefault();
//         if(stop) evt.stopPropagation();
//         if(stopImmediate) evt.stopImmediatePropagation();
//         console.log(`${type}: ${handlerName}` + (evt.defaultPrevented ? '(キャンセルされた)' : ''));
//     }
// }

// function addEventLogger(element, type, action) {
//     const capture = type === 'capture';
//     element.addEventListener('click', logEvent(element.tagName, type, action === 'cancel', action === 'stop', action === 'stop!'), capture);
// }

// const body = document.querySelector('body');
// const div = document.querySelector('div');
// const button = document.querySelector('button');

// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture');
// addEventLogger(button, 'bubble');

// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture', 'cancel');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture');
// addEventLogger(button, 'bubble');

// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture', 'cancel');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture', 'stop!');
// addEventLogger(button, 'bubble');

// function refreshServerInfo() {
//     const req = new XMLHttpRequest();
//     req.addEventListener('load', function() {
//         console.log(this.responseText);
//     });
//     req.open('GET', 'http://localhost:7070', true);
//     req.send();
// }

// refreshServerInfo();

function refreshServerInfo() {
    const req = new XMLHttpRequest();
    req.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        const serverInfo = document.querySelector('.serverInfo');

        Object.keys(data).forEach(p => {
            const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
            for(let r of replacements) {
                r.textContent = data[p];
            }
        });
    });
    req.open('GET', 'http://localhost:7070', true);
    req.send();
}

setInterval(refreshServerInfo(), 200);