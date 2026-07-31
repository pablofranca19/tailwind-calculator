"use strict";
const firstFactor = document.getElementById("factor-1");
const numbers = document.querySelectorAll(".btn-number");
const btnClear = document.getElementById("clear");
numbers.forEach(function (element) {
    const number = element.textContent ?? "";
    element.addEventListener("click", () => {
        firstFactor.textContent === "0" ? firstFactor.textContent = number : firstFactor.textContent += number;
    });
});
btnClear.addEventListener("click", () => {
    firstFactor.textContent = "0";
});
