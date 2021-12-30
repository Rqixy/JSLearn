console.log(`現在のディレクトリ：${process.cwd()}`);
process.chdir(__dirname);
console.log(`新しいCWDディレクトリ：${process.cwd()}`);