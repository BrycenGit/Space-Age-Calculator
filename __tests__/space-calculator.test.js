import { User } from './../src/space-calculator';
import { TestScheduler } from 'jest';

describe('User', ()=> {
  let name = 'brycen';
  let age = 28;
  
  beforeEach(() => {

  })
  
  test('should creat an object with user name and user age', () => {
    let newUser = new User (name, age);
    expect(newUser.age).toBe(28);
  })
})