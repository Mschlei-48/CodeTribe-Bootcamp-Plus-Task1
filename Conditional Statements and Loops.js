// Exercise 1: Temperature check
// 1. Write a code using if else statements to check the 
// temperature and print a message based on the following 
// conditions:
// • Ifthe temperature is below 0, print"It's freezing!"
// • Ifthe temperature is between 0 and 15, print"It's cold."
// • Ifthe temperature is between 16 and 25, print"It's mild."
// • Ifthe temperature is above 25, print"It's warm."

let temp=12;
if(temp<0){
    console.log("It's freezing");
}
else if(temp>=0 && temp<=15){
    console.log("It's cold");
}
else if(temp>=15 && temp<=25){
    console.log("It's mild");
}
else{
    console.log("It's warm");
}

// 2. Re-write the code using switch statements. 
// Npte that switch statements are different from if statements. They compare the value you give to the case conditions.
// So fi you are to give temp to the siwtch statement, then the switch statement will look for the temp value from the case conditions
// And if the temp value is no found, then the default statement will be printed.
// So to be safe, give a true value to the switch statement, so taht when it checks the case conditions, and finds a case condiotn 
// that evaluates to true, it then prints the statement of that case conditions.
// So in summary, with switch statements, you pass a value and then the swirch statements are cjecked to see if they match with the given value, and if they do, a statement of that case is printed. 
switch(true){
    case 0:
        console.log("It's freezing");
        break;
    case temp>=0 && temp<=15:
        console.log("It's cold");
        break;
    case temp>=15 && temp<=25:
        console.log("It's mild");
        break;
    default:
        console.log("It's warm");
}


// Exercise 2: Divisibility Check
// 1. Write a code using if else statements to check if a number is 
// divisible by 2, 3, or both:
// • Ifthe numberis divisible both by 2 and 3, print"Divisible 
// by both."
// • If the number is divisible by only 2, print "Divisible by 2."
// • If the number is divisible by only 3, print "Divisible by 3."
// • If the number is not divisible by either, print "Not 
// divisible by 2 or 3."

let num=12;
if(num%2===0 && num%3===0){
    console.log("Divisible by both.");
}
else if(num%2===0){
    console.log("Divisible by 2.");
}
else if(num%3===0){
    console.log("Divisible by 3.");
}
// 2. Re-write the code using switch statements. 
switch(true){
    case (num%2===0 && num%3===0):
        console.log("Divisible by both.");
        break;
    case (num%2===0):
        console.log("Divisible by 2.");
        break;
    case (num%3===0):
        console.log("Divisible by 3.");
        break;
}



// Exercise 3: For loops
// 1. Print numbers from 1 to 10.

for(let i=1;i<=10;i++)
    {
        console.log(i);
    }
// 2. Print all even numbers between 1 and 20.

for(let i=1;i<=20;i++){
    if(i%2===0){
        console.log(i);
    }
}
// 3. Calculate the sum of all numbers from 1 to 100 and print the 
// result. Hint:‘+=’

let sum=0
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log("Sum of numbers from 1-100:",sum);
// 4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, 
// print each element to the console.

const numbers=[1,2,3,4,5];
for(let i=0;i<(numbers.length);i++){
    console.log(numbers[i]);
}
// 5. const numbers = [3, 7, 2, 5, 10, 6].Giventhe array of numbers, 
// find and print the largest number.
const number=[3,7,2,5,10,6];
big=0;
for(let i=0;i<number.length;i++){
    if(number[i]>big){
        big=number[i];
    }
}
console.log("The largest number in the array is: ",big);


// Exercise 4: While loops
// 1. Print numbers from 1 to 10.

let i=1;
while(i<=10){
    console.log(i);
    i+=1;
}
// 2. Print all even numbers between 1 and 20.

i=1;
while(i<=20){
    if(i%2==0){
        console.log(i); 
    }
    i+=1;
}
// 3. Calculate the sum of all numbers from 1 to 100 and print the 
// result.

i=1;
sum=0;
while(i<=100){
    sum+=i;
    i+=1;
}
console.log(sum);
// 4. Print all multiples of 5 less than 50.

i=1;
while(i<50){
    if(i%5==0){
        console.log(i);
    }
    i+=1;
}


// Exercise 5: Do While loops
// 1. Print numbers from 1 to 10.

i=1;
do{
    console.log(i);
    i+=1;

}while(i<=10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the 
// result.

i=1;
sum=0;
do{
    sum+=i;
    i+=1;

}while(i<=100);
console.log(sum);
// 3. Prompt the user to enter a number greater than 10. Keep 
// asking untilthey enter a valid number.

num=prompt("Please entera number  greater than 10: ");
while(num<=10){
    num=prompt("Please enter a number  greater than 10: ");
}


// 4. Create a simple guessing game where the user must guess a 
// number between 1 and 10. The game continues until the user 
// guesses the correct number.


num=4;
guess_num=prompt("Enter a number you have guessed: ");
while(num!=guess_num){
    guess_num=prompt("Enter a number you have guessed: ");
}
console.log("Good guess!");

