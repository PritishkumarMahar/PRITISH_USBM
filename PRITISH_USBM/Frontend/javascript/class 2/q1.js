// Question-1:

// Write a JavaScript program that calculates the total bill for a restaurant order. The program should do the following:

// Define two variables foodPrice and drinkPrice and assign them any values of your choice.
// Calculate the total bill by adding foodPrice and drinkPrice.
// Add a 10% tip based on the total bill.
// Display the final amount (total bill + tip) using console.log.

//Answare
// The prices of food and drink
let foodPrice = 1000;
let drinkPrice = 90;

// The total bill
let totalBill = foodPrice + drinkPrice;

// Tip
let tip = totalBill * 0.1;

// The final amount (total bill + tip)
let finalAmount = totalBill + tip;

console.log("The final amount (including tip) is: ${finalAmount}");
