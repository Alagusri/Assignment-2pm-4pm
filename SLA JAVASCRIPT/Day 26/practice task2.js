function createUser() {
  let name = "Alagusri";

  return function() {
    console.log("Hello " + name); 
  };
}

const user = createUser();
user(); 
