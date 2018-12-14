import { divElements } from './src/main';

const a = '44324234234234365498678562423423423';
const b = '2';
console.time();
const value = divElements(a,b);
console.timeEnd();
console.log(value);