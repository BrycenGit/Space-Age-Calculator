import { User } from './../src/space-calculator';
import { TestScheduler } from 'jest';

describe('User', ()=> {
  
  beforeEach(() => {
    let user = 'brycen';
    let age = 28;
  })
  
  test('should creat an object with user name and user age', () => {
    expect().tobe('brycen')
  })
})