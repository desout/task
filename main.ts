import { Stream } from 'stream';
const calculate = () => {
  const firstValue = '4214215';
  const secondValue = '5211';
  console.log(`${firstValue}/${secondValue}= ${divElements(firstValue, secondValue)}`);
};

const divElements=(firstValue: string, secondValue: string): string => {
  //stream examples
  // const readableStream = new Stream.Readable();
  // readableStream.push('push');
  // readableStream.push('push');
  // readableStream.push('push');
  // readableStream.push(null);
  // console.log(readableStream.read().toString());
  return subValues(firstValue, secondValue);
};

const findBiggestValue = (firstValue: string, secondValue: string): boolean =>{
  if (firstValue.length === secondValue.length) {
    for(let i=0; i< firstValue.length; i++){
      if(firstValue[i] < secondValue[i]){
        return false;
      }
    }
    return true;
  } else {
    return firstValue.length > secondValue.length;
  }
};
const createBigger=(firstValue: string, secondValue: string): { array: string, count: number } => {
  let count = 0;
  while (!findBiggestValue(firstValue, secondValue)) {
    firstValue += '0';
    count++;
  }
  return {array: firstValue, count: count};
};
const addLeadingZero=(value: string) => {

  return "0" +value;
};
const addZeros=(value: string, count: number): string => {
  let zerosString = "";
  for (let i = 0; i < count; i++) {
    zerosString+='0';
  }
  return value + zerosString;
};

const subFn=(value:string, index: number, subValue: number): string => {
  return value.substr(0,index) + (Number(value[index])-subValue) + value.substr(index, value.length-index-1);
};
const AddFn=(value:string, index: number, addValue: number): string => {
  return value.substr(0,index) + (Number(value[index])+addValue) + value.substr(index, value.length-index-1);
};

const subValues=(firstValue: string, secondValue: string): string => {
  let subOne: boolean = false;
  for (let i = secondValue.length - 1; i >= 0; i--) {
    const secondNumber: number =Number(secondValue[i]);
    if(subOne){
     firstValue  = subFn(firstValue,i,1);
     subOne = !subOne;
    }
    if (Number(firstValue[i]) < secondNumber) {
      subOne = true;
      firstValue = AddFn(firstValue,i,10);

    }
    firstValue = subFn(firstValue,i,secondNumber)
  }
  return firstValue;
};

calculate();
