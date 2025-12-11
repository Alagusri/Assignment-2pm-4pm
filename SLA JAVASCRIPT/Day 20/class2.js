class Animal {
    speak(){
        console.log("animal speaks");
    }
}

class Dog extends Animal{
    bark(){
        console.log("dogs bark");
    }
}
const d = new Dog();

d.speak()
d.bark()