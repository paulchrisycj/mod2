// Variables is a placeholder that contains a value, which can be changed and you can also make it NOT to be changed.
// Constants is the name for variables that cannot be changed.
let x = 5
console.log(x)

x = 7
console.log(x)

const y = 8
console.log(y)

console.log((7 + 3) * 10)

let seven = 7
let three = 3
console.log(("seven" + "three") * 10)

let banana = "Hello"
let mango = " Mango"
console.log(banana + mango)

let one = "1"
let two = "2"
console.log(one + two)

//Data TYPES
//PRIMITIVE Data-Types
//number, string, decimal (long, double), boolean
//Boolean can only hold 2 values, true OR false
//Can boolean hold undefined?
let nm = 3.1412
console.log(typeof nm)
let myBool = true
console.log(typeof myBool)

console.log("----------------------------------")

//Non-Primitive Data-Types
//Array, Object, Function
//[] Square Bracket
//() Round Bracket
//<> Angle Bracket
//{} Curly Bracket (Braces)
let anArray = [10, 9, 8, 7, 6, "Hello", true, 3.1412, true, false, true, true]
console.log("Length of anArray: ", anArray.length)
console.log("Last item of anArray: ", anArray[anArray.length - 1])
