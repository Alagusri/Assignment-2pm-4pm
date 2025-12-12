function user(name){
    this.name = name;
}
user.prototype.sayHi= function(){
    console.log("Hi" + this.name);
}
