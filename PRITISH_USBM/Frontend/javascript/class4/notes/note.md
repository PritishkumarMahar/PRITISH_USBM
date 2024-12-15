## Basic Questions

1. What does Math.floor() do in JavaScript?

    <!-- Math.floor(): -->

   . This function rounds a number down to the nearest integer.
   For example : Math.floor(4.7) will return 4,
   Math.floor(-4.7) will return -5.

2. How would you generate a random number between 1 and 100?
    <!-- Math.random() : -->

   . let randomNumber = Math.floor(Math.random() \* 100) + 1;
   . This generates a random number from 1 to 100, inclusive. Math.random() generates a number between 0 (inclusive) and 1 (exclusive), which is then scaled to the range of 0 to 99, and finally rounded down with Math.floor() and adjusted to start from 1.

3. What is the purpose of Math.ceil()? Give an example.

   <!-- Math.ceil(): -->

   .This function rounds a number up to the nearest integer. For example, Math.ceil(4.3) will return 5,
   and Math.ceil(-4.3) will return -4.
   . Example: Math.ceil(3.1) returns 4.

4. Explain how Math.pow(2, 3) works and what the output will be.
   <!-- Math.pow(): -->

   .This function raises the first argument (the base) to the power of the second argument (the exponent). So, Math.pow(2, 3) computes 2^3 which equals 8. The output will be 8.

5. What is the value of Math.PI?
   <!-- Math.PI(): -->

   .Math.PI is a constant in JavaScript that represents the mathematical constant π (pi), approximately equal to 3.14159. It is often used in calculations involving circles.
