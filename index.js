const screen = document.getElementById("screen");
const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btnC = document.getElementById("btn-c");
const btnD = document.getElementById("btn-d");
const btnS = document.getElementById("btn-/");
const btnX = document.getElementById("btn-x");
const btnP = document.getElementById("btn-.");
const btnI = document.getElementById("btn-+");
const btnM = document.getElementById("btn--");
const btnE = document.getElementById("btn-e");
let canIDelete = true;

const btns = [
  btn0,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btnS,
  btnX,
  btnP,
  btnI,
  btnM,
];

const itIsNan = () => {
  replaceOnDisplay("I can't do this");
  setTimeout(() => {
    replaceOnDisplay(""), 1;
  });
};

const isItNan = (posibleNan) => {
  if (isNaN(posibleNan)) {
    itIsNan();
  } else {
    replaceOnDisplay(posibleNan.toFixed(2));
  }
};

const writeOnDisplay = (text) => {
  screen.innerHTML += text;
};

const replaceOnDisplay = (text) => {
  screen.innerHTML = text;
};

btnC.addEventListener("click", () => {
  replaceOnDisplay("");
  canIDelete = true;
});

btnD.addEventListener("click", () => {
  if (canIDelete) {
    const text = String(screen.innerHTML);
    replaceOnDisplay(text.substring(0, text.length - 1)); //It takes the string that is on the display, and it writes all the string except the last digit
  }
});

btns.forEach((button) => {
  button.addEventListener("click", () => {
    writeOnDisplay(button.innerHTML);
  });
});

btnE.addEventListener("click", () => {
  const stringOnDisplay = String(screen.innerHTML);

  if (stringOnDisplay.includes("/")) {
    const numbers = stringOnDisplay.split("/");
    const result = numbers[0] / numbers[1];
    isItNan(result);
    canIDelete = false;
  }

  if (stringOnDisplay.includes("x")) {
    const numbers = stringOnDisplay.split("x");
    const result = numbers[0] * numbers[1];
    isItNan(result);
    canIDelete = false;
  }

  if (stringOnDisplay.includes("-")) {
    const numbers = stringOnDisplay.split("-");
    const result = numbers[0] - numbers[1];
    isItNan(result);
    canIDelete = false;
  }

  if (stringOnDisplay.includes("+")) {
    const numbers = stringOnDisplay.split("+");
    const result = Number(numbers[0]) + Number(numbers[1]);
    isItNan(result);
    canIDelete = false;
  }
});
