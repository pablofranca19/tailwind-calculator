"use strict";
const firstFactor = document.getElementById("factor-1");
const numbers = document.querySelectorAll(".btn-number");
const btnClear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equalOperator = document.getElementById("equals");
let factor1 = null;
let operatorStr;
let factor2 = null;
let pressFlag;
let isOperatorPressed;
numbers.forEach(function (number) {
    number.addEventListener("click", () => {
        firstFactor.textContent === "0" || (pressFlag == true && firstFactor.textContent == operatorStr) ? firstFactor.textContent = number.textContent : firstFactor.textContent += number.textContent;
    });
});
operators.forEach(function (operator) {
    operator.addEventListener("click", () => {
        factor1 = firstFactor.textContent;
        firstFactor.textContent = operator.textContent;
        operatorStr = firstFactor.textContent;
        pressFlag = true;
        isOperatorPressed = true;
    });
});
btnClear.addEventListener("click", () => {
    firstFactor.textContent = "0";
    operatorStr = "";
    factor1 = null;
    factor2 = null;
    pressFlag = false;
    isOperatorPressed = false;
});
factor2 = "10";
equalOperator.addEventListener("click", () => {
    console.log(factor1, operatorStr, factor2);
    console.log(calculate(Number(factor1), operatorStr, Number(factor2)));
    firstFactor.textContent = String(calculate(Number(factor1), operatorStr, Number(factor2)));
});
function calculate(element1, operator, element2) {
    switch (operator) {
        case "+": return element1 + element2;
        case "-": return element1 - element2;
        case "X": return element1 * element2;
        case "/": return element1 / element2;
        default:
            return element2;
    }
}
//# sourceMappingURL=script.js.map