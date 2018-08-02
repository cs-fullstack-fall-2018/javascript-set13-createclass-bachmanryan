class onlineSale{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }
    printAllAttributes(){
        alert("Item in cart: " + this.name + " " + "Price: " + this.price + " " + "Quantity: " + this.quantity);
    }

}

function main(){
    var item1 = new onlineSale("Statues", 1000, 3);
    var item2 = new onlineSale("Garden Gnomes", 50, 10);
    console.log(item1.printAllAttributes());
    console.log(item2.printAllAttributes());
}

main();