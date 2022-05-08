const ac = document.getElementById("ac");
const operator = document.querySelectorAll("#operator");
const equalSign = document.getElementById("equalSign");
const numbers = document.querySelectorAll("#number");
const current = document.getElementById("current");
const previous = document.getElementById("previous");
let choosenOperator;
numbers.forEach((num) => {
  num.addEventListener("click", function () {
    appendNumberFunction(num.innerText);
  });
});

equalSign.addEventListener("click", function () {
  chooseOperation();
});

ac.addEventListener("click", clear);

operator.forEach((op) => {
  op.addEventListener("click", function () {
    if (current.innerText === "") {
      return;
    }
    choosenOperator = op.innerText;
    previous.innerText = `${current.innerText} ${op.innerText}`;
    current.innerText = "";
  });
});
function appendNumberFunction(number) {
  if (number === "." && current.innerText.includes(".")) {
    return;
  }
  current.innerText = current.innerText + number;
}

function clear() {
  current.innerText = "";
  previous.innerText = "";
}

function chooseOperation() {
  let answer;
  const previousValue = parseFloat(previous.innerText);
  const currentValue = Number(current.innerText);
  if (choosenOperator === "+") {
    answer = currentValue + previousValue;
  } else if (choosenOperator === "-") {
    answer = currentValue - previousValue;
  } else if (choosenOperator === "x") {
    answer = previousValue * currentValue;
  } else if (choosenValue === "÷") {
    answer = previousValue / currentValue;
  }

  current.innerText = answer;
  previous.innerText = "";
}
