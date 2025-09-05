// Object destructuring
const person = {
  name: "Eunice",
  age: 20
}

const { name, age } = person
console.log(name)
console.log(age)

// Array destructuring
const hobbies = ["reading", "writing"]

const [hobby1, hobby2] = hobbies
console.log(hobby1)
console.log(hobby2)

// Function parameter destructuring
function printName({ name }) {
  console.log(name)
}

printName(person)