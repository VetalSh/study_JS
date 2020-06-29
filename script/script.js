'use strict';

const number = [54, 20, 80, -35, 32, 29, 15],
      names = ['vladiMir', 'Mark', 'Logan', 'Victor', 'maks', 'Kate', 'Alex'],
      mix = ['Glo', 25, true, 'Academy', '15', -2, null],
      badNum = [45, 20, 74, -35, 'hi', 32, 29, 5];

// // Перебор массива с помощью цикла for
// for ( let i = 0; i < mix.length; i++) {
//   console.log(mix[i]);
// }
// // Перебор массива с помощью цикла for in (Больше подходит для объектовб чем для массивов)
// for (let index in mix) {
//   console.log(mix[index]);
// }
// // Перебор массива с помощью цикла for of
// for (let elem of mix) {
//   console.log(elem);
// }
// // Перебор массива с помощью цикла forEach (есть возможность обращаться к контексту вызова)
// mix.forEach(function(item, index, arr) {
//   console.table({item, index, arr});
//   console.log(this);
// }, number);
// mix.forEach( item => console.log(item));

// // Дальше пойдут методы, которые помимо перебора возвращают значения
// // Исправляем в массиве с именами первую букву - большую, остальные буквы маленькие 
// for ( let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
// }
// console.log(names);
// names.forEach(function(item, i, arr) {
//   arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(names);
// Используем метод map() . Не меняя исходный массив возвращаем новый исправленный массив
// Если массив будет задан через let, то вместо нового массива может перезаписать текущий
// const correctName = names.map(function(item){
//   return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// const correctName = names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
// console.log(names);
// console.log(correctName);

// // Убираем из массива ненужные значения
// let forWords = [];
// for ( let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === 'string' && isNaN(mix[i])) {
//     forWords.push(mix[i]);
//   }
// }
// console.log(forWords);
// // Метод filter()
// let filterWords = mix.filter(item => typeof item === 'string' && isNaN(item));
// console.log(filterWords);
// filterWords = mix.filter(item => 1);
// console.log(filterWords);
// filterWords = mix.filter(item => 0);
// console.log(filterWords);
// let positiveNumbers = number.filter((item) => item > 0);
// console.log('positiveNumbers: ', positiveNumbers);
// // Проверяем есть ли в массиве числа
// let result = false;
// for ( let i =0; i < mix.length; i++) {
//   if(typeof mix[i] === 'number') {
//     result = true;
//     break;
//   }
// }
// console.log(result);
// // Тоже с помощью метода some()
// let result2 = mix.some(function(item) {
//   return typeof item === 'number';
// });
// console.log(result2);
// // Проверка на элементы кроме чисел
// let result3 = number.some(function(item) {
//   return typeof item !== 'number';
// });
// console.log(result3);
// // Проверка всех элементов на тип данных число с помощью метода every()
// let result4 = number.every(function(item) {
//   return typeof item === 'number';
// });
// console.log(result4);
// result4 = badNum.every(function(item) {
//   return typeof item === 'number';
// });
// console.log(result4);
// // Для аккамулирования результата вычислений используем метод reduce()
// // в аккамуллятор в зависимости от задачи можно передать свое число, а не 0
// let sum2 = number.reduce(function(accumulator, item) {
//   console.table({accumulator, item});
//   return accumulator + item;
// }, 0);
// console.log(sum2);
// // эта же задача с помощью цикла for()
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += number[i];
// }
// console.log(sum);
// // Метод reduceRight() перебирает элементы в обратном порядке
// let sum3 = number.reduceRight(function(accumulator, item) {
//   console.table({accumulator, item});
//   return accumulator + item;
// }, 0);
// console.log(sum3);
// // Перебираем двухмерный массив и сохраняем его в одномерный с помощью метода concat()
// const arr = [[1, 2], [3, 4], [5,6]];
// const res = arr.reduce((acc, item) => acc.concat(item), []);
// console.log(res);
// const res2 = arr.reduceRight((acc, item) => acc.concat(item));
// console.log(res2);

// Получение данных со строки JSON
// В таком формате часто данные приходят с сервера
// для получения данных используем функцию fetch(), а с помощью метода then() преобразуем данные в объект
// fetch('./dbHeroes.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// function practice(response) {
//   let allHeroes = [];
//   // С помощью метода map()
//   allHeroes = response.map(item => item.name);
//   // С помощью метода forEach()
//   response.forEach(item => allHeroes.push(item.name));
//   console.log(allHeroes);
// }