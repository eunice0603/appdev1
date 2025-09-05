// One parameter
const greet = myName => "Hello, " + myName
console.log(greet("Eunice"))

// Implicit return
const square = n => n * n
console.log(square(5))

// No parameters
const sayHi = () => {
  console.log("Hi!")
}
sayHi()