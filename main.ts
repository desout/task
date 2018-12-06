import { Stream } from 'stream';

const calculate = () => { //170/8 bug
  const firstValue = '4214';
  const secondValue = '8';
  console.log(`${firstValue}/${secondValue}= ${divElements(firstValue, secondValue)}`);
};

const divElements = (firstValue: string, secondValue: string): string => {
  //stream examples
  const readableStream = new Stream.Readable();
  let count = 0;
  let addZeroToResult = false;
  let isSecondSub = false;
  while (firstValue !== '00' && firstValue.length > secondValue.length || findBiggestValueString(firstValue, secondValue)) {
    let isAddZero: boolean = false;
    if (!findBiggestValueNumber(firstValue[0], secondValue[0])) {
      secondValue = addLeadingZero(secondValue);
      isAddZero = true;
      if (isSecondSub) {
        readableStream.push(count.toString());
        count = 0;
        isSecondSub = false;
      }
    }
    while (firstValue[0] !== '0' && findBiggestValueString(firstValue, secondValue)) {
      firstValue = subValues(firstValue, secondValue);
      count++;
      console.log(count);
    }
    if (firstValue[0] === '0' && firstValue) {
      firstValue = removeLeadingZero(firstValue);
    }

    if (isAddZero) {
      secondValue = removeLeadingZero(secondValue);
      isSecondSub = true;
      addZeroToResult = true;
    } else {
      readableStream.push(count.toString());
      count = 0;
      isSecondSub = false;
    }
  }
  if (firstValue === '00' || count > 0) {

    readableStream.push(count.toString());
  }
  readableStream.push(null);
  console.log(firstValue, secondValue);
  return readableStream.read().toString();
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
  return true;
};
const removeLeadingZero = (value: string) => value.substr(1, value.length - 1);
const findBiggestValueNumber = (firstValue, secondValue) => Number(firstValue) >= Number(secondValue);
const createBigger = (firstValue: string, secondValue: string): { array: string, count: number } => {
  let count = 0;
  while (!findBiggestValueNumber(firstValue, secondValue)) {
    firstValue += '0';
    count++;
  }
  return { array: firstValue, count: count };
};
const addLeadingZero = (value: string) => {
  return "0" + value;
};
const addZeros = (value: string, count: number): string => {
  let zerosString = "";
  for (let i = 0; i < count; i++) {
    zerosString += '0';
  }
  return value + zerosString;
};

const subFn = (value: string, index: number, subValue: number, flag: boolean): string =>
  value.substr(0, index)
  + (flag ? (Number(value[index]) + 10 - subValue) : (Number(value[index]) - subValue))
  + value.substr(index + 1, value.length - index - 1);

const AddFn = (value: string, index: number, addValue: number): string => {
  return value.substr(0, index) + (Number(value[index]) + addValue) + value.substr(index, value.length - index - 1);
};

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

calculate();
