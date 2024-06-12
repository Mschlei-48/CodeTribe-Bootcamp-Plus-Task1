// Exercise 1: Numbers
// 1. Declare a number variable and assign it a value.
let num=48;
// 2. Declare a number variable and assign it a floating number.
let num2=12.3;
// 3. Perform addition, subtraction, multiplication, division, 
// modulus and exponentiation with number variable and 
// another number.
let add=num+num2;
let diff=num=num2;
let prod=num*num2;
let quot=num/num2;
let mod=num%num2;
let expon=num** num2;
// 4. Print all your variables.
console.log(num);
console.log(num2);
console.log(add);
console.log(diff);
console.log(prod);
console.log(quot);
console.log(mod);
console.log(expon);




// Exercise 2: Boolean and Operators
// 1. Use comparison operators to compare two numbers and
// store the results in boolean variables.

let bool_results=num>num2;
// 2. Declare two variables x and y with the values 8 and 12 
// respectively.
// Use comparison operators to check and print the following:
// • If x is greater than y.
// • If x is less than or equalto y.
// • If x is equalto y.
// • If x is not equalto y.
let x=8;
let y=12;
let results1=x>y;
let results2=x<=y;
let results3=x===y;
let results4=x!==y;
console.log("If x is greater than y: ",results1);
console.log("If x is less than or equalto y: ",results2);
console.log("If x is equalto y: ",results3);
console.log("f x is not equalto y: ",results4);
// 3. Declare the variables a and b with values true and false, 
// determine and print the result of the following logical 
// operations:
// • a AND b
// • a OR b
// • NOT a
let a=true;
let b=false;
and_op=a&&b;
or_op=a||b;
not_a=!a;
console.log("a AND b: ",and_op);
console.log("a OR b: ",or_op);
console.log("NOT a: ",not_a);
// 4. Declare variable p and assign it a value of 10. Use the 
// following assignment operators to modify the value of p with 
// any number and print the result each time:
// • +=
// • -=
// • *=
// • /=
// • %=
let p=10;
p+=2;
console.log("p+=2: ",p);
p-=3;
console.log("p-=3: ",p);
p*=3;
console.log("p*=3: ",p);
p/=2;
console.log("p/=2: ",p);
p%=4;
console.log("p%=4: ",p);
