function outer() {
  let name = "Closure Scope";
  function inner() {
    console.log(name); 
  }
  return inner;
}

const closureFunc = outer();
closureFunc(); 
