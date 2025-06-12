//How we usually name our stuff
let this_is_my_name //Snake case
let thisIsMyName //Camel case
let ThisIsMyName //Caps for words

//       Function name | Argument / Variable
function sayHello     (helloName){
    console.log("Hello " + helloName);
}

sayHello("John")
//     Variable name  | Arguments
function addTwoNumbers(num1, num2){
    // console.log(addTwoNumbers) <---- Recursive function
    // console.log(num1 + num2)
    return num1 + num2
}

// let sum = addTwoNumbers(2, 3)
// console.log(sum)

//Try for yourself:-
//Can you do console.log(addTwoNumbers(3, 3))??
console.log(addTwoNumbers(3, 3))

//Mini exercise
//Write a function for subtraction and subtract 7 from 10 (Use the return keyword)

function subtractTwoNumbers(num1, num2){
    return num1 - num2
}

console.log(subtractTwoNumbers(7, 10))

// Function Expressions
const multiply = function(num1, num2){
    return num1 * num2
}
console.log(multiply(2,2))

// Mini exercise
// Use function expressions to do a divide.
// Divide 25 by 5
const divide = function(num1, num2){
    return num1 / num2
}
console.log(divide(25, 5))

//Arrow Functions
// Shorthand arrow function
let myFunction = (a, b) => a * b;

//If you don't put let/const, it will default to let (let means it's a variable, can be changed.)
hello = () => "Hello World"
hello = () => "I am Paul"

console.log(hello())

//What is Scope???
//Think of it as the accessibility of your "variables" or "arguments"

//Global scope
let global = "Outside (Global) Scope"

let functionScope = () => {
    let insideFunctionScope = "Inside (Function) Scope"
    // console.log(global)
    // console.log(insideFunctionScope)
}

functionScope()

console.log(global)
// console.log(insideFunctionScope)

// let tryAccessOtherFunctionVar = () {
//     console.log(insideFunctionScope)
// }

//Mini Activity
// 1. Create a function that squares a number.
// 2. Create a function that returns true if a number is even.


//Partial Answers
// num * num
// Either write an if else statement, OR use %
// for % method, this is what you need
// num % 2 == 0

function isOdd(num){
    return num % 2 == 1
}

console.log(isOdd(5))

let square = (num) => num * num;
console.log(square(3))

//Ternary Operator
// Condition ? True case : False case
// num < 3 ? "num is smaller than 3" : "num is not smaller than 3"
//Think of it as a shortcut for if else statements
let isEven = (num) => num % 2 == 0 ? num + " is Even" : num + " is Odd";
isEven = (num) => {
    return num % 2 == 0 ? num + " is Even" : num + " is Odd";
}
console.log(isEven(8)) // True
console.log(isEven(9)) // False