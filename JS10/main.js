// const u1 = {name: '和洋'};
// const u2 = {name: '花子'};
// const u3 = {name: '涼子'};
// const u4 = {name: '哲人'};

// const userRoles = new Map();

// userRoles.set(u1, 'ユーザー');
// userRoles.set(u2, 'ユーザー');
// userRoles.set(u3, '管理者');

// userRoles.set(u1, 'ユーザー').set(u2, 'ユーザー').set(u3, '管理者');

// const userRoles = new Map([
//     [u1, 'ユーザー'],
//     [u2, 'ユーザー'],
//     [u3, '管理者'],
// ]);

// userRoles.get(u2);

// console.log(userRoles.has(u1));
// console.log(userRoles.get(u2));
// console.log(userRoles.has(u4));
// console.log(userRoles.get(u4));

// console.log(userRoles.get(u1));
// userRoles.set(u1, '管理者');
// console.log(userRoles.get(u1));

// console.log(userRoles.size);

// for(let u of userRoles.keys()) {
//     console.log(u.name);
// }

// for(let r of userRoles.values()) {
//     console.log(r);
// }

// for(let ur of userRoles.entries()) {
//     console.log(`${ur[0].name}: ${ur[1]}`);
// }

// for(let [u, r] of userRoles.entries()) {
//     console.log(`${u.name}: ${r}`);
// }

// for(let [u, r] of userRoles) {
//     console.log(`${u.name}: ${r}`);
// }

// console.log(userRoles.values());
// console.log(...userRoles.keys());

// userRoles.delete(u2);
// console.log(userRoles.size);
// console.log([...userRoles.values()]);

// userRoles.clear();
// console.log(userRoles.size);
// console.log([...userRoles.values()]);

// const SelectHolder = (function() {
//     const secrets = new WeakMap();
//     return class {
//         setSecret(secret) {
//             secrets.set(this, secret);
//         }
//         getSecret() {
//             return secrets.get(this);
//         }
//     }
// })();

// const a = new SelectHolder();
// const b = new SelectHolder();

// a.setSecret('秘密A');
// b.setSecret('秘密B');

// console.log(a.getSecret());
// console.log(b.getSecret());

// const roles = new Set();

// roles.add("ユーザー");
// console.log(roles);

// roles.add("管理者");
// console.log(roles);
// console.log(roles.size);

// roles.add("ユーザー");
// console.log(roles);
// console.log(roles.size);

// console.log(roles.delete("管理者"));
// console.log(roles);
// console.log(roles.delete("管理者"));

const naughty = new WeakSet();

const children = [
    {name: "和洋"},
    {name: "哲人"},
];

naughty.add(children[1]);

for(let child of children) {
    if(naughty.has(child)) {
        console.log(`${child.name}君には石炭をあげる！`);
    }
    else {
        console.log(`${child.name}君にはプレゼントをあげる！`);
    }
}