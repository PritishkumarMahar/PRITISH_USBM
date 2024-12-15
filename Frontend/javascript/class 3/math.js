// Mathematical Operator

let a = 6;
let b = 3;

let add = a + b;
console.log(add);

let sub = a - b;
console.log(sub);

let mul = a * b;
console.log(mul);

let div = a / b;
console.log(div);

let mod = a % b;
console.log(mod);

// Exponential Operator

let square = 2 ** 2;
let cube = 2 ** 3;
console.log(square);
console.log(cube);

// Relational Operator

console.log(10 > 5);
console.log(10 < 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(10 > !5);
console.log(!5);

// Equality Operator
// "==" --> Check the Value
// "===" --> Check the value and datatype
console.log(5 == 5);
console.log(5 == 6);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

// Falsy value :
// false, 0, -0, "", '', null, undefined, NaN

if (-100) {
  console.log("It is true");
}

// To check even or odd

let num = 29;
let even = num % 2;
console.log(even);
