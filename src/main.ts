import { Stream } from 'stream';

export const divElements = (firstValue: string, secondValue: string): string => {
  //stream examples
  console.log(firstValue,secondValue);
  const readableStream = new Stream.Readable();
  let isRemoveZero: boolean = false;
  let isPushStream: boolean = false;
  let count: number = 0;
  if(secondValue === '1' ){
    return firstValue;
  }
  do {
    if (firstValue[0] === '0' && !findBiggestValueNumber(secondValue[0],firstValue[1])) {
      readableStream.push('0');
      firstValue = removeLeadingZero(firstValue);
    } else {
      if (firstValue.length > secondValue.length && findBiggestValueNumber(secondValue[0], firstValue[0])) {
        secondValue = addLeadingZero(secondValue);
        isRemoveZero = true;

      }
      while (findBiggestValueString(firstValue, secondValue)) {
        firstValue = subValues(firstValue, secondValue);
        count++;
      }
      if((firstValue[0] === '0' && (firstValue[1] !== '0' && findBiggestValueNumber(firstValue[1],secondValue[0]))) || (firstValue[0] === '0' && isRemoveZero)){
        firstValue = removeLeadingZero(firstValue);
      }
      if (isRemoveZero) {
        secondValue = removeLeadingZero(secondValue);
        isPushStream = true;
      }
      if(!isRemoveZero || isPushStream){
        readableStream.push(count.toString());
        count = 0;
        isPushStream =false;
      }
    }
  }
  while (firstValue.length > 0 && (firstValue.length > secondValue.length || findBiggestValueString(firstValue,secondValue)));
  if(count > 0){
    readableStream.push(count.toString());
  }

  readableStream.push(null);
  const stream = readableStream.read();
  return stream !== null ? stream.toString() : '0';
};
const findBiggestValueString = (firstValue: string, secondValue: string): boolean => {
  if(firstValue.length < secondValue.length){
    return false;
  }
  for (let i = 0; i < firstValue.length; i++) {
    if (firstValue[i] === secondValue[i]) {
      continue;
    }
    if (firstValue[i] > secondValue[i]) {
      return true;
    }
    if (firstValue[i] < secondValue[i]) {
      return false;
    }
  }
  return firstValue.length >= secondValue.length;

};
const removeLeadingZero = (value: string) => value.substr(1, value.length - 1);
const findBiggestValueNumber = (firstValue: string, secondValue: string) => Number(firstValue) >= Number(secondValue);
const addLeadingZero = (value: string) => {
  return "0" + value;
};

const subFn = (value: string, index: number, subValue: number, flag: boolean): string =>
  value.substr(0, index)
  + (flag ? (Number(value[index]) + 10 - subValue) : (Number(value[index]) - subValue))
  + value.substr(index + 1, value.length - index - 1);

const subValues = (firstValue: string, secondValue: string): string => {
  let subOne: boolean = false;
  let addTen: boolean = false;
  for (let i = secondValue.length - 1; i >= 0; i--) {
    const secondNumber: number = Number(secondValue[i]);
    if (addTen) {
      subOne = true;
      addTen = !addTen;
    }
    if ((subOne ? Number(firstValue[i]) - 1 : Number(firstValue[i])) < secondNumber) {
      addTen = true;

    }
    firstValue = subFn(firstValue, i, subOne ? secondNumber + 1 : secondNumber, addTen);
    subOne = false;
  }
  return firstValue;
};