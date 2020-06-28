'use strict';

// Использования rest-параметра при работе с массивом элементов
// function test(a, b, c, ...arr) {
//   // const arg = Array.prototype.slice.call(arguments);
//   // console.log('arg: ', arg);
//   console.log(a, b, c);
//   console.log(arr);
// }

// test('red', 5, 12, 'black', [], true, 9);

// const arr = ['red', 5, 12],
//       arr2 = ['black', true];

// function test(a, b, c, d, e, f) {
//   console.log(a, b, c);
//   console.log(d, e, f);
// }

// Использование spread-оператора
// test(arr);
// test(arr[0], arr[1], arr[2]);
// test(...arr, 50, ...arr2);

// const arr = ['red', 5, 12],
//       arr2 = ['black', true];

// const arr3 = [1, ...arr, 55, ...arr2, 'hi'];
// console.log('arr3: ', arr3);

// Пример преобразования коллекции элементов в массив используя spread-оператор
// const allImg = document.querySelectorAll('img');
// console.log(allImg);
// const newImg = [...allImg];
// console.log(allImg);

// Деструктуризация
// const car = {
//   brand: 'mazda',
//   model: 3,
//   color: 'red'
// };

// // const brand = car.brand,
// //       model = car.model,
// //       color = car.color;
// // console.log(brand, model, color);

// // Пример деструктуризации объекта
// const {brand, model, color} = car;
// console.log(brand, model, color);

// const car = {
//   brand: 'mazda',
//   model: 3,
//   options: {
//     color: 'red',
//     abs: true
//   }  
// };

// const {options:{color, abs}} = car;
// console.log(color, abs);
// Указываем переменным собственные имена
// const {options:{color : carColor, abs : carABS}} = car;
// console.log(carColor, carABS);

// Пример добавления своих свойств в объект
// const car = {
//   brand: 'mazda',
// };

// const {brand, model = 6} = car;
// console.log(brand, model);
// // С вложенными свойствами немного сложнее
// const {options: {color = 'red'} = {}} = car;
// console.log(color);

// const createCar = (car) => {
//   console.log(`
//   Запущено производство автомобиля ${car.brand} ${car.model}
//   цвет кузова: ${car.color}
//   цвет салона: ${car.colorInt}`);
// };

// createCar({
//   brand: 'mazda',
//   model: 3,
//   color: 'blue',
//   colorInt: 'black'
// });

// const createCar = ({brand = 'bmw', model = 6, color = 'black', colorInt}) => {
//   console.log(`
//   Запущено производство автомобиля ${brand} ${model}
//   цвет кузова: ${color}
//   цвет салона: ${colorInt}`);
// };
// createCar({
//   model: 3,
//   colorInt: 'black'
// });

// const createCar = ({brand = 'bmw', model = 6, color = 'black', colorInt} = {}) => {
//   console.log(`
//   Запущено производство автомобиля ${brand} ${model}
//   цвет кузова: ${color}`);
// };
// createCar();

// const car = {
//   brand: 'mazda',
//   model: 3,
//   options: {
//     color: 'red',
//     abs: true
//   }  
// };
// const {brand, ...options} = car;
// console.log(options);

// const cars = ['VAZ', 'mazda', 'BMW', 'audi', 'mercedes'];
// const [,a,, b, c] = cars;
// console.log(a);
// console.log(b);
// console.log(c);

// const cars = [['VAZ', 'mazda'], ['BMW', 'audi']];
// const [[a, b], [...c], e = 'opel'] = cars;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);

// const carsModel = {
//   brand: 'Volvo',
//   models: {
//     sedan: ['s60', 's90'],
//     cross: ['v60', 'v90']
//   }
// };
// const {models: {sedan: [s1, s2], cross: [c1, c2]}} = carsModel;
// console.log(s1, s2, c1, c2);

// Старый вариант присваивания объекту заначений переменных
// const car = 'Niva',
//       cycle = 'bmx',
//       bike = 'honda';
// const transport = {
//   car: car,
//   cycle: cycle,
//   bike: bike,
//   ride: function() {
//     console.log('Go!');
//   }
// };
// console.log(transport);

// Новый вариант
// const car = 'Niva',
//       cycle = 'bmx',
//       bike = 'honda';
// const transport = {car, cycle, bike, ride() {
//   console.log("Go!");
// }};
// console.log(transport);
// console.log(transport.ride());

