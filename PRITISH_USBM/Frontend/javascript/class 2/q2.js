//Question 2:-

// Write a JavaScript program that calculates the final price of a product after applying a discount. The program should:
// Define a variable originalPrice to store the original price of the product.
// Define another variable discount to store the discount amount.
// Calculate the final price by subtracting the discount from the original price.
// Display the discounted price using console.log.

// Declare original price and discount
let originalPrice = 1999;

let discountAmount = (originalPrice * 15) / 100;

// Declare final prices
let finalPrice = originalPrice - discountAmount;

console.log(
  `The final price after ${discountAmount} discount is: ${finalPrice}`
);
