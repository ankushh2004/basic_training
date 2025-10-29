function createCalculator() {
  let result = 0;

  const calculator = {
    add(n) {
      if (typeof n !== "number" || isNaN(n)) {
        console.warn("Invalid input for add:", n);
        return this;
      }
      result += n;
      return this;
    },

    sub(n) {
      if (typeof n !== "number" || isNaN(n)) {
        console.warn("Invalid input for sub:", n);
        return this;
      }
      result -= n;
      return this;
    },

    mul(n) {
      if (typeof n !== "number" || isNaN(n)) {
        console.warn("Invalid input for mul:", n);
        return this;
      }
      result *= n;
      return this;
    },

    div(n) {
      if (typeof n !== "number" || isNaN(n)) {
        console.warn("Invalid input for div:", n);
        return this;
      }
      if (n === 0) {
        console.warn("Division by zero ignored");
        return this;
      }
      result /= n;
      return this;
    },

    value() {
      const temp = result;
      result = 0;
      return temp;
    },
  };

  return calculator;
}

// Example usage
const calc = createCalculator();
console.log(calc.add(5).sub(2).mul(3).div(2).value()); 
console.log(calc.add(10).add(5).value()); 
