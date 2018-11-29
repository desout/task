interface FormElements extends HTMLFormElement {
    firstValue: HTMLInputElement;
    secondValue: HTMLInputElement;
}


function calculate(form: HTMLFormElement) {
    const elements: FormElements = <FormElements> (<any>form.elements);
    const firstValueInt: Array<number> = elements.firstValue.value
        .split('')
        .map((item) => parseInt(item));
    const secondValueInt: Array<number> = elements.secondValue.value
        .split('')
        .map((item) => parseInt(item));
    console.log(`${firstValueInt.join()}/${secondValueInt.join()}= ${divElements(firstValueInt.slice(),secondValueInt.slice()).join()}`);
}
function removeLeadingZeros(value: Array<number>): Array<number> {
    for(const element of value) {
        if(element !== 0){
            break;
        }
        value.shift();
    }
    return value;
}
function findBiggestValue(firstValue: Array<number>, secondValue: Array<number>): boolean {
    if(firstValue.length === secondValue.length){
        return firstValue.some((element,index) => {
            return element > secondValue[index];
        })
    } else {
        return firstValue.length > secondValue.length;
    }
}
function createBigger(firstValue: Array<number>, secondValue: Array<number>): {array : Array<number> , count: number} {
    let count = 0;
    while(!findBiggestValue(firstValue,secondValue)){
        firstValue.push(0);
        count++;
    }
    return {array: firstValue,count: count};
}
function addLeadingZeros(value: Array<number>, count: number) {
    for (let i=0; i<count; i++) {
        value.unshift(0);
    }
    return value;
}
function addZeros(value: Array<number>, count: number): Array<number> {
    for (let i=0; i<count; i++) {
        value.push(0);
    }
    return value;
}
function subValues(firstValue: Array<number>, secondValue: Array<number>): Array<number> {
    secondValue = addLeadingZeros(secondValue, firstValue.length-secondValue.length);
    const returnValue: Array<number> = [];
    for(let i=firstValue.length-1; i>= 0; i--){
        if(firstValue[i] < secondValue[i]) {
            firstValue[i]+=10;
            firstValue[i-1]--;
        }
        returnValue[i] = firstValue[i]-secondValue[i];
    }
    return returnValue;
}
function divElements(firstValue: Array<number>, secondValue: Array<number>): Array<number> {
    firstValue =removeLeadingZeros(firstValue);
    secondValue = removeLeadingZeros(secondValue);
    return subValues(firstValue,secondValue);
}