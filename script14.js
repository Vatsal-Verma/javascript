class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price}`);
    }
    calcateTotal(saletax){
        return this.price + (this.price * saletax);
    }
}

const saletax = 100;
const product1 = new Product("vatsal", 19 );
const product2 = new Product('pant', 69);
const product3 = new Product("underwear",100);
product1.display();

// const product1.calcateTotal(saletax);
const total = product1.calcateTotal(saletax);

console.log(`total price including tax is: $${total}`);






