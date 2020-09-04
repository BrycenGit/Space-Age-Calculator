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
    this.extraYears;
    this.averageExpectancy = 78.5
  }
  mercuryAge() {
    this.spaceAge = Math.round(this.age * (.24));
  }
  venusAge() {
    this.spaceAge = this.age * (.62);
  }
  marsAge() {
    this.spaceAge = this.age * (1.88);
  }
  jupiterAge() {
    this.spaceAge = this.age * (11.86);
  }
  lifeExpectancy() {
    if (this.age >= this.averageExpectancy) {
      this.yearsExpected = this.age - this.averageExpectancy;
      console.log('congrats you surpassed average life expectency')
    } else {
      this.yearsExpected = this.averageExpectancy - this.age;
      console.log('sorry what a bummer  not much time left')
    }
  }


}