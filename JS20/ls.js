// const fs = require('fs');

// fs.readdir(__dirname, function(err, files) {
//     if(err) return console.error('ディレクトリの内容を読み込めません。');
//     console.log(`${__dirname}のファイル一覧`);
//     console.log(files.map(f => '\t' + f).join('\n'));
// });

const exec = require('child_process').exec;

const command = "dir"; //Windowsの場合
// const command = "ls"; //Macの場合

exec(command, function(err, stdout, stderr) {
    if(err) return console.error(`実行エラー：${command}`);
    stdout = stdout.toString();
    console.log(stdout);
    stderr = stderr.toString();
    if(stderr !== '') {
        console.error('error:');
        console.error(stderr);
    }
});