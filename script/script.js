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

// function Car(brand, model, options) {
//   this.brand = brand;
//   this.model = model;
//   options = options || {};
//   this.color = options.color;
//   this.transmission = options.transmission;
// }

// Car.prototype.ride = function() {
//   console.log(this.brand + ' ' + this.model + ' is ride!');
// }

// let car1 = new Car('Mazda', '3', {color: 'blue'});
// console.log('car1: ', car1);
// let car2 = new Car('VAZ', 'Niva', {ABS: false});
// console.log('car2: ', car2);

// car1.ride();
// car2.ride();

// console.log(Car.prototype.isPrototypeOf(car1));
// console.log(car2 instanceof Car);

// console.log(car1.ride === car2.ride);
// console.log('car1: ', car1);

// function Car(countryBuild, options) {
//   this.countryBuild = countryBuild;
//   options = options || {};
//   this.color = options.color;
//   this.transmission = options.transmission;
// }

// Car.prototype.ride = function() {
//   console.log(this.brand + ' ' + this.model + ' is ride!');
// }

// function Audi(countryBuild, options, model, type) {
//   this.brand = 'Audi';
//   Car.apply(this, arguments);
//   this.model = model;
//   this.type = type;
// }

// Audi.prototype = Object.create(Car.prototype);
// Audi.prototype.constructor = Audi;

// let car_q7 = new Audi('germany', {color: 'red'}, 'Q7', 'S');
// console.log('car_q7: ', car_q7);
// console.log(car_q7 instanceof Audi);
// console.log(car_q7 instanceof Car);
// car_q7.ride();
// console.log(new Object());
// console.log(car_q7 instanceof Object);

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function() {
  let newElem,  
      textElem = prompt('Введите текст элемента: ');

  if (this.selector.charAt(0) === '.') {
    newElem = document.createElement('div');
    let classValue = this.selector.slice(1);
    newElem.classList = classValue;
    newElem.innerHTML = 'создаем div с классом ' + classValue + ' с введенным текстом: ' + textElem;
  } else if (this.selector.charAt(0) === '#') {
    newElem = document.createElement('p');
    let idValue = this.selector.slice(1);
    newElem.id = idValue;
    newElem.innerHTML = 'создаем параграф с id ' + idValue + ' с введенным текстом: ' + textElem;
  } else {
    console.log('Ошибка!!! selector прописан не правильно!!!');
  }

  newElem.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px;
  `;
  // Другой способ задания стилей
  // newElem.style.height = this.height + 'px';
  // newElem.style.width = this.width + 'px';
  // newElem.style.backgroundColor = this.bg;
  // newElem.style.fontSize = this.fontSize + 'px';
  
  document.body.append(newElem);  
};

let elem1 = new DomElement('.header', 50, 500, 'red', 20),
    elem2 = new DomElement('#description', 50, 1000, 'yellow', 14);

elem1.createElem();
elem2.createElem();