// let anArray = [10, 9, 8, 7, 6, "Hello", true, 3.1412, true, false, true, true]
// console.log("Length of anArray: ", anArray.length)
// console.log("Last item of anArray: ", anArray[anArray.length - 1])

let fruits = ["Apple", "Banana", "Grapes", "Watermelon"]
// console.log(fruits)
// console.log(fruits[0])

//Before push
// console.log(fruits[fruits.length - 1])

// // Push - Adds an element at the end of the array
// fruits.push("Orange")

// //After push
// console.log(fruits[fruits.length - 1])

// //Pop - Removes the last element from the array
// fruits.pop()

// //After pop
// console.log(fruits[fruits.length - 1])

// //Splice - Remove element at position followed by movement to the right
// fruits.splice(0, 1)

// //After Splice
// console.log(fruits)

// Quick Exercise - Format this in a nice string
// Fruit at position 1 is "fruit"
fruits.forEach(function(fruit, i){
    console.log("Fruit at position ", i, " is ", fruit)
})

for(let fruit of fruits){
    console.log(fruit)
}
console.log("=========================")
//Objects
//Objects are just arrays with an identifier for their index.
let myProfile = {
    name: "Paul",
    age: 27,
    email: "paul@forward.edu.my",
    hobbies: ["Gaming", "Coding", "Reading"]
}

console.log(myProfile.name)
console.log(myProfile['name'])

//Access myProfile's age
console.log(myProfile.age)
//Quick exercise - Log the first hobby.
console.log(myProfile.hobbies[0])
/*
Mini Activity
1. Create an array of 5 of your favorite movies.

2. Log the first and last movie.

3. Use push() to add one, and pop() to remove one.

4. Create an object profile with your name, age, and an array of 3 hobbies.

5. Log your second hobby.
*/

let favMovies = ["HTTYD", "HSM", "Tenet", "Avengers: Endgame", "No Game No Life: Zero"]
console.log(favMovies[0])
console.log(favMovies[favMovies.length - 1])

favMovies.push("The Hobbit")
favMovies.pop()

let newProfile = {
    name: "Paul",
    age: 27,
    movies: favMovies
}

console.log(newProfile.movies[1])