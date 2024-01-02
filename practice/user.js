var userInput = prompt("Enter your name: ");
var userAge = prompt("Enter your age: ");

console.log("You are "+userInput);

//use parse int
var userAge = parseInt(userAge);

if (!isNaN(userAge)){
    console.log("Your age is "+userAge);
} else {
    console.log("Invalid input");
}