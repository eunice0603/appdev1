// Spread operator with array
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)

// Spread operator with object
const user = { name: "Eunice", age: 20 }
const extendedUser = { ...user, hobby: "Reading" }
console.log(extendedUser)

// Rest operator in function
function sum(...args) {
  return args.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3, 4))
console.log(sum(5, 10, 15))