// Метод assing
// const transport = {
//   bike: 'honda',
//   car: 'bentley',
//   cycle: 'bmx'
// };
// const newTransport = {
//   bike:'suzuki',
//   quadBike: 'polaris' 
// };
// // Object.assign(transport, newTransport);
// // console.log(transport);
// const newTransport2 = {
//   bike: 'ducati'
// };
// const currentTransport = Object.assign({}, transport, newTransport, newTransport2);
// console.log('currentTransport: ', currentTransport);
// // Создание копии объекта
// const currentTransport2 = Object.assign({}, transport);
// console.log('currentTransport2: ', currentTransport2);
// const ship = 'Titanic';
// const currentTransport3 = {...transport, ...newTransport, ...newTransport2, ship};
// console.log('currentTransport3: ', currentTransport3);
// // Также есть возможность добавлять методы прямо в создающийся объект
// const currentTransport4 = {...transport, ...newTransport, ride(){console.log('Go!');}};
// console.log('currentTransport4: ', currentTransport4);
// currentTransport4.ride();

// Коллекции Map и Set
// const obj = {
//   a: 5,
//   b: 10
// };
// console.log(obj);
// // Определить длиннну объекта напрямую нельзя, прииходиться использовать костыль
// console.log(Object.keys(obj).length);

// // Для облегчения работы с объектом можно использовать класс Map
// // Ключом может быть не только строка, но и любое произвольное значение
// // const map = new Map();
// // Данные по умолчанию можно передавать в коллекцию в виде массива
// const map = new Map([
//   [2020, 'sunner'],
//   ['joker', 1]
// ]);
// // map.set('car', {brand: 'mazda', model: 3});
// // map.set(777, 'три топора');
// // map.set(null, 'даже так');
// // map.set(NaN, 'Ух ты');
// // map.set(undefined, 'неожиданно');
// // const obj = {
// //   name: 'Vetal',
// //   age: 30
// // };
// // map.set(obj, 123);
// // const func = () => {
// //   console.log('Hello');
// // };
// // map.set(func, 'awesome');
// // map.set(false, true);

// // console.log(map);
// // Методы set можно вызывать  друг за другом
// map.set('car', {brand: 'mazda', model: 3})
//     .set(777, 'три топора')
//     .set(null, 'даже так')
//     .set(NaN, 'Ух ты')
//     .set(undefined, 'неожиданно');
// const obj = {
//   name: 'Vetal',
//   age: 30
// };
// const func = () => {
//   console.log('Hello');
// };
// map.set(obj, 123)
//   .set(func, 'awesome')
//   .set(false, true);

// console.log(map);
// console.log(map.get(func));
// console.log(map.get(undefined));
// // Для проверки наличия ключа используем метод has
// console.log(map.has(null));
// // Для определения длинны используем метод size
// console.log(map.size);

// const collectMap = new Map([
//   ['hello', 'world'],
//   ['year', 1812]
// ]);

// // Для удаления по свойству используем метод delete
// collectMap.delete('year');
// // Для удаления всех элементов используем метод clear
// collectMap.clear();
// console.log(collectMap);

// // Для получения массива из объекта используем метод Array.from
// const arr = Array.from(map);
// console.log(arr);

// // Для перебора коллекции можно использовать forEach или цикл for of
// map.forEach((value, key) => {
//   console.log(`key: ${key} value: ${value}`);
// });
// for (let [key, value] of map) {
//   console.log(`key: ${key} value: ${value}`);
// }

// // Коллекция Set
// const cars = new Set();

// // cars.add('Niva');
// // cars.add('Volvo');
// // cars.add('BMW');
// // cars.add('Niva');
// // cars.add('Volvo');
// // console.log(cars);
// // console.log(cars.size);

// cars.add('Niva');
// cars.add('Volvo');
// cars.add('BMW');
// cars.add(NaN);
// cars.add(undefined);
// cars.add(null);
// cars.add(() => {});

// console.log(cars);
// console.log(cars.size);
// // Проверить наличие элемента в коллекции поможет метод has
// console.log(cars.has('Niva'));
// // Удаление элемента
// cars.delete('BMW');
// console.log(cars.has('BMW'));
// // Удаление коллекции 
// cars.clear();
// console.log(cars);

// Короткий синтаксис
// const cars = new Set();

// cars.add('Niva')
//     .add('BMW')
//     .add('mazda');
// console.log(cars);
// Можно добавлять при создании массива
const cars = new Set(['Mazda', 'Volvo', 'BMW']);
console.log(cars);
cars.forEach((elem) => {
  console.log(elem);
});
// Применяем деструктуризацию
const [car1, car2] = cars;
console.log('car1: ', car1);
console.log('car2: ', car2);
// Переводим коллекцию в массив с помощью спред оператора
console.log([...cars]);
// Объединение коллекций
const newCars = new Set(['Niva', 'Toyota', 'Volvo']);
const allCars = new Set([...cars, ...newCars]);
console.log('allCars: ', allCars);
// Если значение добавляется, то в новую коллекция оно пропишеться только один раз
