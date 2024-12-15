// math in javascript

let num1 = 25;
let num2 = 55.05;
let addition = num1 + num2;
console.log(addition); //80.5

// round 

console.log(Math.round(addition)); //80
console.log(Math.round(12.000012));
console.log(Math.PI);

// square root

console.log(Math.round(num1 ** 2)); //625
console.log(Math.pow(16, 2)); //265
console.log(Math.pow(10, 5)); //100000

console.log(Math.sqrt(16)); //4 Square Root

// Ceil and floor value
console.log(Math.ceil(98.75));

console.log(Math.floor(98.75));

console.log(Math.ceil(325.49)); // ceil value is 326

console.log(Math.floor(325.49)); // floor value is 325

console.log(Math.round(325.49)); // round value is 325
console.log(Math.round(325.5)); // round value is 326

// max
console.log(Math.max(10, 20, 30, 40));
// min
console.log(Math.min(10, 20, 30, 40));

//Absolute
console.log(Math.abs(-10)); // 10
console.log(Math.abs(-0.00005)); // 0.00005

// Random

console.log(Math.random()); //It gives Random output

// write a programk to print the random number between 5 to 27

// console.log(Math.random());

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let randomNumber = getRandomInt(5, 27);
// console.log(randomNumber);

// console.log(Math.floor(Math.random() * (27 - 5 + 1)) + 5);
// console.log(Math.random()*(27-5+1)+5);

// (end-start)+1 -> to findout the number

let start = 5;
let end = 27;

let totalnumber = end - start + 1; //
// console.log(Math.random()*totalnumber);

let random_number = Math.floor(Math.random() * totalnumber + start);

console.log(random_number);

// Dates
// To creat date object

let date = new Date();
console.log(date); //2024-10-15T05:42:42.155Z(UTC/ISO)
console.log(date.toISOString());
console.log(date.getFullYear()); // 2024
console.log(date.getDate()); // 15
console.log(date.getMonth()); // 9 (it should be 10 if it gives 9 its also correct because our calculation starts from zero )
console.log(date.getMonth() + 1); // 10 october

console.log(date.getHours()); // 11
console.log(date.getMinutes()); // 21
console.log(date.getSeconds()); // 32
console.log(date.getDay()); //2 --> tuesday

