x = 0
while(x <= 5){
    console.log("x is currently ", x)
    x = x + 2 //Increment x by 1
}
console.log("================================")

// let userNumber = prompt("Type a number")
// counter = 0

// while(counter < userNumber){
//     console.log("counter is currently ", counter)
//     // counter = counter + 2 //Increment x by 1
//     // counter += 2 //Shorthand method for incrementing by whatever number is on the right
//     counter++ //Shorthand method for incrementing by 1
// }

for(i = 0; i <= 7; i++){
    console.log("i is currently ", i)
}

console.log("==============================")


// This loop guarantees at least ONE iteration
let y = 10
do{
    console.log("y is currently ", y)
    y++
}while(y < 4)