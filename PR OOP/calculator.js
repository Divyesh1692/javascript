class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.clear();
  }

  clear() {
    this.display = "";
    this.updateDisplay();
  }

  delete() {
    this.display = this.display.toString().slice(0, -1);
    this.updateDisplay();
  }

  appendValue(value) {
    if (value === "." && this.display.includes(".")) return;
    this.display = this.display.toString() + value.toString();
    this.updateDisplay();
  }

  calculate() {
    try {
      this.display = eval(this.display);
      this.updateDisplay();
    } catch {
      this.display = "Error";
      this.updateDisplay();
    }
  }
  percentage() {
    try {
      this.display = (eval(this.display) / 100).toString();
      this.updateDisplay();
    } catch {
      this.display = "Error";
      this.updateDisplay();
    }
  }

  updateDisplay() {
    this.displayElement.innerText = this.display || "0";
  }
}

const displayElement = document.getElementById("display");
const calculator = new Calculator(displayElement);
