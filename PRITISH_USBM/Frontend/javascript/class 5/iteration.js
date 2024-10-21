// Iteration :

// Print from 1 to 10;
// let start_num = 1;
// let next_num1 = start_num + 1;
// let next_num2 = start_num + 1;
// let end_num = 10;
// console.log(start_num);
// console.log(end_num);
// console.log(next_num2);
// let num = 2;
// console.log(num);
// console.log(num);
// console.log(num);

// While loop :

// syntax:
// while (condition) {
// code to be executed
// }

// Ex: Print from 1 to 10;

// let num = 1; // declartion
// console.log("Global:", num); // print 1

// while (num <= 10) {
//   console.log("Block:", num); // print
//   num++;
// }

// console.log("Global:", num); // print 11

// Do .. while loop :
// syntax :
// do {
// code to be executed
// } while(condition)

// Ex: Asking for user to the correct input

// let userAns;

// do {
//   userAns = prompt("What is the capital of Odisha?");
//   //   console.log("Wrong");
// } while (userAns !== "Bhubaneswar");

// console.log("Correct");

// console.log("Bhubanewsar" !== "Bhubanewsar"); // true

//print the number between 1 to 5  including 0.

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//print the number between 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// print the number between 5 to 1
// for (let i = 5; i>=1; i--) {
//     console.log(i);
//   }

// generate a random number and add upto 5 number

// let sum = 0;
// for (i = 1; i <= 5; i++) {
//   // Generate a random number between 0 and 1, then multiply by 100 for a range of 0 to 100
//   let randomNumber = Math.floor(Math.random() * 10);
//   sum += randomNumber; // Add the random number to the sum
// }
// console.log(`The random sum is  ${sum}`); // Log the total sum

// Nested Loops

// for (let i = 1; i <= 5; i++) {
//   for (j = 1; j <= 2; j++) {
//     console.log(j);
//   }
//   console.log(i);
// }

//Example
//pattern printing

for (let i = 1; i <= 5; i++) {
  let pattern = ""; // empty spacess
  for (j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
for (let i = 1; i <= 5; i++) {
  let pattern = ""; // empty spacess
  for (j = 5; j >= i; j--) {
    pattern += "*";
  }
  console.log(pattern);
}


