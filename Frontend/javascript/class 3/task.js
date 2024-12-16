console.log("Task 1:-->");
// Task 1:
// Given total_bill, discount_start_price if you satisfy the condition Print discount

let total_bill = 9999;

if (total_bill >= 5999) {
  let discount_start_price = total_bill * (20 / 100);
  console.log(total_bill - discount_start_price);
}

console.log("\n");
console.log("\n");

console.log("Task 2:-->");
// Task 2:
// Check if (male) and then check (22+) then he can able to marry

let gender = "male";
let age = 29;
if (gender === "male") {
  if (age >= 22) {
    console.log("He can able to Marry");
  } else {
    console.log("He can not able to Marry");
  }
}

console.log("\n");
console.log("\n");

console.log("Task 3:-->");
// Task 3:

let a = 80;
if (a >= 60) {
  console.log("Senior Citizen");
} else if (a >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

console.log("\n");
console.log("\n");

console.log("Task 4:-->");
// Task 4:
// Check (a,e,i,o,u) or consonant

let char = "v";
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

console.log("\n");
console.log("\n");

console.log("Task 5:-->");
// Task 5:
// Print Week of the day

let week = 1;

switch (week) {
  case 1:
    console.log("Sunday");
  case 2:
    console.log("Monday");
  case 3:
    console.log("Tuesday");
  case 4:
    console.log("Wednessday");
  case 5:
    console.log("Thrusday");
  case 6:
    console.log("Friday");
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
}

console.log("\n");
console.log("\n");

console.log("Task 6:-->");
// Task 6:
// Print All Month

let Month = 1;

switch (Month) {
  case 1:
    console.log("January");
  case 2:
    console.log("February");
  case 3:
    console.log("March");
  case 4:
    console.log("April");
  case 5:
    console.log("May");
  case 6:
    console.log("June");
  case 7:
    console.log("July");
  case 8:
    console.log("August");
  case 9:
    console.log("September");
  case 10:
    console.log("October");
  case 11:
    console.log("November");
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid");
}
