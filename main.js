function calculate(form) {
    var elements = form.elements;
    var firstValueInt = elements.firstValue.value
        .split('')
        .map(function (item) { return parseInt(item); });
    var secondValueInt = elements.secondValue.value
        .split('')
        .map(function (item) { return parseInt(item); });
    console.log(firstValueInt.join() + "/" + secondValueInt.join() + "= " + divElements(firstValueInt.slice(), secondValueInt.slice()).join());
}
function removeLeadingZeros(value) {
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var element = value_1[_i];
        if (element !== 0) {
            break;
        }
        value.shift();
    }
    return value;
}
function findBiggestValue(firstValue, secondValue) {
    if (firstValue.length === secondValue.length) {
        return firstValue.some(function (element, index) {
            return element > secondValue[index];
        });
    }
    else {
        return firstValue.length > secondValue.length;
    }
}
function createBigger(firstValue, secondValue) {
    var count = 0;
    while (!findBiggestValue(firstValue, secondValue)) {
        firstValue.push(0);
        count++;
    }
    return { array: firstValue, count: count };
}
function addLeadingZeros(value, count) {
    for (var i = 0; i < count; i++) {
        value.unshift(0);
    }
    return value;
}
function addZeros(value, count) {
    for (var i = 0; i < count; i++) {
        value.push(0);
    }
    return value;
}
function subValues(firstValue, secondValue) {
    secondValue = addLeadingZeros(secondValue, firstValue.length - secondValue.length);
    var returnValue = [];
    for (var i = firstValue.length - 1; i >= 0; i--) {
        if (firstValue[i] < secondValue[i]) {
            firstValue[i] += 10;
            firstValue[i - 1]--;
        }
        returnValue[i] = firstValue[i] - secondValue[i];
    }
    return returnValue;
}
function divElements(firstValue, secondValue) {
    firstValue = removeLeadingZeros(firstValue);
    secondValue = removeLeadingZeros(secondValue);
    return subValues(firstValue, secondValue);
}
