import {
  Calculator,
  primaryOperand,
  secondaryOperand,
  operationSign,
  thousandSeparator,
} from "./calculator.js";

// Calculator displays 0 initially
primaryOperand.textContent = 0;

// add event listener on the whole document then filter by button clicked
document.addEventListener("click", (e) => {
  // if number is clicked
  if (e.target.hasAttribute("data-number")) {
    console.log("number");
    Calculator.primaryOperand = e.target.textContent;
  }
  // if operation sign is clicked
  if (e.target.hasAttribute("data-operation")) {
    console.log("operation");
    // check if operationSign and secondaryOperand are empty so we can assign values to them then set primaryOperand to 0
    if (
      operationSign.textContent === "" &&
      secondaryOperand.textContent === ""
    ) {
      Calculator.secondaryOperand = primaryOperand.dataset.primaryOperand;
      Calculator.operationSign = e.target.textContent;
      primaryOperand.dataset.primaryOperand = 0;
      primaryOperand.textContent = 0;
    }
  }
  // if delete is clicked
  if (e.target.hasAttribute("data-delete")) {
    console.log("delete");
    Calculator.delete();
  }
  // if equal sign is clicked
  if (e.target.hasAttribute("data-equals")) {
    console.log("equals");
    // run this only if all 3 fields have values
    if (
      primaryOperand.dataset.primaryOperand !== "" &&
      secondaryOperand.dataset.secondaryOperand !== "" &&
      operationSign.dataset.operationSign !== ""
    ) {
      primaryOperand.dataset.primaryOperand = Calculator.equals(
        operationSign.textContent
      );
      primaryOperand.textContent =
        primaryOperand.dataset.primaryOperand.replaceAll(
          thousandSeparator,
          "$&,"
        );
      // clear all fields when result is calulated
      Calculator.secondaryOperand = "";
      Calculator.operationSign = "";
    }
  }
  // if clear is clicked
  if (e.target.hasAttribute("data-all-clear")) {
    console.log("all-clear");
    Calculator.clearAll();
  }
});
