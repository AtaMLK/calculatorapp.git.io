"use strict";
const theme1 = document.querySelector(".theme-1"); /* 
const theme01 = document.querySelector(".theme-01"); */ 
const theme2 = document.querySelector(".theme-2"); /* 
const theme02 = document.querySelector(".theme-02"); */ 
const theme3 = document.querySelector(".theme-3"); /* 
const theme03 = document.querySelector(".theme-03"); */ 
const toggleBall = document.querySelector(".toggle-ball");
const calculator = document.getElementById("calculator");
const themeChanger = function() {
    theme1.addEventListener("click", function() {
        calculator.classList.remove("theme-02");
        calculator.classList.remove("theme-03");
        calculator.classList.add("theme-01");
        toggleBall.style.right = "-0.2rem";
    });
    theme2.addEventListener("click", function() {
        calculator.classList.remove("theme-01");
        calculator.classList.remove("theme-03");
        calculator.classList.add("theme-02");
        toggleBall.style.right = "-1.2rem";
    });
    theme3.addEventListener("click", function() {
        calculator.classList.remove("theme-01");
        calculator.classList.remove("theme-02");
        calculator.classList.add("theme-03");
        toggleBall.style.right = "-2.2rem";
    });
};
const printedValue = document.getElementById("display-monitor");
function addToCalculator(value) {
    printedValue.value += value;
}
function resetAll() {
    printedValue.value = "";
}
function equalTo() {
    printedValue.value = eval(printedValue.value);
    return;
}
function deleteLast() {
    printedValue.value = printedValue.value.slice(0, -1);
}
themeChanger();

//# sourceMappingURL=index.c4775257.js.map
