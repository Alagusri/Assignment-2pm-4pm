class Product {
  constructor(name, price) {
    this.name = "Laptop";
    this.price = 50000;
  }

  discountedPrice(discountPercent) {
    return this.price - (this.price * discountPercent / 100);
  }
}

const p1 = new Product("Laptop", 50000);
console.log(p1.discountedPrice(10));
