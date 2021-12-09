$(document).ready(function() {
    'use strict';
    console.log('main.jsを読み込み中');
    
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    //ここで描画する\\\
    let tool = new Tool();

    //Hello World
    let c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    let text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.content = 'Hello World!';



    tool.onMouseDown = function(event) {
        let c = Shape.Circle(event.point, 20);
        c.fillColor = 'red';
    }

    paper.view.draw();
});