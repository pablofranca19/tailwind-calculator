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
        factor2 = null;
        factor1 = firstFactor.textContent;
        operatorStr = "";
        /*
 if (operatorStr !== "") {
     return firstFactor.textContent = String(calculate(Number(factor1), operatorStr, Number(factor2)));
 }
 */
        firstFactor.textContent = operator.textContent;
        operatorStr = firstFactor.textContent;
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
const regex = new RegExp(/[0-9]/g);
equalOperator.addEventListener("click", () => {
    if (factor1 !== null) {
        factor2 = firstFactor.textContent;
    }
    console.log(factor1, operatorStr, factor2);
    console.log("Fator 1: " + factor1);
    console.log("Fator 2: " + factor2);
    firstFactor.textContent = String(calculate(Number(factor1), operatorStr, Number(factor2)));
    if (!regex.test(firstFactor.textContent)) {
        firstFactor.textContent = "Error";
        return;
    }
    pressFlag = true;
    operatorStr = "";
    factor1 = firstFactor.textContent;
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