import { div } from '../src/divide'
import { subtract } from '../src/subtract';
const MAX_VALUE = 5000;
describe('testing subtract string to string', () => {
  it('should return correct value of subtract elements', () => {
    for (let i = 1; i <= MAX_VALUE / 3; i++) {
      for (let j = 1; j <= i; j++) {
        const result = subtract(i.toString(), j.toString());
        try {
          expect(result).toBe(Math.floor(i - j).toString());
        }
        catch (e) {
          console.log(`${i}\t ${j}\t ${result}\t ${Math.floor(i - j)}`);
          return;
        }
      }
    }
  });
  it('should return correct value of subtract elements 1', () => {
    for (let i = Math.floor(MAX_VALUE / 3); i <= (MAX_VALUE / 3) * 2; i++) {
      for (let j = 1; j <= i; j++) {
        const result =subtract(i.toString(), j.toString());
        try {
          expect(result).toBe(Math.floor(i - j).toString());
        }
        catch (e) {
          console.log(`${i}\t ${j}\t ${result}\t ${Math.floor(i -j)}`);
          return;
        }
      }
    }
  });
  it('should return correct value of subtract elements 2', () => {
    for (let i = Math.floor((MAX_VALUE / 3) * 2); i <= MAX_VALUE; i++) {
      for (let j = 1; j <= i; j++) {
        const result =subtract(i.toString(), j.toString());
        try {
          expect(result).toBe(Math.floor(i - j).toString());
        }
        catch (e) {
          console.log(`${i}\t ${j}\t ${result}\t ${Math.floor(i - j)}`);
          return;
        }
      }
    }
  });
});

describe('testing divide string to string',() =>{
  it('should return correct value of divs elements', () => {
    for(let i = 1;i<=MAX_VALUE/3;i++){
      for(let j= 1;j<=i;j++){
        const result = div(i.toString(),j.toString(),false);
        try {
          expect(result).toBe(Math.floor(i/j).toString());

        }catch (e) {
          console.log(`${i}\t ${j}\t ${ result}\t ${Math.floor(i/j)}`);
          return;
        }
      }
    }

  });
  it('should return correct value of divs elements 1', () => {
    for(let i = Math.floor(MAX_VALUE/3);i<=(MAX_VALUE/3)*2;i++){
      for(let j= 1;j<=i;j++){
        const result = div(i.toString(),j.toString(),false);
        try {
          expect(result).toBe(Math.floor(i/j).toString());

        }catch (e) {
          console.log(`${i}\t ${j}\t ${ result}\t ${Math.floor(i/j)}`);
          return;
        }
      }
    }

  });
  it('should return correct value of divs elements 2', () => {
    for(let i = Math.floor((MAX_VALUE/3)*2);i<=MAX_VALUE;i++){
      for(let j= 1;j<=i;j++){
        const result = div(i.toString(),j.toString(),false);
        try {
          expect(result).toBe(Math.floor(i/j).toString());

        }catch (e) {
          console.log(`${i}\t ${j}\t ${ result}\t ${Math.floor(i/j)}`);
          return;
        }
      }
    }

  });
});
