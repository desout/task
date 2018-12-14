import { Stream } from 'stream';

export const divElements = (firstValue: string, secondValue: string): string => {
  //stream examples
  const readableStream = new Stream.Readable();
  let isRemoveZero: boolean = false;
  let count: number = 0;
  let isFirst: boolean = true;
  let lengthOutput = firstValue.length - secondValue.length === 0 ? 2 : (firstValue.length-secondValue.length + 2);
  if(secondValue === '1' ){
    return firstValue;
  }
  if(firstValue === secondValue){
    return '1';
  }
  if(firstValue.length < secondValue.length ){
    return '0';
  }
  if( findBiggestValueString(secondValue,firstValue)){
    lengthOutput--;
  }
  do {
    readableStream.push(count.toString());
    count = 0;
    lengthOutput--;
    if(isRemoveZero){
      secondValue = removeLeadingZero(secondValue);
      isRemoveZero = false;
    }
    if(lengthOutput !== 0 && firstValue[0] !== '0' && findBiggestValueString(secondValue,firstValue) && firstValue.length > secondValue.length){
      if(!isFirst){
        readableStream.push(count.toString());
        lengthOutput--;
      }
      secondValue = addLeadingZero(secondValue);
      isRemoveZero = true;
    }
    while(findBiggestValueString(firstValue,secondValue)){
      firstValue = subValues(firstValue,secondValue);
      count++;
    }
    if(firstValue[0] !== '0'){
      isFirst = true;
    }else {
      isFirst = isRemoveZero;
      firstValue = removeLeadingZero(firstValue);
    }
    if(firstValue[0] === '0' && isRemoveZero){
      firstValue = removeLeadingZero(firstValue);
      isFirst = false;
    }

  }while (lengthOutput > 0);
  readableStream.push(null);
  let stream = readableStream.read().toString();
  if(stream[0] === '0' && stream.length > 1){
    stream = removeLeadingZero(stream);
  }
  return stream !== null ? stream.toString() : '0';
};
const findBiggestValueString = (firstValue: string, secondValue: string): boolean => {
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
const addLeadingZero = (value: string) => {
  return "0" + value;
};

const subFn = (value: string, index: number, subValue: number, flag: boolean): string =>
  value.substr(0, index)
  + (flag ? (Number(value[index]) + 10 - subValue) : (Number(value[index]) - subValue))
  + value.substr(index + 1, value.length - index - 1);

export const subValues = (firstValue: string, secondValue: string): string => {
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