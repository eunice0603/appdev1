// Greeting
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Eunice")); // Hello, Eunice!

// Square
const square = (num) => num * num

console.log(square(3)) // 9

// Calculator
function calculator(a, b) {
    console.log("Sum:", add(a, b))
    console.log("Product:", multiply(a, b))
}

calculator(3, 6)