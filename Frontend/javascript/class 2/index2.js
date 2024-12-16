var city = "ANGUL";
console.log(city);

let user;
user = null;
console.log(typeof null); //Output- Object
console.log(user);

// Undefined
let data;
console.log(typeof data);
console.log(data);

//Number;
let num1 = 50;
let decimal_no = 1.0101;
let pi = 3.141;
let age = 21;
let roll_no = 23;

console.log(typeof decimal_no);
console.log(decimal_no);
console.log(typeof pi);
console.log(typeof age);

// Adition
let n1 = 29;
let n2 = 25;
let addition = n1 + n2;
console.log(addition);

// Substraction
let n3 = 80;
let n4 = 25;
let subtract = n3 - n4;
console.log(subtract);

// Multiplication
let n5 = 50;
let n6 = 75;
let multiplication = n5 * n6;
console.log(multiplication);

// Division
let n7 = 70;
let n8 = 5;
let division = n7 / n8;
console.log(division);

// Nan
let num2 = 0;
let num3 = 0;
console.log(num2 / num3);

let num4 = "pritish";
let num5 = 75;
console.log(num4, num5);

// // String = Collection of Charecters
let Sname = "Pritish";
let Mname = "Kumar";
console.log(Sname, Mname);

let myName = "Pritish kumar";
let agee = 24;
// let city = "Angul";
let roll_noo = 75;
let College = "USBM";
let Batch = "MCA(2023 - 2025)";

console.log(
  `My is ${myName} , age is ${agee} , city in ${city} , roll number is ${roll_noo} in the college ${College} and batch ${Batch}`
);

// String Manipulation
// To check the length of the string
console.log(myName.length);

// // To Replace
let my_website = "kumarsritam070@gmail.com";
console.log(my_website.replace("Pritish"));

let regd_no = " regd_no2305274075 ";
console.log(regd_no.length - 2);

// // Coercion (concatination)
let x = 100;
let y = "100";
console.log(x + y);
