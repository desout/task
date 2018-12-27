export const subtract = (firstValueMain: string, secondValueMain: string): string => {
  let subOne: boolean = false;
  let addTen: boolean = false;
  const isMinus = findBiggestValueString(secondValueMain,firstValueMain);
  let firstValue = isMinus? secondValueMain : firstValueMain;
  let secondValue = isMinus? firstValueMain : secondValueMain;
  for (let i = 1; i <= secondValue.length; i++) {
    const secondNumber: number = Number(secondValue[secondValue.length - i]);
    if (addTen) {
      subOne = true;
      addTen = !addTen;
    }
    if ((subOne ? Number(firstValue[firstValue.length  - i]) - 1 : Number(firstValue[firstValue.length  - i])) < secondNumber) {
      addTen = true;

    }
    firstValue = subFn(firstValue, firstValue.length  - i, subOne ? secondNumber + 1 : secondNumber, addTen);
    subOne = false;
  }
  while(firstValue[0] === '' && firstValue.length > 1){
    firstValue = removeLeadingZero(firstValue);
  }
  let i = secondValue.length+1;
  while(addTen){
    if(Number(firstValue[firstValue.length  - i]) === 0){
      firstValue = subFn(firstValue, firstValue.length  - i, 1, addTen);
      i++;
      continue;
    }
    firstValue = subFn(firstValue,firstValue.length-i,1,false);
    addTen = false;
  }
  while(firstValue[0] === '0' && firstValue.length > 1){
    firstValue = removeLeadingZero(firstValue);
  }
  return isMinus ? '-'+firstValue: firstValue;
};

const subFn = (value: string, index: number, subValue: number, flag: boolean): string =>
  value.substr(0, index)
  + (flag ? (Number(value[index]) + 10 - subValue) : (Number(value[index]) - subValue))
  + value.substr(index + 1, value.length - index - 1);
const findBiggestValueString = (firstValue: string, secondValue: string): boolean => {
  if (firstValue.length === secondValue.length) {
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
  } else {
    return firstValue.length > secondValue.length;
  }
  return false;

};
const removeLeadingZero = (value: string) => value.substr(1, value.length - 1);