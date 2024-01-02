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
//sorting values before using concat
const numArray = [4, 5, 2, 1, 6, 3];

function sortedArray() {
    return [].concat(numArray).sort();
}

console.log(sortedArray());
