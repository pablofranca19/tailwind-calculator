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
        if (firstFactor.textContent === "0" || firstFactor.textContent === operatorStr || pressFlag === true) {
            firstFactor.textContent = number.textContent;
            pressFlag = false;
        }
        else {
            firstFactor.textContent += number.textContent;
        }
    });
});
operators.forEach(function (operator) {
    operator.addEventListener("click", () => {
        if (factor1 === null) {
            factor1 = firstFactor.textContent;
        }
        else if (factor1 !== null || (firstFactor.textContent !== operatorStr && isOperatorPressed === true)) {
            console.log(firstFactor.textContent);
            factor2 = firstFactor.textContent;
        }
        console.log(factor1, operatorStr, factor2);
        /*
        if (operatorStr !== "") {
            return firstFactor.textContent = String(calculate(Number(factor1), operatorStr, Number(factor2)));
        }
        */
        firstFactor.textContent = operator.textContent;
        operatorStr = firstFactor.textContent;
        isOperatorPressed = true;
        console.log(factor1, operatorStr, factor2);
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
equalOperator.addEventListener("click", () => {
    factor2 = firstFactor.textContent;
    console.log(factor1, operatorStr, factor2);
    console.log(calculate(Number(factor1), operatorStr, Number(factor2)));
    firstFactor.textContent = String(calculate(Number(factor1), operatorStr, Number(factor2)));
    pressFlag = true;
    operatorStr = "";
    factor1 = null;
    factor2 = null;
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