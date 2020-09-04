import { User } from './../src/space-calculator';
import { TestScheduler } from 'jest';

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
    expect(newUser.spaceAge).toBe(6.72)
  })
  test('Will take in an age and return age multiplied by (.62) for venus', () => {
    newUser.venusAge();
    expect(newUser.spaceAge).toBe(17.36)
  })
  test('Will take in an age and return age multiplied by (1.88) for mars', () => {
    newUser.marsAge();
    expect(newUser.spaceAge).toBe(52.64)
  })
  test('Will take in an age and return age multiplied by (11.86) for jupiter', () => {
    expect(newUser.spaceAge).toBe(20)
  })
})