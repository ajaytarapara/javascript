// Task 1: Using Rest

// Write a function multiplyAll that takes any number of arguments and returns their product.
// Use the rest operator to handle the arguments.

function multiplyAll(...number) {
  return number.reduce((sum, a) => sum * a, 1);
}
console.log(multiplyAll(1, 3, 4));

// Task 2: Merge Arrays

// You have two arrays of numbers:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Write code to merge them into a single array using the spread operator.
console.log([...arr1, ...arr2]);

// Task 3: Destructuring with Rest

// You have an array:

const numbers = [10, 20, 30, 40, 50];

// Extract the first element into a variable first.

// Collect the rest of the elements into a variable rest.

// Write your code using array destructuring and rest operator.
const [first, ...second] = numbers;
console.log(first, second);

// Task 4: Object Destructuring & Spread

// You have an object:

const user = {
  name: "Alice",
  age: 25,
  city: "London",
  country: "UK",
};

// Tasks:

// Extract the property name into a variable userName.

// Collect the rest of the properties into a new object called details.

// Create a new object updatedUser that has all properties of user plus a new property profession: "Developer" using the spread operator.

const { name: userName, ...details } = user;
console.log(userName, details);

let newUser = { ...user, profession: "Developer" };
console.log(newUser);

// Task 5: Spread + Rest in Functions

// Write a function mergeAndMultiply that:

// Accepts any number of arrays as arguments using the rest operator.

// Merges all arrays into a single array using the spread operator.

// Returns the product of all numbers in the merged array.

function mergeAndMultiply(...array) {
  let merged = [].concat(...array);
  return merged.reduce((mul, a) => mul * a, 1);
}

console.log(mergeAndMultiply([1, 2], [3, 4], [5]));

// Task 6: Mixed Spread & Rest

// You have this data:

const user1 = { name: "John", age: 30, city: "NY" };
const user2 = { name: "Jane", age: 25, country: "UK" };

const scores1 = [10, 20, 30];
const scores2 = [40, 50];

// Tasks:

// Merge user1 and user2 into a new object mergedUser. If the same property exists, values from user2 should overwrite user1.

// Extract name from mergedUser into userName and put the rest into userDetails.

// Merge scores1 and scores2 into a single array allScores using spread.

// Write a function sumAllScores that accepts any number of arrays of scores using rest and returns the total sum.

const mergedUser = { ...user1, ...user2 };
console.log(mergedUser);
const { name: userMergedName, ...detailsMerged } = mergedUser;
console.log(userMergedName, detailsMerged);
const mergedScoreArr = [...scores1, ...scores2];
console.log(mergedScoreArr);
function sumAllScores(...scoreArr) {
  let merged = [].concat(...scoreArr);
  return merged.reduce((totalSum, a) => totalSum + a, 0);
}
console.log(sumAllScores(scores1, scores2));

// Exercise 1: Convert Array to Object

// You have an array of key-value pairs:

const entries = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "NY"],
];

console.log(Object.fromEntries(entries));

// Exercise 2: Swap Array Elements Using Rest

// You have an array:

const numbersGiven = [1, 2, 3, 4, 5];

// Swap the first and last elements using array destructuring and rest.

// Result: [5, 2, 3, 4, 1]

function changeOrder(numbersGiven) {
  const [first, ...numbersGivens] = numbersGiven;
  let last = numbersGivens.pop();
  return [last, ...numbersGivens, first];
}
console.log(changeOrder(numbersGiven));

// Exercise 3: Separate Odd and Even Numbers

//You have:

const nums = [1, 3, 2, 4, 5, 6, 7];

//Use rest and spread to separate the first even number into a variable firstEven and the rest of the numbers into remaining.

function firstEvenOdd(nums) {
  const evenIndex = nums.findIndex((numId) => numId % 2 == 0);
  const val = nums[evenIndex];
  console.log(val);
  return [...nums.slice(0, evenIndex), ...nums.slice(evenIndex + 1)];
}
console.log(firstEvenOdd(nums));

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();

// EXCERCISE IDENTIFICATION SPREAD AND REST 
// Q1.

// Identify spread or rest:

// function add(a, b, ...nums) {
//   console.log(nums);
// }

// Q2.

// Spread or rest?

// const numbers = [1, 2, 3];
// console.log(...numbers);

// Q3.

// Spread or rest?

// const arr = [4, 5, 6];
// const newArr = [1, 2, 3, ...arr];

// Q4.

// What is used here?

// function printAll(...args) {
//   console.log(args);
// }

// Q5.

// Spread or rest?

// const obj = { name: "John" };
// const clone = { ...obj };

// Q6.

// Identify:

// let more = ["x", "y"];
// let result = [...more, "z"];

// Q7.

// Spread or rest?

// function join(a, ...others) {
//   console.log(others);
// }

// Q8.

// Spread or rest?

// const values = [10, 20, 30];
// Math.max(...values);

// Q9.

// Identify:

// const base = { a: 1, b: 2 };
// const merged = { ...base, c: 3 };

// Q10.

// Spread or rest?

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
// }

// Q11.

// Spread or rest?

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];

// Q12.

// Identify:

// const person = { name: "Ali", age: 22 };
// const clone = { ...person };

// Q13.

// Spread or rest?

// function show(a, b, ...restValues) {
//   console.log(a, b, restValues);
// }


// ✅ ANSWERS
// Q1 → Rest
// function add(a, b, ...nums) { }

// Q2 → Spread
// console.log(...numbers);

// Q3 → Spread
// const newArr = [1, 2, 3, ...arr];

// Q4 → Rest
// function printAll(...args) { }

// Q5 → Spread
// const clone = { ...obj };

// Q6 → Spread
// let result = [...more, "z"];

// Q7 → Rest
// function join(a, ...others) { }

// Q8 → Spread
// Math.max(...values);

// Q9 → Spread
// const merged = { ...base, c: 3 };

// Q10 → Rest
// function sum(...numbers) { }

// Q11 → Spread
// const arr2 = [...arr1, 3, 4];

// Q12 → Spread
// const clone = { ...person };

// Q13 → Rest
// function show(a, b, ...restValues) { }