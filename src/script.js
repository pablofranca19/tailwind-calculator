"use strict";
const firstFactor = document.getElementById("factor-1");
const numbers = document.querySelectorAll(".btn-number");
const btnClear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equalOperator = document.getElementById("equals");
let factor1 = null;
let operator;
let factor2 = null;
let resetFlag;
numbers.forEach(function (number) {
});
btnClear.addEventListener("click", () => {
    firstFactor.textContent = "0";
    operator == null;
    factor1 == null;
    factor2 == null;
    resetFlag = true;
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
