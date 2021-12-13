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

// const Car = (function() {
//     const carProps = new WeakMap();
//
//     class Car {
//         constructor(make, model) {
//             this.make = make;
//             this.model = model;
//             this._userGears = ['P', 'N', 'R', 'D'];
//             carProps.set(this, { userGear: this._userGears[0] });
//         }
//
//         get userGear() { return carProps.get(this).userGear; }
//         set userGear(value) {
//             if(this._userGears.indexOf(value) < 0) {
//                 throw new Error(`ギア指定が正しくない : ${value}`);
//             }
//             carProps.get(this).userGear = value;
//         }
//
//         shift(gear) { this.userGear = gear; }
//     }
//
//     return Car;
// })();
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


// const car1 = new Car();
// const car2 = new Car();
// console.log(car1.shift === Car.prototype.shift);
// console.log(car1.shift === car2.shift);
// car1.shift('D');
// // car1.shift('d');
// console.log(car1.userGear);
//
// car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
// console.log(car1.shift === Car.prototype.shift);
// console.log(car1.shift === car2.shift);
// car1.shift('d');
// console.log(car1.userGear);
// class Car {
//     toString() {
//         return `${this.make} ${this.model}: ${this.vin}`;
//     }
//     static getNextVin() {
//         return Car.nextVin++;
//     }
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.vin = Car.getNextVin();
//     }
//     static areSimilar(car1, car2) {
//         return car1.make === car2.make && car1.model === car2.model;
//     }
//     static areSame(car1, car2) {
//         return car1.vin === car2.vin;
//     }
// }
// Car.nextVin = 0;

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// const car3 = new Car("Mazda", "3i");
//
// console.log(car1.vin);
// console.log(car2.vin);
// console.log(car3.vin);
//
//
// console.log(Car.areSimilar(car1, car2));
// console.log(Car.areSimilar(car2, car3));
// console.log(Car.areSame(car2, car3));
// console.log(Car.areSame(car2, car2));

// class Vehicle {
//     constructor()  {
//         this.passengers = [];
//         console.log("Vehicleが生成された");
//     }
//     addPassenger(p) {
//         this.passengers.push(p);
//     }
// }
//
// class Car extends Vehicle {
//     constructor() {
//         super();
//         console.log("Carが生成された");
//     }
//     deployAirbags() {
//         console.log("バーン！");
//     }
// }

// const v = new Vehicle();
// v.addPassenger("太郎");
// v.addPassenger("花子");
// console.log(v.passengers);
//
// const c = new Car();
// c.addPassenger("恵子");
// c.addPassenger("緑");
// console.log(c.passengers);
// c.deployAirbags();

// class Motorcycle extends Vehicle {}
//
// const c = new Car();
// const m = new Motorcycle();
// console.log(c instanceof Car);
// console.log(c instanceof Vehicle);
// console.log(m instanceof Motorcycle);
// console.log(m instanceof Vehicle);

// class Super {
//     constructor() {
//         this.name = 'Super';
//         this.isSuper = true;
//     }
// }
//
// Super.prototype.sneaky = '非推奨！';
//
// class Sub extends Super {
//     constructor() {
//         super();
//         this.name = 'Sub';
//         this.isSub = true;
//     }
// }
//
// const obj = new Sub();
//
// for(let p in obj) {
//     console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (継承)'));
// }

// const car1 = new Car("Tesla", "Model S");
// console.log(car1.toString());

class Car {
    constructor() {
    }
}

class InsurancePolicy {
}
//
// function makeInsurable(o) {
//     o.addInsurancePolicy = function(p) { this.insurancePolicy = p;}
//     o.getInsurancePolicy = function() { return this.insurancePolicy; }
//     o.isInsured = function() { return !!this.insurancePolicy; }
// }
//
// makeInsurable(Car.prototype);
// const car1 = new Car();
// makeInsurable(car1);
// console.log(car1.isInsured());
// car1.addInsurancePolicy(new InsurancePolicy());
// console.log(car1.isInsured());
//
// const car2 = new Car();
// console.log(car2.isInsured());
// car2.addInsurancePolicy(new InsurancePolicy());
// console.log(car2.isInsured());

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
    o[ADD_POLICY] = function(p) {this[_POLICY] = p;}
    o[GET_POLICY] = function() {return this[_POLICY]; }
    o[IS_INSURED] = function() {return !!this[_POLICY]; }
}

makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1[IS_INSURED]());
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1[IS_INSURED]());

const car2 = new Car();
console.log(car2[IS_INSURED]());
car2[ADD_POLICY](new InsurancePolicy());
console.log(car2[IS_INSURED]());