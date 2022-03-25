function sum(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const numbersArray = [10, 5, 30, 25];

let totalSum = numbersArray[0];
let totalSub = numbersArray[0];
let totalMul = numbersArray[0];
let totalDiv = numbersArray[0];

numbersArray.forEach((number, index) =>{
    if (index > 0) {
        totalSum = sum(totalSum, number);
        totalSub = substract(totalSub, number);
        totalMul = multiply(totalMul, number);
        totalDiv = divide(totalDiv, number);
    }
});

console.log(totalSum);
console.log(totalSub);
console.log(totalMul);
console.log(totalDiv);