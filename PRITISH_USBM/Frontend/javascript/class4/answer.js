// ->  Tasks

// 1. Task: Generate a random number between 1 and 100.
let random_num = Math.floor(Math.random() * 100);
console.log("The random number between 1 to 100 is :" + random_num); //47

// 2. Task: Round the number 6.75 down to the nearest integer.
let a = 6.75;
console.log("The nearest integer of 6.75 is : " + Math.round(a)); //7

// 3. Task: Round the number 9.12 up to the nearest integer.
let b = 9.12;
console.log("The nearest integer of 9.12 is : " + Math.round(b)); // 9

// 4. Task: Generate a random number between 5 and 27 (inclusive).
let min = 5;
let max = 27;
let number = max - min + 1;
random_number = Math.floor(Math.random() * number + min);
console.log("The random number between 5 to 27 is : " + random_number); //14

// 5. Task: Add 5 days to the current date.
let current_date = new Date();
console.log(
  `current date is ${current_date}  and after adding 5 days more then it will be ${
    current_date.getDate() + 5 //after adding 5 days more then it will be 21
  }`
);

// 6. Task: Get the number of milliseconds between January 1, 2023, and today.
let startdate = new Date(2023, 1, 1);
let today = new Date();
let millisecond = today - startdate;
console.log("The millisecond between startdate and today is :" + millisecond); // 53867764557

// 7. Task: Get the current hour.
let current_hour = new Date();
console.log("The current hour is :" + current_hour.getHours()); //11

// 8. Task: Create a date for January 1, 2025.
let creat_date = new Date(2025, 1, 1);
console.log("Create a date for 1st january 2025 is  : " + creat_date.getDate()); //1

// 9. Task: Get the current day of the week (0 for Sunday, 6 for Saturday).
let data = new Date();
let current_day = data.getDay();
console.log("The current day is : " + current_day); // 3

// 10. Task: Get the current month (0-11).
let month = new Date();
let current_month = month.getMonth() + 1;
console.log("The current month is : " + current_month); // 10

// 11. Task: What is the difference between getDate() and getDay()?
// 1. getDate(); :    Returns the day of the month (1-31) for the specified date.
//                    For example, if the date is October 16, 2024, getDate() would return 16.

//2. getDay();   :    Returns the day of the week (0-6) for the specified date, where 0 represents Sunday
//                    and 6 represents Saturday.
//                    For the same date, October 16, 2024, if it's a Wednesday, getDay() would return 3.

//---------------------------------------          -------------------------------------------//

//

console.log("Enter a number (1-7):");

// Read input from the keyboard

process.stdin.on("data", (data) => {
  const week = data.toString().trim();

  let day;
  switch (week) {
    case "1":
      day = "Monday";
      break;
    case "2":
      day = "Tuesday";
      break;
    case "3":
      day = "Wednesday";
      break;
    case "4":
      day = "Thursday";
      break;
    case "5":
      day = "Friday";
      break;
    case "6":
      day = "Saturday";
      break;
    case "7":
      day = "Sunday";
      break;
    default:
      day = "Invalid input. Please enter a number between 1 and 7.";
      break;
  }
  console.log(day);
  process.exit();
});
