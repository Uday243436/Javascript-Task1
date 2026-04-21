// 🔹 Task 1: Variable Update
var score = 50;
score = 100;
console.log("Task 1:", score);

// 🔹 Task 2: Let Variable Math
let marks = 80;
marks += 10;
console.log("Task 2:", marks);

// 🔹 Task 3: Const Value
const price = 500;
let finalPrice = price + 100;
console.log("Task 3:", finalPrice);

// 🔹 Task 4: Printing Statements
console.log("Task 4:");
console.log("Welcome Team");
console.log(2026);
console.log(true);

// 🔹 Task 5: Datatype Check
console.log("Task 5:");
console.log(typeof "JavaScript"); // string
console.log(typeof 250);          // number
console.log(typeof false);        // boolean

// 🔹 Task 6: Array Task
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Task 6:");
console.log(fruits);              // Full array
console.log(fruits[0]);           // First fruit
console.log(fruits[fruits.length - 1]); // Last fruit

// 🔹 Task 7: Object Task
const student = {
    name: "Naveen",
    age: 20,
    course: "MERN"
};
console.log("Task 7:");
console.log(student.name);
console.log(student.age);

// 🔹 Task 8: Arithmetic Operators
console.log("Task 8:");
console.log(20 + 10);
console.log(50 - 25);
console.log(5 * 5);
console.log(100 / 4);
console.log(20 % 3);

// 🔹 Task 9: Increment / Decrement
console.log("Task 9:");
let x = 5;
x++;
console.log(x); // 6

let y = 10;
y--;
console.log(y); // 9

// 🔹 Task 10: Comparison Operators
console.log("Task 10:");
console.log(10 > 5);      // true
console.log(5 < 2);       // false
console.log(20 == "20");  // true (checks value)
console.log(15 === "15"); // false (checks value and type)
console.log(10 != 8);     // true

// 🔹 Task 11: Logical Operators
console.log("Task 11:");
console.log(5 > 2 && 10 > 3); // true
console.log(7 < 5 || 8 > 2);  // true
console.log(!(10 > 5));       // false

// 🔹 Task 12: Ternary Operator
console.log("Task 12:");
let age = 18;
let status = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(status);