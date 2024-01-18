
import { upperCase } from "upper-case";

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to Node.js!`));
}

greet("Billy");
export default greet;