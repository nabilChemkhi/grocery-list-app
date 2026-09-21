const name = "nabil";

//name = "bill"; 
/* This will throw an error because 'name' is a constant and cannot be reassigned:  
at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47*/

let age = 30;
age = age + 1; 

if (age > 18) {
    let isAdult = true;
    console.log(isAdult);
}

console.log(isAdult); // This will throw an error because 'isAdult' is block-scoped and not 
                      // accessible outside the if statement.
/*at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47*/