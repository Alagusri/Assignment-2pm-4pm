//function:

//function can run only ween called
//can be defined anywhere in script
//good for reusability

//when used:

//button
//calculations
//validations
//repeat a task

//function expression:

//function stored in a variable is called as function expression

//greet ();
//function greet(){
//    console.log("hello world");
//}

//const show = function(){
//  console.log("function expression");
//}

//not hoisted like the function declaration
//common for callbacks in advance js

//function greet(name){
//    console.log("hello" + name);
//}
//greet("sri")

//function add (a,b){
//return a+b
//}
//let ar=(add(10,70));

//function welcome(name = "people"){
//    console.log("hello" + name);
//}
//welcome(null);

//default parameter: 

//allow you to initialize function parameters with default values if no arguments are passed or if iundefined is passed

//arrow function:

//no function keyword
//automatically returns for single-line expression
//does not have its own (this) will not work important in es6

//const greet = (a, b) => a + b

//event handling
//async programming
//timers
//array method
//key points
//js treats function as first class citizens
//function can be stores, passed, returned

//function greet() {
//   console.log("hello");
//}

//function run(callback){
//    callback();
//}
//run(greet);

//callback:

function greet(name, callback){
    console.log('hello, ${name}!');
    callback();
}
function sayGoodbye(){
    console.log("Goodbye");
}
greet("Love", sayGoodbye)

