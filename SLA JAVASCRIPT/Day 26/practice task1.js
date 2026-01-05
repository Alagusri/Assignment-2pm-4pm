let globalVar = "I am global";

function testScope() {
  let functionVar = "I am function scoped";

  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar);      
  }

  console.log(functionVar);    // Accessible (function scope)
  console.log(globalVar);      // Accessible (global scope)
  
}

testScope();
