const food_shop = require("./food_shop");

const ordered = new food_shop();

ordered.on("Order food", (quantity, size) => {
    console.log(`Order accepted of ${quantity} pieces,the size is ${size}. Food on delivery`);
});

ordered.order();
ordered.displayOrder();
//use of emitter
// const EventEmmiter = require("node:events");

// const emmiter  = new EventEmmiter();

// emmiter.on("Order food", (quantity, size)=> {
//     console.log(`Order accepted of ${quantity} pieces,the size is ${size}. Food on delivery`);
// });

// emmiter.on("Order food", (size) => {
//     if(size === "large"){
//         console.log("You get a free drink and an extra burger.");
//     } else if (size === "medium"){
//         console.log("You get a free drink.");
//     } else {
//         console.log("Thank you from buying from us.");
//     }
// })

// emmiter.emit("Order food", 4, "large");