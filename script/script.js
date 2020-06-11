'use strict';

let money = +prompt('Ваш месячный доход?', 30000),
    income = 2000,    
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),    
    mission = 100000,    
    period = 6,
    budgetDay;

// console.log('money: ', money);

let showTypeOf = function(data) {
  console.log(`${data}: `, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1, expenses2, amount1, amount2;
  expenses1 = prompt('Введите обязательную статью расходов #1?', 'food');
  amount1 = +prompt('Во сколько это обойдется?', 2500);
  expenses2 = prompt('Введите обязательную статью расходов #2?', 'apartment');
  amount2 = +prompt('Во сколько это обойдется?', 2500);

let getExpensesMonth = function() {  
  return amount1 + amount2;
};
console.log('Расходы за месяц: ', getExpensesMonth());

// console.log('Длина стороки addExpenses: ', addExpenses.length);
let arrExpenses = addExpenses.toLowerCase().split(', ');
console.log('Вывод возможных расходов в виде массива: ', arrExpenses);

let accumulatedMonth = getAccumulatedMonth(getExpensesMonth);
// console.log('Бюджет на месяц: ', accumulatedMonth);

function getAccumulatedMonth(data) {
  return (money + income) - data();
}

period = getTargetMonth();
console.log('Цель будет достигнута через: ' + period + ' месяцев');

budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ', budgetDay);

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}

let getStatusIncome = function() {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода!');
  } else if ((budgetDay < 1200) && (budgetDay >= 600)) {
    return ('У вас средний уровень дохода.');
  } else if ((budgetDay < 600) && (budgetDay >= 0)) {
    return ('К сожалению у вас уровень дохода ниже среднего.');
  } else {
    return ('Что то пошло не так...');
  }
}

console.log(getStatusIncome());