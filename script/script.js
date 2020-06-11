'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 2000,    
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартира, еда, проезд, интернет'),
    deposit = confirm('Есть ли у вас депозит в банке?'),    
    mission = 100000,    
    period = 6,
    budgetDay;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
  money = +money;
};

start();

// console.log('money: ', money);

let showTypeOf = function(data) {
  console.log(`${data}: `, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];
  // expenses1 = prompt('Введите обязательную статью расходов #1?', 'food');
  // amount1 = +prompt('Во сколько это обойдется?', 2500);
  // expenses2 = prompt('Введите обязательную статью расходов #2?', 'apartment');
  // amount2 = +prompt('Во сколько это обойдется?', 2500);

// console.log('Длина стороки addExpenses: ', addExpenses.length);
let arrExpenses = addExpenses.toLowerCase().split(',');
console.log('Вывод возможных расходов в виде массива: ', arrExpenses);

let getExpensesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++){

    expenses[i] = prompt('Введите обязательную статью расходов?', 'food');

    let expense;
    
    do {
      expense = prompt('Во сколько это обойдется?');
    }
    while (!isNumber(expense));

    sum += +expense;
  }
  console.log('expenses: ', expenses);
  return sum;  
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);

let getAccumulatedMonth = function() {
  return (money + income) - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();
console.log('Бюджет на месяц: ', accumulatedMonth); //comment

period = getTargetMonth();
if (period < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('Цель будет достигнута через: ' + period + ' месяцев');
}

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