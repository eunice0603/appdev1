// Difference between == and ===
console.log("5" == 5) // true
console.log("5" === 5) // false

// undefined vs null
let x // undefined
let y = null

console.log(x)
console.log(y)
console.log(x == y) // true
console.log(x === y) // false, different types

// this with regular function vs arrow function
const person = {
  name: "Eunice",
  
  regularFunc: function() {
    console.log("Regular:", this.name)
  },
  
  arrowFunc: () => {
    console.log("Arrow:", this.name)
  }
}

person.regularFunc() // this refers to the object
person.arrowFunc() // it is undefined, as arrow functions do not have their own this

// copying arrays
const arr1 = [1, 2, 3]
const arr2 = arr1

arr2.push(4)
console.log(arr1) // arr1 is also changed
console.log(arr2)

const arr3 = [1, 2, 3]
const arr4 = [...arr3]

arr4.push(4)
console.log(arr3) // this is unchanged
console.log(arr4)