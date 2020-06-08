let money = 1000,
    income = 2000,    
    addExpenses = 'Интернет, питание, коммунальные услуги, проезд',
    deposit = true,    
    mission = 9000,    
    period = 3,
    budgetDay;


let message = function() {  
  console.log('Выводим типы данных для переменных: ');
  console.log('money: ', typeof money);
  console.log('income: ', typeof income);
  console.log('deposit: ', typeof deposit);
  
  console.log('Длина стороки addExpenses: ', addExpenses.length);

  console.log('Период равен ' + period + ' месяцев');
  console.log('Цель заработать ' + mission + ' долларов');

  console.log('Строка addExpenses приведена к нижнему регистру: ', addExpenses.toLowerCase());
  let arrExpenses = addExpenses.toLowerCase().split(', ');
  console.log('Разбиваем строку addExpenses на массив: ', arrExpenses);

  budgetDay = (money + income) / 30;
  console.log('budgetDay: ', budgetDay);
};

document.getElementById('github').addEventListener('click', message);