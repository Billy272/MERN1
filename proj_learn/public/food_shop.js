class food_shop  {
    constructor() {
        this.order = 0;
    }
    order(){
        this.order++;
    }

    displayOrder() {
        console.log(`You have ordered: ${this.order}`);
    }
}

module.exports = food_shop;