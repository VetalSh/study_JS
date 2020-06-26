'use strict';

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

  document.body.append(newElem);  
};

let elem1 = new DomElement('.header', 50, 500, 'red', 20),
    elem2 = new DomElement('#description', 50, 1000, 'yellow', 14);

elem1.createElem();
elem2.createElem();