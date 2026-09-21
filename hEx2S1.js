function RecArea(length, width) {
    
    return length * width;
}
console.log(RecArea(5, 10));
const RecAreaArrow = (length, width) => length * width;

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(4));
const isEvenArrow = (num) => num % 2 === 0;

function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}
console.log(celciusToFahrenheit(0));
const celciusToFahrenheitArrow = (celcius) => (celcius * 9/5) + 32;

function largestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(largestNumber(5, 10, 15));
const largestNumberArrow = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
};


function firstCapital(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(firstCapital("hello"));
const firstCapitalArrow = (str) => str[0].toUpperCase() + str.slice(1);