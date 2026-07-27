const firstFactor = document.getElementById("factor-1") as HTMLElement;
const numbers = document.querySelectorAll(".btn-number") as NodeListOf<HTMLElement>;


numbers.forEach(function(element, number) {
    number = Number(element.textContent);
    element.addEventListener("click", () => {
        firstFactor.textContent = 0 ? firstFactor.textContent = number : firstFactor.textContent += number;
    })
})

