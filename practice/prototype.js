function Cat(name, weight){
    this.name = name;
    this.weight = weight;
}

let Zoe = new Cat("Zoe", 5);
console.log(Zoe);

let ownProps = [];
let prototypeProps = [];

for (let property in Zoe){
    if(Zoe.hasOwnProperty(property)){
        ownProps.push(property);
    }else{
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);

Cat.prototype = {
    constructor: Cat,
    sleep: function(){
        console.log("Prrrrr");
    }
}


function Lion() { }

Lion.prototype = Object.create(Cat.prototype);
Lion.prototype.constructor = Lion;

let sironka = new Lion("Sironka", 40);
console.log(sironka);
sironka.sleep();

//create a method to check that every element in an array meets the criteria

function checkPositive(arr) {
    return arr.every(function(currentValue){
        return currentValue > 0;
    });
}   

console.log(checkPositive([1, 2, 3, -3, 5]));

