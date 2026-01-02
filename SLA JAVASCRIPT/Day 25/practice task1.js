function testScope() {
  let a = 10;        
  if (true) {
    var b = 20;     
    const c = 30;   
  }
  console.log(a);   
  console.log(b);    
  
}
testScope();
