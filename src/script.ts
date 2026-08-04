const firstFactor = document.getElementById("factor-1") as HTMLParagraphElement;
const numbers = document.querySelectorAll(".btn-number") as NodeListOf<HTMLElement>;
const btnClear = document.getElementById("clear") as HTMLElement;
const operators = document.querySelectorAll(".operator") as NodeListOf<HTMLElement>;
const equalOperator = document.getElementById("equals") as HTMLElement;

let factor1: string | null = null;
let operatorStr: string;
let factor2: string | null = null;
let pressFlag: boolean;
let isOperatorPressed: boolean;

numbers.forEach(function(number) {
    number.addEventListener("click", () => {
        firstFactor.textContent === "0" || (pressFlag == true && firstFactor.textContent == operatorStr) ? firstFactor.textContent = number.textContent : firstFactor.textContent += number.textContent;    
    });
});

operators.forEach(function(operator) {
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

function calculate(element1: number, operator: string, element2: number): number {
    switch (operator) {
        case "+": return element1 + element2;
        case "-": return element1 - element2;
        case "X": return element1 * element2;
        case "/": return element1 / element2;
        default:
            return element2;
    }
}
