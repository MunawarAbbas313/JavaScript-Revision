// Const , let , var

const name = "John";

let age = 20;

var city = "New York";

console.table([name, age, city]);


//Here name will not change because it is const
//name = "Munawar";
age = 21;
city = "Islamabad";

console.table([name, age, city]);

// Var is not used in modern javascript because of block scope and functional scope
// example

{
  var x = 10;
}

console.log(x);


// Here we have changed x outside {} but still it is showing 10 because var is not block scoped it is function scoped
x = 12;


console.log(x);

