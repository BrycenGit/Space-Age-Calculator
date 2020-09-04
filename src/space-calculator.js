export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.spaceAge;
    this.yearsLeft;
    this.averageExpectancy = 78.5
  }
  mercuryAge() {
    this.spaceAge = this.age * (.24);
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
    this.yearsLeft = this.averageExpectancy - this.age;
  }
}