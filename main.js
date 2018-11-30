"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate = function () {
    var firstValue = '4214215';
    var secondValue = '5211';
    console.log(firstValue + "/" + secondValue + "= " + divElements(firstValue, secondValue));
};
var divElements = function (firstValue, secondValue) {
    //stream examples
    // const readableStream = new Stream.Readable();
    // readableStream.push('push');
    // readableStream.push('push');
    // readableStream.push('push');
    // readableStream.push(null);
    // console.log(readableStream.read().toString());
    return subValues(firstValue, secondValue);
};
var findBiggestValue = function (firstValue, secondValue) {
    if (firstValue.length === secondValue.length) {
        for (var i = 0; i < firstValue.length; i++) {
            if (firstValue[i] < secondValue[i]) {
                return false;
            }
        }
        return true;
    }
    else {
        return firstValue.length > secondValue.length;
    }
};
var createBigger = function (firstValue, secondValue) {
    var count = 0;
    while (!findBiggestValue(firstValue, secondValue)) {
        firstValue += '0';
        count++;
    }
    return { array: firstValue, count: count };
};
var addLeadingZero = function (value) {
    return "0" + value;
};
var addZeros = function (value, count) {
    var zerosString = "";
    for (var i = 0; i < count; i++) {
        zerosString += '0';
    }
    return value + zerosString;
};
var subFn = function (value, index, subValue) {
    return value.substr(0, index) + (Number(value[index]) - subValue) + value.substr(index, value.length - index - 1);
};
var AddFn = function (value, index, addValue) {
    return value.substr(0, index) + (Number(value[index]) + addValue) + value.substr(index, value.length - index - 1);
};
var subValues = function (firstValue, secondValue) {
    var subOne = false;
    for (var i = secondValue.length - 1; i >= 0; i--) {
        var secondNumber = Number(secondValue[i]);
        if (subOne) {
            firstValue = subFn(firstValue, i, 1);
            subOne = !subOne;
        }
        if (Number(firstValue[i]) < secondNumber) {
            subOne = true;
            firstValue = AddFn(firstValue, i, 10);
        }
        firstValue = subFn(firstValue, i, secondNumber);
    }
    return firstValue;
};
calculate();
