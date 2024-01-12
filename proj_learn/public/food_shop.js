const EventEmmiter = require("node:events")


class food_shop extends EventEmmiter {
    constructor() {
        super();
        this.order = 0;
    }
    order(){
        this.order++;
        this.emit("Order food", quantity, size);
    }

    displayOrder() {
        console.log(`You have ordered: ${this.order}`);
    }
}

module.exports = food_shop;