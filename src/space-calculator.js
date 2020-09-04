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
}