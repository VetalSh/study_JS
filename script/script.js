'use strict';

const books = document.querySelector('.books'),
      book = document.querySelectorAll('.book'),
      adv = document.querySelector('.adv'),
      body = document.getElementsByTagName('body')[0],
      a = document.getElementsByTagName('a'),
      ul = document.getElementsByTagName('ul'),
      li = document.getElementsByTagName('li');

      // console.log('books: ', books);
      // console.log('book: ', book);
  adv.remove();
  books.append(book[2]);
  books.prepend(book[1]);
  book[3].before(book[4]);
  body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
  a[2].textContent = "Книга 3. this и Прототипы Объектов";

  // console.log(ul[4], li[10]);
  li[10].before(li[12]);
  li[11].before(li[14]);
  // console.log(li[8], li[15]);
  li[15].after(li[8]);
  // console.log(li[38], li[45]);
  li[40].after(li[38]);
  li[38].before(li[45]);
  li[44].after(li[42]);
  // console.log(li[56]);
  li[56].insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>');