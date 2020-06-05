let money = 1000,
    income = 2000,    
    addExpenses = 100,    
    deposit = 900,    
    mission = 'Create trading cites with comfortable funtional',    
    period = '1 week';

alert('Чтобы просмотреть выполненое задание нажмите клавишу F12 и кнопку "Смотреть выполненое ДЗ"');

let message = function() {  
  console.log('Создаем переменные: ');
  console.log('money: ', money);
  console.log('income: ', income);
  console.log('addExpenses: ', addExpenses);
  console.log('deposit: ', deposit);
  console.log('mission: ', mission);
  console.log('period: ', period);
};

document.getElementById('github').addEventListener('click', message);
