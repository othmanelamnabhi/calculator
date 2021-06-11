export const primaryOperand = document.querySelector("[data-primary-operand]");
export const secondaryOperand = document.querySelector(
  "[data-secondary-operand]"
);
export const operationSign = document.querySelector("[data-operation-sign]");
export const thousandSeparator = /(?<!\.\d*)(\d{1,3}(?=(\d{3})+(?!\d)))/g;

export class Calculator {
  static get primaryOperand() {
    return primaryOperand.dataset.primaryOperand;
  }

  static set primaryOperand(value) {
    if (primaryOperand.textContent === "0") {
      primaryOperand.textContent = value;
      primaryOperand.dataset.primaryOperand = value;
    } else {
      primaryOperand.dataset.primaryOperand += value;
      primaryOperand.textContent =
        primaryOperand.dataset.primaryOperand.replaceAll(
          thousandSeparator,
          "$&,"
        );
    }
  }

  static get secondaryOperand() {
    return secondaryOperand.dataset.secondaryOperand;
  }

  static set secondaryOperand(value) {
    secondaryOperand.textContent = value.replaceAll(thousandSeparator, "$&,");
    secondaryOperand.dataset.secondaryOperand = value;
  }

  static get operationSign() {
    return operationSign.dataset.operationSign;
  }

  static set operationSign(value) {
    operationSign.textContent = value;
    operationSign.dataset.operationSign = value;
  }

  static clearAll() {
    primaryOperand.textContent = 0;
    primaryOperand.dataset.primaryOperand = "";
    secondaryOperand.textContent = "";
    secondaryOperand.dataset.secondaryOperand = "";
    operationSign.textContent = "";
    operationSign.dataset.operationSign = "";
  }
  // Delete the last digit from the primaryOperand and set it to 0 if empty
  static delete() {
    primaryOperand.dataset.primaryOperand =
      primaryOperand.dataset.primaryOperand.slice(0, -1);
    primaryOperand.textContent =
      primaryOperand.dataset.primaryOperand.replaceAll(
        thousandSeparator,
        "$&,"
      );
    if (primaryOperand.textContent.length === 0) {
      this.primaryOperand = 0;
    }
  }
  // Find the operation sign clicked and run the matching operation
  static equals(sign) {
    switch (sign) {
      case "*":
        return (
          parseFloat(primaryOperand.dataset.primaryOperand) *
          parseFloat(secondaryOperand.dataset.secondaryOperand)
        );
        break;
      case "÷":
        return (
          parseFloat(secondaryOperand.dataset.secondaryOperand) /
          parseFloat(primaryOperand.dataset.primaryOperand)
        );
        break;
      case "+":
        return (
          parseFloat(secondaryOperand.dataset.secondaryOperand) +
          parseFloat(primaryOperand.dataset.primaryOperand)
        );
        break;
      case "-":
        return (
          parseFloat(secondaryOperand.dataset.secondaryOperand) -
          parseFloat(primaryOperand.dataset.primaryOperand)
        );
        break;
    }
  }
}
