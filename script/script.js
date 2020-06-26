'use strict';

// const mazda = {
//   model: 3,
//   year: 2006
// };

// mazda.color = 'blue';
// mazda['color'] = 'blue';

// Object.defineProperty(mazda, 'color', {
//   value: 'blue',
//   writable: true,
//   configurable: true,
//   enumerable: true
// });

// mazda.color = 'blue';
// delete mazda.color;
// for (let key in mazda) {
//   console.log(key, mazda[key]);
// } 
// console.log(mazda);

// const car = {
//   brand: 'mazda',
//   model: 3,
//   year: 2006
// };

// car.color = 'blue';

// Object.defineProperty(car, 'fullTitle', {
//   get: function() {
//     return this.brand + ' ' + this.model;
//   },
//   set: function(val) {
//     this.brand = val;
//   }
// });

// car.fullTitle = 'BMW';

// console.log(car.fullTitle);

// const car = {
//   brand: 'mazda',
//   model: 3,
//   year: 2006,
//   get fullTitle() {
//     return this.brand + ' ' + this.model;
//   },
//   set fullTitle(value) {
//     this.brand = value;
//   }
// };

// car.fullTitle = 'BMW';
// console.log('car.fullTitle: ', car.fullTitle);

class CarWash {
  constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
    this.brand = brand;
    this.model = model;
    this.washed = false;
    this._services = services;
  }

  static noCarBaseModel() {
    return 'none';
  }

  washReady() {
    this.washed = true;
    CarWash.counter++;
    this.report();
  }

  report() {
    console.log(this.brand, this.model, this.washed);
  }

  get services() {
    console.log(this._services);
    return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
  }

  set services(addServices){
    return this._services.push(addServices);
  }
}

class PassCar extends CarWash {
  constructor(brand, model, services, pass = 5) {
    super(brand, model, services);
    this.pass = pass;
  }

  washReady() {
    super.washReady();
    this.reportOffice();
  }

  reportOffice() {
    console.log('На мойке для легковых была помыта машина');
  }
}

CarWash.counter = 0;

const car1 = new CarWash('mazda', 3, ['black tires', 'wax']),
      car2 = new PassCar('VAZ', 'Niva'),
      car3 = new CarWash('BMW', 'X5'),
      car4 = new CarWash('Volvo');

car1.services = 'Протирка стекол';
car2.services = 'Протирка стекол';

car1.washReady();
car2.washReady();

console.log(car1);
console.log(car2);
// console.log(car1.services);
// console.log(car2.services);

// car1.washReady();
// car2.washReady();
// car3.washReady();
// car4.washReady();
// car1.report();
// console.log(car1);
console.log('CarWash.counter: ', CarWash.counter);