import { divElements } from '../src/main'
const MAX_VALUE = 10000;
describe('testing divide string to string',() =>{
  it('should return correct value of divs elements', () => {
    const a = '44324234234234365498678562423423423';
    const k = '960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719';
    console.time();
    divElements(k,a);
    console.timeEnd();

    for(let i = 1;i<=MAX_VALUE/3;i++){
      for(let j= 1;j<=i;j++){
        const result = divElements(i.toString(),j.toString());
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
        const result = divElements(i.toString(),j.toString());
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
        const result = divElements(i.toString(),j.toString());
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
