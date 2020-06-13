'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
  money = +money;
};

start();

let appData = {
  income: 2000,
  budget: money,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 6,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартира, еда, проезд, интернет');      
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        console.log('Вывод возможных расходов в виде массива: ', appData.addExpenses);
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    // Цикл опроса взятый из функции getExpensesMonth
    for (let i = 0; i < 2; i++){
      let expenseValue = prompt('Введите обязательную статью расходов?');  
      let expense;      
      do {
        expense = prompt('Во сколько это обойдется?', 2500);
      }
      while (!isNumber(expense));
      appData.expenses[expenseValue] = +expense; // Записываем статьи расходов в объект
    }
  },

  getExpensesMonth: function() {  

    for (let key in appData.expenses) {
      // console.log('" ' + key + ' :" ' + appData.expenses[key]);
      appData.expensesMonth += appData.expenses[key];  // суммируем расходы
    }
    console.log('Перечисляем расходы за месяц: ', appData.expenses);
    console.log('Итого расходы за месяц: ', appData.expensesMonth); 
  },

  getBudget: function() {
    if (appData.deposit) {
      appData.budgetMonth = (appData.budget + appData.income) - appData.expensesMonth;
    } else {
      appData.budgetMonth = (appData.budget) - appData.expensesMonth;
    }    
    // console.log('Бюджет на месяц:  ', appData.budgetMonth);
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    // console.log('Бюджет на день: ', appData.budgetDay);
  },

  getTargetMonth: function() {
    appData.period = Math.ceil(appData.mission / appData.budgetMonth);
    if (appData.period < 0) {
      console.log('Цель не будет достигнута');
    } else {
      console.log('Цель будет достигнута через: ' + appData.period + ' месяцев');
    }
  },
  
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода!');
    } else if ((appData.budgetDay < 1200) && (appData.budgetDay >= 600)) {
      return ('У вас средний уровень дохода.');
    } else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)) {
      return ('К сожалению у вас уровень дохода ниже среднего.');
    } else {
      return ('Что то пошло не так...');
    }
  }  
};

appData.asking();
// console.log('money: ', appData.budget);
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
  console.log(key + ': ' + appData[key]);
}