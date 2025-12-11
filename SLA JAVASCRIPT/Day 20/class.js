class car {
    constructor (brand , year) {
        this.brand = brand
        this.year = year
    }
    start() {
        console.log(this.brand);
    }
    Off() {
        console.log(this.year);
    }
}

const c1 = new car("BMW" , 2020)

c1.start()
c1.Off()

