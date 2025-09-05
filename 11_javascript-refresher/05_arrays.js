const foods = ["buldak", "chips", "biscuit"]
console.log(foods)

foods.push("veggies") // Add
console.log(foods)

foods.shift() // Remove
console.log(foods)

// for...of
for (let food of foods) {
    console.log("Fave:", food)
}

// .map()
const likes = foods.map(food => "I like " + food)
console.log(likes)