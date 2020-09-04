export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.spaceAge;
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
}