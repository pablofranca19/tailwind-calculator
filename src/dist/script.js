"use strict";
const firstFactor = document.getElementById("factor-1");
const numbers = document.querySelectorAll(".btn-number");
const btnClear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equalOperator = document.getElementById("equals");
let factor1 = null;
let operator;
let factor2 = null;
numbers.forEach(function (element) {
    const number = element.textContent ?? "";
    element.addEventListener("click", () => {
        firstFactor.textContent === "0" ? firstFactor.textContent = number : firstFactor.textContent += number;
        operators.forEach(function (operator) {
            operator.addEventListener("click", () => {
                const parseFirstFactor = parseInt(firstFactor.textContent);
                const selectedOperator = operator.textContent;
                firstFactor.textContent = selectedOperator;
            });
        });
    });
});
btnClear.addEventListener("click", () => {
    firstFactor.textContent = "0";
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