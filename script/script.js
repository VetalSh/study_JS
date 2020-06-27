'use strict';

class First {
  constructor() {
    this.str = 'Привет я метод родителя!';
  }

  hello() {
    console.log(this.str);
  }
}

class Second extends First {
  constructor() {
    super();
    this.strSecond = 'А я наследуемый метод!';   
  }

  hello() {
    super.hello();
    console.log(this.strSecond);
  }
}

const first = new First(),
      second = new Second();

second.hello();