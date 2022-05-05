const ac = document.getElementById("ac");
const operator = document.querySelectorAll("#operator");
const equalSign = document.getElementById("equalSign");
const numbers = document.querySelectorAll("#number");
const current = document.getElementById("current");
const previous = document.getElementById("previous");

numbers.forEach((num) => {
  num.addEventListener("click", function () {
    appendNumberFunction(num.innerText);
  });
});

ac.addEventListener("click", clear);

operator.forEach((op) => {
  op.addEventListener("click", function () {
    if (current.innerText === "") {
      return;
    }
    chooseOperation(op.innerText);
    previous.innerText = current.innerText;
    current.innerText = "";
  });
});
function appendNumberFunction(number) {
  if (numbers === "." && current.innerText.includes(".")) {
    return;
  }
  current.innerText = current.innerText + number;
}

function clear() {
  current.innerText = "";
  previous.innerText = "";
}

function chooseOperation(operater) {
  let answer;
  const previousValue = previous.innerText;
  const currentValue = current.innerText;
  if (operater === "+") {
    answer = currentValue + previousValue;
  }
  current.innerText = answer;
}
