'use strict';

let date = new Date(),
    weekDay = date.getDay(),
    hoursNow = date.getHours(),
    newElem = document.createElement('div'),
    newElem2 = document.createElement('div'),
    newElem3 = document.createElement('div');

if (hoursNow > 3 && hoursNow <= 9) {
  newElem.innerHTML = 'Доброе утро';
  document.body.append(newElem);
} else if (hoursNow > 9 && hoursNow <= 15) {
  newElem.innerHTML = 'Добрый день';
  document.body.append(newElem);
} else if (hoursNow > 15 && hoursNow <= 21) {
  newElem.innerHTML = 'Добрый вечер';
  document.body.append(newElem);
} else if ((hoursNow > 21 && hoursNow <= 24) || (hoursNow >= 0 && hoursNow <= 3)) {
  newElem.innerHTML = 'Доброй ночи';
  document.body.append(newElem);
}

switch (weekDay) {
  case 0: newElem2.innerHTML = 'Сегодня: Воскресенье';
          document.body.append(newElem2);
          break;
  case 1: newElem2.innerHTML = 'Сегодня: Понедельник';
          document.body.append(newElem2);
          break;
  case 2: newElem2.innerHTML = 'Сегодня: Вторник';
          document.body.append(newElem2);
          break;
  case 3: newElem2.innerHTML = 'Сегодня: Среда';
          document.body.append(newElem2);
          break;
  case 4: newElem2.innerHTML = 'Сегодня: Четверг';
          document.body.append(newElem2);
          break;
  case 5: newElem2.innerHTML = 'Сегодня: Пятница';
          document.body.append(newElem2);
          break;
  case 6: newElem2.innerHTML = 'Сегодня: Суббота';
          document.body.append(newElem2);
          break;
  default: newElem2.innerHTML = 'Ошибка! День недели определить не удалось!';
          document.body.append(newElem2);
          break;
}

newElem3.innerHTML = `Текущее время: ${date.toLocaleTimeString('en')}`;
document.body.append(newElem3);

function countTimer(deadline) {
  let dateStop = new Date(deadline).getTime(),  
      dateNow = date.getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      days = Math.floor(timeRemaining / 3600 / 24),
      newElem4 = document.createElement('div');

  newElem4.innerHTML = `До нового года осталось ${days} дней`;
  document.body.append(newElem4);
}

countTimer('01 january 2021');