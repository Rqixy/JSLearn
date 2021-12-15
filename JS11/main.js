// const err = new Error('メールの形式が正しくありません');

// function validateEmail(email) {
//     return email.match(/@/) ? email : new Error(`無効なメールアドレスです：${email}`);
// }
// const email = "jane@document.com";

// const validatedEmail = validateEmail(email);
// if(validatedEmail instanceof Error) {
//     console.error(validatedEmail.message);
// }
// else {
//     console.log(`正しい形式のメールアドレスです：${validatedEmail}`);
// }

// const email = null;

// try {
//     const validatedEmail = validateEmail(email);
//     console.log(validatedEmail);
//     if(validatedEmail instanceof Error) {
//         console.error(validatedEmail.message);
//     }else {
//         console.log(`正しい形式のメールアドレスです：${validatedEmail}`);
//     }
// }catch(err) {
//     console.error(`エラー：${err.message}`);
// }

// function billPay(amount, payee, account) {
//     if(amount > account.balance) {
//         throw new Error("残高不足");
//     }
//     account.transfer(payee, amount);
// }

// function a() {
//     console.log('a: bを呼び出す前');
//     b();
//     console.log('a: 終了');
// }

// function b() {
//     console.log('b: cを呼び出す前');
//     c();
//     console.log('b: 終了');
// }

// function c() {
//     console.log('c: エラーをスローする');
//     throw new Error('c Error');
//     console.log('c: 終了');
// }

// function d() {
//     console.log('d: cを呼び出す前');
//     c();
//     console.log('d: 終了');
// }

// try{
//     a();
// }catch(err) {
//     console.log("-----a呼び出し後のerr.stack-----");
//     console.log(err.stack);
//     console.log("-----終わり-----");
// }

// try {
//     d();
// }catch(err) {
//     console.log("-----d呼び出し後のerr.stack-----");
//     console.log(err.stack);
//     console.log("-----終わり-----");
// }

// try {
//     console.log("1行目実行中...")
//     // throw new Error("エラー１");
//     console.log("throw が実行されると、この行は実行されない");
// }catch(err) {
//     console.log("エラーが起こった");
// }finally {
//     console.log("finallyの中はいつも実行される");
//     console.log("リソースの解放をここで行う");
// }