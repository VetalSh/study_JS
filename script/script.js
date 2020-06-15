'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// Функция проверки на отсутссвие цифр
let isChar = function(str) {
  let regexp = /\d/;
  // if (str.match(regexp) || str === '') {
  //   return true;    
  // } else {
  //   return false;
  // }
  return !!(str.match(regexp) || str === '');
};

let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
  while (!isNumber(money));
  money = +money;
};

start();

let appData = {
  income: {},
  budget: money,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 6,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {

    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      // Ввод дополнительного заработка с проверкой на введение текста
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?');        
      } while (itemIncome === null || isChar(itemIncome));

      // console.log('itemIncome: ', itemIncome);

      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      } while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
      appData.income[itemIncome] = cashIncome;

    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартира, еда, проезд, интернет');    
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        // console.log('Вывод возможных расходов в виде массива: ', appData.addExpenses);

        // выводим возможные расходы ввиде строки, где каждое слово
        // с большой буквы слова разделены запятой и пробелом
        let showExpenses = [];
        for (let i = 0; i < appData.addExpenses.length; i++) {
          appData.addExpenses[i] = appData.addExpenses[i].trim();
          showExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substr(1).toLowerCase();
        }        
        console.log(showExpenses.join(', '));

        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    // Цикл опроса взятый из функции getExpensesMonth
    for (let i = 0; i < 2; i++){
      // Ввод обязательных статей расходов с проверкой на ввод текста 
      let expenseValue;
      do {
        expenseValue = prompt('Введите обязательную статью расходов?');        
      } while (expenseValue === null || isChar(expenseValue));      

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
    appData.budgetMonth = appData.budget - appData.expensesMonth;   
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
  },
  getInfoDeposit: function() {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой  процент?', 10);
      } while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);      
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
// console.log('money: ', appData.budget);
appData.getExpensesMonth();
appData.getInfoDeposit();
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
  console.log(key + ': ' + appData[key]);
}