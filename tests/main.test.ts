import { divElements } from '../src/main'
const MAX_VALUE = 1000;

it('should return correct value of divs elements', () => {
  for(let i = 103;i<=MAX_VALUE;i++){
    for(let j=2;j<=MAX_VALUE/2;j++){
      const result = divElements(i.toString(),j.toString());

      expect(result).toBe(Math.floor(i/j).toString());
    }
  }

});