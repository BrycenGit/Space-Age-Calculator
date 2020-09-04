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
    this.spaceYearsExpected;
    this.averageExpectancy = 78
  }
  mercuryAge() {
    this.spaceAge = Math.round(this.age * (.24));
    return (`${this.name}, your age on Mercury is ${this.spaceAge}!`);
  }
  venusAge() {
    this.spaceAge = Math.round(this.age * (.62));
    return (`${this.name}, your age on Venus is ${this.spaceAge}!`);
  }
  marsAge() {
    this.spaceAge = Math.round(this.age * (1.88));
    return (`${this.name}, your age on Mars is ${this.spaceAge}!`);
  }
  jupiterAge() {
    this.spaceAge = Math.round(this.age * (11.86));
    return (`${this.name}, your age on Jupiter is ${this.spaceAge}!`);
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
  mercuryAgeAfter() {
    this.spaceYearsExpected = Math.round(this.yearsExpected * (.24));
    return (`${this.name}, on Mercury that is ${this.spaceYearsExpected} years!`);
  }
  venusAgeAfter() {
    this.spaceYearsExpected = Math.round(this.yearsExpected * (.62));
    return (`${this.name}, on Venus that is ${this.spaceYearsExpected} years!`);
  }
  marsAgeAfter() {
    this.spaceYearsExpected = Math.round(this.yearsExpected * (1.88));
    return (`${this.name}, on Mars that is ${this.spaceYearsExpected} years!`);
  }
  jupiterAgeAfter() {
    this.spaceYearsExpected = Math.round(this.yearsExpected * (11.86));
    return (`${this.name}, on Jupiter that is ${this.spaceYearsExpected} years!`);
  }
}