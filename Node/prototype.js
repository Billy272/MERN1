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

Zoe.sleep();