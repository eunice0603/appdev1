const hobbies = ["Reading", "Writing", "Sleeping"]

hobbies.map(hobby => console.log(hobby))

// Destructuring
const student = { myname: "Eunice", age: 20 }

let { name, age } = student
console.log(myname)
console.log(age)

// Spread operator
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]

console.log(newNumbers)