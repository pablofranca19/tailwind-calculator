var firstFactor = document.getElementById("factor-1");
var numbers = document.querySelectorAll(".btn-number");
numbers.forEach(function (element, number) {
    number = Number(element.textContent);
    element.addEventListener("click", function () {
        firstFactor.textContent = 0 ? firstFactor.textContent = number : firstFactor.textContent += number;
    });
});
