                        //LEVEL 1: Array Basics
// Task 1: Basics
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1[0]);           // First: 10
console.log(arr1[arr1.length-1]); // Last: 50
console.log(arr1.length);       // Length: 5

// Task 2: Push & Pop
let arr2 = [1, 2, 3];
arr2.push(4, 5); // [1, 2, 3, 4, 5]
arr2.pop();      // [1, 2, 3, 4]
console.log(arr2);

// Task 3: Includes
let arr3 = ["html", "css", "javascript", "react"];
console.log(arr3.includes("javascript")); // true

//LEVEL 2: Intermediate (Higher-Order Functions)
let employee = [{name:"A", salary:10000},{name:"B", salary:50000},{name:"C", salary:30000}];

// Task 4: Filter Salary
let outcome = employee.filter(e => e.salary > 20000);
console.log(outcome);

// Task 5: Map Names
let names = employee.map(e => e.name);
console.log(names); 

// Task 6: Reduce Sum
let total = employee.reduce((sum, e) => {
    return sum + e.salary
}, 0);
console.log(total); 

//LEVEL 3: Logic Building

// Task 7: Remove Duplicates
let arr7 = [1,2,2,3,4,4,5];
let unique = [...new Set(arr7)];
console.log(unique); // [1,2,3,4,5]

// Task 8: Find Largest Number
let arr8 = [10, 200, 5, 90];
let largest = Math.max(...arr8);
console.log(largest); // 200

// Task 9: Reverse String WITHOUT reverse()
let str9 = "hello";
let reversed = "";
for(let i = str9.length - 1; i >= 0; i--) {
    reversed += str9[i];
}
console.log(reversed); // "olleh"

//LEVEL 4: Advanced Thinking

// Task 10: Group by Salary
let emp2 = [
    {name:"A", salary:10000},
    {name:"B", salary:50000},
    {name:"C", salary:10000}
];
let grouped = emp2.reduce((acc, e) => {
    if(!acc[e.salary]) {
        acc[e.salary] = [];
    }
    acc[e.salary].push(e.name);
    return acc;
}, {});
console.log(grouped); // {10000: ["A","C"], 50000: ["B"]}

// Task 11: Flatten Array (without flat)
let arr11 = [1,[2,[3,[4]]]];
function flatten(arr) {
    let result = [];
    for(let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten(arr11)); // [1,2,3,4]

// Task 12: Custom Sort (Descending)
let arr12 = [5,2,9,1];
arr12.sort((a, b) => b - a);
console.log(arr12); // [9,5,2,1]

//BONUS: Interview Level

// Task 13: Find Second Largest
let arr13 = [10, 50, 20, 40];
let sorted = [...arr13].sort((a, b) => b - a);
let secondLargest = sorted[1];
console.log(secondLargest); // 40

// Task 14: Count Characters
let str14 = "aabbccdde";
let charCount = {};
for(let char of str14) {
    charCount[char] = (charCount[char] || 0) + 1;
}
console.log(charCount); // {a:2, b:2, c:2, d:2, e:1}
   