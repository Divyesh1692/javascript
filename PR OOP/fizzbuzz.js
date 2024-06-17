class FizzBuzz {
  print() {
    let n = "";
    for (let i = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        n += "FizzBuzz\n";
      } else if (i % 5 == 0) {
        n += "Buzz\n";
      } else if (i % 3 == 0) {
        n += "Fizz\n";
      } else {
        n += i + "\n";
      }
    }
    console.log(n);
  }
}

let numbers = new FizzBuzz();
numbers.print();
