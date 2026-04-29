// Student Form Function
function studentForm(name, age, course) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course);
}
studentForm("Naveen", 22, "MERN");

// Calculator Function
function calc(a, b) {
    console.log("Addition: " + (a + b));
    console.log("Subtraction: " + (a - b));
    console.log("Multiplication: " + (a * b));
}
calc(10, 5);

// Reusable Greeting
function greet(user) {
    console.log("Hello " + user);
}
greet("Kamal");
greet("Praveen");
greet("Sai");

// Return Value
function square(num) {
    return num * num;
}
console.log(square(5)); // 25

//Scope Check
function checkScope() {
    let secret = "javascript";
    return secret; // Send the value out of the function
}

// Capture the returned value in a new variable
let result = checkScope(); 

console.log(result); // Output: "javascript"

                    // Spread / Rest
//Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];
let toys = [...boys, ...girls];
console.log(toys);

// Unlimited Numbers
function sumAll(...nums) {
    let total = nums.reduce((acc, curr) => acc + curr, 0);
    console.log(total);
}
sumAll(10, 20, 30, 40); // 100

               //Level 4 – Destructuring
//Array Destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1, c2, c3);
//Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};
let { name, role } = emp;
console.log(name, role);
              

               //Level 5 – Real-Time Logic
//Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    return "Try again";
}

const offer = offerGenerator();
console.log(offer.next().value); // 10%
console.log(offer.next().value); // 20%
console.log(offer.next().value); // 50%
console.log(offer.next().value); // Try again
console.log(offer.next().done ? "No more offers" : ""); // No more offers


                //Level 6 – Advanced
//Task 11: Curry Function
const add = (a) => (b) => (c) => a + b + c;
console.log(add(10)(20)(30)); // 60

                //Task 12: Student Marks Analyzer
function Studentmarks(...nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let avg = total / nums.length;
    console.log(`Total = ${total}`);
    console.log(`Average = ${avg}`);
}
Studentmarks(80, 90, 70, 60);


//Challenge Task
//Employee Registration System
function register(name, role, ...skills) {
    console.log("Name: " + name);
    console.log("Role: " + role);
    console.log("Skills: " + skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");