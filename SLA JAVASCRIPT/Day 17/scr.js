//var name= "sri"
//console.log(name);

//what is a scope ?
//scope determines the accessibility (visibility) of variables

//localStorage, global scope

    //var name= "alagu"
    //redeclaring the variable
    //var name="sri"
    //reassigning the variable
    //name= "alagu sri"
    //console.log(name);

    //let 
    //block scope
   // {
     //   let ar="hello world";
       // console.log(ar);

    //}
    //let ar="hello again"
    //console.log(ar);

    //reassigning the variable

    //ar="hello world"
    //console.log(ar);
   // most commonly used way to declare a variable

    //const
    //block scope
    //cannot be reassigned
    //must be intialized at the time of Declaration
     //const pi=3.14;
//number
//let age=21;
//let price=19.99;
// string
//let name="sri"

//boolean
//let isStudent=true;
//let isLoggedIn=false;

//null

//let data=null;
//console.log(data);

//undefined

//let result;
//console.log(result);

//symbol

//let id=symbol("12345");
//let id2=symbol("12345");

//console.log(id === id2); //false

//bigint

//let bigNumber=900724746778990n;
//let a=1n;

//console.log(bigNumber + a);

//object

// let object=
//{
//    name:"sri",
//    age:21,
//    isadmin:true
//}

//console.log(user.name);
//console.log(user.age);

//Array

//let colors=["red" , "green" , " blue" , 123, true, null, undefined, {name:"test"}];

//console.log(typeof colors);

//functions greet (a,b)
//{
//    retutn (a + b)
//}
//console.log(greet(10,40));

const numbers =[1,2,3,4,[55,66,77,88,[999,888,777,666,[6.8]]],6]

console.log(numbers[4][4][4][4]));

//operators
 //arithmetic operator
 let a=10;
 let b=3;
console.log("addition:" + (a+b));
console.log("subtraction:" + (a-b));
console.log("multiplication:" + (a*b));
console.log("division:" + (a/b));
console.log("modulus:" + (a%b));
console.log("exponentiation:" + (a ** b));
console.log("increment:" + (a++));
console.log("decrement:" + (--b));

//assignment operator
let a = 10;
let b = 45;
let c = "45";

console.log(c === b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a <= b);

//logical operator

//&& (AND)
console.log( (a < b) && (c === b));

//|| (OR)
console.log((a > b)||(c === b));

//! NOT
console.log(a & b); //AND
console.log(a | b);//OR
console.log(a ^ b);//
console.log(~a);//
console.log(a << 2);//
console.log(a >> 2);//
console.log(a >>> 2);//



