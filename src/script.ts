const firstFactor = document.getElementById("factor-1") as HTMLParagraphElement;
const numbers = document.querySelectorAll(".btn-number") as NodeListOf<HTMLElement>;
const btnClear = document.getElementById("clear") as HTMLElement;
const operators = document.querySelectorAll(".operator") as NodeListOf<HTMLElement>;
const equalOperator = document.getElementById("equals");


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


