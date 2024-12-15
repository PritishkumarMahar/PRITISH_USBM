//Question 3:-
// Write a JavaScript program that calculates the total amount a customer needs to pay after adding sales tax to the product price. The program should:

// Define a variable productPrice for the cost of the product.
// Define a variable salesTaxRate to store the sales tax percentage (e.g., 8%).
// Calculate the tax amount and the total price (product price + tax).
// Display the total price after adding sales tax using console.log.

// Declare the product price
let productPrice = 2999;

// Declare the sales tax rate
let salesTaxRate = 8;

// Calculate the tax amount
let taxAmount = (productPrice * salesTaxRate) / 100;

// The total price
let totalPrice = productPrice + taxAmount;

console.log(`The total price after adding sales tax is: ${totalPrice}`);
