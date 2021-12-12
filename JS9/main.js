// const SYM = Symbol();
// const o = {a: 1, b: 2, c: 3, [SYM]: 4};
// for(let prop in o){
//     if(!o.hasOwnProperty(prop)) continue;
//     console.log(`${prop}: ${o[prop]}`);
// }

// const o2 = {a: 1, b: 2, c: 3, SYM: 4};
// console.log(o2.SYM);
// console.log(o2["SYM"]);
// console.log(o2[SYM]);

// const o3 = {a: 1, b: 2, c: 3};
// o3[SYM] = 4;
// console.log(o3.SYM);
// console.log(o3["SYM"]);
// console.log(o3[SYM]);

// const SYM = Symbol();
// const o = {a: 1, b: 2, c: 3, [SYM]: 4};
// const propArray = Object.keys(o);
// console.log(propArray);
// console.log("------------");
// propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`));

// const o = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};

// Object.keys(o).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o[prop]}`));

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.userGears = ['P', 'N', 'R', 'D'];
//         this.userGear = this.userGears[0];
//     }
//     shift(gear) {
//         if(this.userGears.indexOf(gear) < 0)
//             throw new Error(`ギア指定が正しくない：${gear}`);
//         this.userGear = gear;
//     }
// }

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// console.log(car1);
// console.log(car2);

// car1.shift('D');
// car2.shift('R');

// console.log(car1.userGear);
// console.log(car2.userGear);

// console.log(car1 instanceof Car);
// console.log(car2 instanceof Car);
// console.log(car1 instanceof Array);

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this._userGears = ['P', 'N', 'R', 'D'];
//         this._userGear = this._userGears[0];
//     }

//     get userGear() { return this._userGear; }
//     set userGear(value) {
//         if(this._userGears.indexOf(value) < 0 ){
//             throw new Error(`ギア指定が正しくない: ${value}`);
//         }
//         this._userGear = value;
//     }

//     shift(gear) { this.userGear = gear; }

// }

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");

// console.log(car1);
// console.log(car2);

// car1.shift('D');
// car2.shift('R');

// console.log(car1.userGear);
// console.log(car2.userGear);

// car1.userGear = "R";

// console.log(car1.userGear);

const Car = (function() {
    const carProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }

        get userGear() { return carProps.get(this).userGear; }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0) {
                throw new Error(`ギア指定が正しくない : ${value}`);
            }
            carProps.get(this).userGear = value;
        }

        shift(gear) { this.userGear = gear; }
    }

    return Car;
})();
//
// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// console.log(car1);
// console.log(car2);
//
// car1.shift('D');
// car2.shift('R');
//
// console.log(car1.userGear);
// console.log(car2.userGear);

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this._userGears[0];
// }

// class Es2015Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this._userGears = ['P', 'N', 'R', 'D'];
//         this._userGear = this._userGears[0];
//     }
//
//     get userGear() { return this._userGear; }
//     set userGear(value) {
//         if(this._userGears.indexOf(value) < 0) {
//             throw new Error(`ギア指定が正しくない : ${value}`);
//         }
//         this._userGear = value
//     }
//
//     shift(gear) { this.userGear = gear; }
// }
//
// function EsCar(make, model) {
//     this.make = make;
//     this.model = model;
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this.userGears[0];
// }
//
// console.log(typeof Es2015Car);
// console.log(typeof EsCar);


const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('D');
// car1.shift('d');
console.log(car1.userGear);

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('d');
console.log(car1.userGear);