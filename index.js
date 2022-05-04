const numbers = document.getElementsByClassName("numbers")
const ac = document.getElementById("ac")
const operator = document.querySelectorAll("operator")
const equalSign = document.getElementById("equalSign")
console.log(numbers)
console.log(ac)
console.log(operator)
console.log(equalSign)

numbers.forEach((n) => {
    n.addEventListener("click", function () {
      appendNumberFunction(n.innerText);
    });
  });
  
  and 
  
  function appendNumberFunction(number) {
    if (number === "." && current.innerText.includes(".")) {
      return;
    }
    current.innerText += number;
  }