const firstFactor = document.getElementById("factor-1") as HTMLParagraphElement;
const numbers = document.querySelectorAll(".btn-number") as NodeListOf<HTMLElement>;
const btnClear = document.getElementById("clear") as HTMLElement;
const operators = document.querySelectorAll(".operator") as NodeListOf<HTMLElement>;
const equalOperator = document.getElementById("equals");

let factor1: string | null = null;
let operator: string;
let factor2: string | null = null;

numbers.forEach(function(element) {
    const number = element.textContent ?? "";
    element.addEventListener("click", () => {
        firstFactor.textContent === "0" ? firstFactor.textContent = number : firstFactor.textContent += number;
        operators.forEach(function(operator) {
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

function calculate(element1: number, operator: string, element2: number) {
    switch (operator) {
        case "+": return element1 + element2;
        case "-": return element1 - element2;
        case "X": return element1 * element2;
        case "/": return element1 / element2;
        default:
            return element2;
    }
}

