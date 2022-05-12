//const all elements, current previous
const ac = document.getElementById("ac");
const operator = document.querySelectorAll("#operator");
const equalSign = document.getElementById("equalSign");
const numbers = document.querySelectorAll("#number");
const current = document.getElementById("current");
const CE = document.getElementById("CE");
const previous = document.getElementById("previous");
const negative = document.getElementById("negative");

CE.addEventListener("click", function () {
  current.innerText = current.innerText.slice(0, -1);
});
//variable choosenOperator, apendNumberFunction
let choosenOperator;
numbers.forEach((num) => {
  num.addEventListener("click", function () {
    appendNumberFunction(num.innerText);
  });
});

negative.addEventListener("click", function () {
  if (current.innerText === "") {
    return;
  } else {
    current.innerText = `-${current.innerText}`;
  }
});

// equak sign add event listener with choosenOperation
equalSign.addEventListener("click", function () {
  chooseOperation();
});

//clear add event listener ,clear
ac.addEventListener("click", clear);

//operator for each
operator.forEach((op) => {
  op.addEventListener("click", function () {
    if (current.innerText === "") {
      return;
    }
    //apendNumberFunction this is for the decimal
    choosenOperator = op.innerText;
    previous.innerText = `${current.innerText} ${op.innerText}`;
    current.innerText = "";
  });
});

//clear function code
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

// chooseOperation parse float Number,    if statements, else if statements
function chooseOperation() {
  let answer;
  const previousValue = parseFloat(previous.innerText);
  const currentValue = parseFloat(current.innerText);

  if (choosenOperator === "+") {
    answer = previousValue + currentValue;
  } else if (choosenOperator === "-") {
    answer = previousValue - currentValue;
  } else if (choosenOperator === "x") {
    answer = previousValue * currentValue;
  } else if (choosenValue === "÷") {
    answer = previousValue / currentValue;
  }

  current.innerText = answer;
  previous.innerText = "";
}
let teacher = {
  age : 23,
  name : "elbeg",
  location : "wework"
}
console.log(teacher.age)
console.log(teacher.name)
console.log(teacher.location)
teacher.married = false
console.log(teacher)
delete teacher["age"]
console.log(teacher)
