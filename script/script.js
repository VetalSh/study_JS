'use strict';

// let car = {
//   doors: 4,
//   turbocharging: false,
//   ride: function() {
//     console.log('Car ride');
//   }
// };

// let newCar = Object.create(car);

// newCar.model = 'mazda 3';

// console.log(newCar.doors);
// console.log(newCar.hasOwnProperty('model'));
// console.log(newCar.__proto__.hasOwnProperty('doors'));
// console.log(car.isPrototypeOf(newCar));

function Car(brand, model, options) {
  this.brand = brand;
  this.model = model;
  options = options || {};
  this.color = options.color;
  this.transmission = options.transmission;
}

Car.prototype.ride = function() {
  console.log(this.brand + ' ' + this.model + ' is ride!');
}

let car1 = new Car('Mazda', '3', {color: 'blue'});
console.log('car1: ', car1);
let car2 = new Car('VAZ', 'Niva', {ABS: false});
console.log('car2: ', car2);

car1.ride();
car2.ride();

console.log(Car.prototype.isPrototypeOf(car1));
console.log(car2 instanceof Car);

console.log(car1.ride === car2.ride);
console.log('car1: ', car1);

function DomElement(selector) {
  this.selector = selector;
  this.height;
  this.width;
  this.bg;
  this.fontSize;
}

DomElement.prototype.createElem = function() {
  console.log('createElem: ', this.selector);
};

let elem1 = new DomElement();

elem1.createElem();

