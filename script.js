const primaryOperand = document.querySelector("[data-primary-operand]");
const secondaryOperand = document.querySelector("[data-secondary-operand]");
const operationSign = document.querySelector("[data-operation]");

const thousandSeparator = /(?<!\.\d*)(\d{1,3}(?=(\d{3})+(?!\d)))/g;

console.log(primaryOperand);
console.log(secondaryOperand);
console.log(operationSign);

// Calculator displays 0 initially
primaryOperand.textContent = 0;

document.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-number")) {
    console.log("number");
    // digit is inputed in calculator screen (if 0 in the beginning replace // else add number at the end)
    if (primaryOperand.textContent === "0") {
      primaryOperand.textContent = e.target.textContent;
      primaryOperand.dataset.primaryOperand = e.target.textContent;
    } else {
      primaryOperand.dataset.primaryOperand =
        primaryOperand.dataset.primaryOperand + e.target.textContent;
      primaryOperand.textContent =
        primaryOperand.dataset.primaryOperand.replaceAll(
          thousandSeparator,
          "$&,"
        );
    }
    // check if need to add thousand separator after each number input
    // add separator to number if applicable
  }
  if (e.target.hasAttribute("data-operation")) {
    console.log("operation");
    // if operationSign and secondaryOperand are null
    //  take primaryOperand and put is as secondaryOperand
    //  take the sign and add it as operationSign
  }
  if (e.target.hasAttribute("data-delete")) {
    console.log("delete");
    // pop the last digit from primaryOperand (careful with separators)
    // when all empty output O
  }
  if (e.target.hasAttribute("data-equals")) {
    console.log("equals");
    // edge case when there is no secondary operand
  }
  if (e.target.hasAttribute("data-all-clear")) {
    console.log("all-clear");
    // clear primaryOperand
    // clear secondaryOperand
    // clear operationSign
  }
});
