// $(function() {
    // const $paras = $('p');
    // console.log($paras.length);
    // console.log(typeof $paras);
    // console.log($paras instanceof $);
    // console.log($paras instanceof jQuery);

    // const $newPara = $('<p>新しく生成した段落</p>');

    // $('p').text('全ての段落が、この文字列に変換されました。');
    // $('p').html('<span style="color: red">全ての</span>段落が置換されました。');

    // $('p').eq(2).html('<b>3番目</b>の段落が置換されました。');

    // $('p').remove();

    // $('p').append('<sup>*</sup>');
    // $('p').after('<hr>').before('<hr>');

    // $('<sup>*</sup>').appendTo('p');
    // $('<hr>').insertBefore('p');
    // $('<hr>').insertAfter('p');

    // $('p:odd').css('color', 'red');

    // $('p').after('<hr>').append('<sup>*</sup>').filter(':odd').css('margin-left', '5cm');

    // $('p').after('<hr>').not('.highlight').css('margin-left', '5cm')

    // $('p').before('<hr>').find('.code').css('font-size', '30px');

    // const para2 = $('p').get(1);
    // console.log(`2番目の段落=${para2.innerHTML}`);

    // const paras = $('p').get();
    // for(let i=0; i<paras.length; i++) {
    //     console.log(`${i+1}番目の段落=${paras[i].innerHTML}`);
    // }
// })

$(function() {
    let TimerID = setInterval(refreshServerInfo, 200);

    function refreshServerInfo() {
        const $serverInfo = $('.serverInfo');
        $.get('http://localhost:7070').then(function(data) {
            Object.keys(data).forEach(p => {
                $(`data-replace=${p}`).text(datta[p]);
            });
        },
        function(jqXHR, textStatus, err) {
            const $errorInfo = $('.error');
            console.log('エラーが起こりました');
            $errorInfo.text('エラー：サーバーに接続されません。');
            clearInterval(TimerID);
        }
        );
    }
})