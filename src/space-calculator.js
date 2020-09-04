export class Calculator {
  constructor() {
    this.users = [];
  }
  addUser(userToAdd) {
    this.users.push(userToAdd);
  } 
}

export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.spaceAge;
    this.yearsExpected;
    this.averageExpectancy = 78
  }
  mercuryAge() {
    this.spaceAge = Math.round(this.age * (.24));
  }
  venusAge() {
    this.spaceAge = Math.round(this.age * (.62));
  }
  marsAge() {
    this.spaceAge = Math.round(this.age * (1.88));
  }
  jupiterAge() {
    this.spaceAge = Math.round(this.age * (11.86));
  }
  lifeExpectancy() {
    if (this.age >= this.averageExpectancy) {
      this.yearsExpected = this.age - this.averageExpectancy;
      return (`congrats you surpassed average life expectency by ${this.yearsExpected} years!`);
      
    } else {
      this.yearsExpected = this.averageExpectancy - this.age;
      return (`we are so sorry, you only have ${this.yearsExpected} years left on earth!`);
    }
  }


}