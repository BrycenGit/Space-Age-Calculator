import { User, Calculator } from './../src/space-calculator';

describe('Calculator', () => {
  let newCalculator = new Calculator();
  
  test('should create an object with an empty array', () => {
    expect(newCalculator.users.length).toBe(0);
  }) 
  test('should add user to users array', () => {
    newCalculator.addUser('brycen')
    expect(newCalculator.users.length).toBe(1);
  })
})

describe('User', ()=> {
  let newUser;
  let name = 'brycen';
  let age = 28;
  
  beforeEach(() => {
    newUser = new User (name, age);
  })
  
  test('should creat an object with user name and user age', () => {
    expect(newUser.age).toBe(28);
  })
  test('Will take in an age and return age multiplied by (.24) for mercury', () => {
    newUser.mercuryAge();
    expect(newUser.spaceAge).toBe(6.72);
  })
  test('Will take in an age and return age multiplied by (.62) for venus', () => {
    newUser.venusAge();
    expect(newUser.spaceAge).toBe(17.36);
  })
  test('Will take in an age and return age multiplied by (1.88) for mars', () => {
    newUser.marsAge();
    expect(newUser.spaceAge).toBe(52.64);
  })
  test('Will take in an age and return age multiplied by (11.86) for jupiter', () => {
    newUser.jupiterAge();
    expect(newUser.spaceAge).toBe(332.08);
  })
  test('will take user age and return how many years they will have to live based on average life expectancy(us = 78.5)', () => {
    newUser.lifeExpectancy();
    expect(newUser.yearsExpected).toBe(50.5);
    
  })
  test('if the user age is more than life expectency it will return how long they have lived past expectency', () => {
    let oldUser;
    oldUser = new User('brycen', 100)
    oldUser.lifeExpectancy();
    expect(oldUser.yearsExpected).toBe(21.5);
    
  })
})