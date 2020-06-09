'use strict';

let money,
    income = 2000,    
    addExpenses,
    deposit,    
    mission = 100000,    
    period = 6,
    budgetDay;

money = +prompt('Ваш месячный доход?');
console.log('money: ', money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses: ', addExpenses);

let questionDeposit = prompt('Есть ли у вас депозит в банке?').toLowerCase();
switch (questionDeposit) {
  case ('да') :
    deposit = true;
    break;
  case ('нет') :
    deposit = false;
    break;
  default :
    console.log('Ваш ответ не понятен. В поле для ввода укажите да или нет');
    deposit = null;
    break;
}

console.log('Выводим типы данных для переменных: ');
console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);

console.log('Длина стороки addExpenses: ', addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log('Строка addExpenses приведена к нижнему регистру: ', addExpenses.toLowerCase());
let arrExpenses = addExpenses.toLowerCase().split(', ');
console.log('Разбиваем строку addExpenses на массив: ', arrExpenses);

let expenses1, expenses2, amount1, amount2, budgetMonth;
expenses1 = prompt('Введите обязательную статью расходов #1?');
amount1 = +prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов #2?');
amount2 = +prompt('Во сколько это обойдется?');

budgetMonth = (money + income) - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth);

period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута через: ' + period + ' месяцев');

budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ', budgetDay);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода!');
} else if ((budgetDay < 1200) && (budgetDay >= 600)) {
  console.log('У вас средний уровень дохода.');
} else if ((budgetDay < 600) && (budgetDay >= 0)) {
  console.log('К сожалению у вас уровень дохода ниже среднего.');
} else {
  console.log('Что то пошло не так...');
}