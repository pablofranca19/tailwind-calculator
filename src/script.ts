const firstFactor = document.getElementById("factor-1") as HTMLParagraphElement;
const numbers = document.querySelectorAll(".btn-number") as NodeListOf<HTMLElement>;
const btnClear = document.getElementById("clear") as HTMLElement;


numbers.forEach(function(element) {
    const number = element.textContent ?? "";
    element.addEventListener("click", () => {
        firstFactor.textContent === "0" ? firstFactor.textContent = number : firstFactor.textContent += number;
    });
});

btnClear.addEventListener("click", () => {
    firstFactor.textContent = "0";
})


