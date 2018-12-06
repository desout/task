"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var calculate = function () {
    var firstValue = '1600';
    var secondValue = '8';
    console.log(firstValue + "/" + secondValue + "= " + divElements(firstValue, secondValue));
};
var divElements = function (firstValue, secondValue) {
    //stream examples
    var readableStream = new stream_1.Stream.Readable();
    var count = 0;
    var addZeroToResult = false;
    var isSecondSub = false;
    while (firstValue !== '00' && firstValue.length > secondValue.length || findBiggestValueString(firstValue, secondValue)) {
        var isAddZero = false;
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
        }
        else {
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
var findBiggestValueString = function (firstValue, secondValue) {
    for (var i = 0; i < firstValue.length; i++) {
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
var removeLeadingZero = function (value) { return value.substr(1, value.length - 1); };
var findBiggestValueNumber = function (firstValue, secondValue) { return Number(firstValue) >= Number(secondValue); };
var createBigger = function (firstValue, secondValue) {
    var count = 0;
    while (!findBiggestValueNumber(firstValue, secondValue)) {
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
var subFn = function (value, index, subValue, flag) {
    return value.substr(0, index)
        + (flag ? (Number(value[index]) + 10 - subValue) : (Number(value[index]) - subValue))
        + value.substr(index + 1, value.length - index - 1);
};
var AddFn = function (value, index, addValue) {
    return value.substr(0, index) + (Number(value[index]) + addValue) + value.substr(index, value.length - index - 1);
};
var subValues = function (firstValue, secondValue) {
    var subOne = false;
    var addTen = false;
    for (var i = secondValue.length - 1; i >= 0; i--) {
        var secondNumber = Number(secondValue[i]);
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
