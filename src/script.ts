const firstFactor = document.getElementById("factor-1") as HTMLParagraphElement;
const numbers = document.querySelectorAll(".btn-number") as NodeListOf<HTMLElement>;
const btnClear = document.getElementById("clear") as HTMLElement;
const operators = document.querySelectorAll(".operator") as NodeListOf<HTMLElement>;
const equalOperator = document.getElementById("equals");

let factor1: string | null = null;
let operator: string;
let factor2: string | null = null;
let resetFlag: boolean;

numbers.forEach(function(number) {
    
});

btnClear.addEventListener("click", () => {
    firstFactor.textContent = "0";
    operator == null;
    factor1 == null;
    factor2 == null;
    resetFlag = true;
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

