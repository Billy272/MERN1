//use of emitter
const EventEmmiter = require("node:events");

const emmiter  = new EventEmmiter();

emmiter.on("Order food", (quantity, size)=> {
    console.log(`Order accepted of ${quantity} pieces,the size is ${size}. Food on delivery`);
});

emmiter.emit("Order burger", 4, "large");