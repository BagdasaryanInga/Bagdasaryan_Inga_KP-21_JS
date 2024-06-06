// // Task 1!!!
const input = prompt("Please enter a word:");
if (input === null) 
{
  alert("Canceled.");
} 
else 
{
  const trimmedInput = input.trim();
  if (trimmedInput === "") 
  {
    alert("Invalid value");
  } 
  else 
  {
    const length = trimmedInput.length;
    const middleIndex = Math.floor(length / 2);
    let middleCharacter;
    if (length % 2 === 0) 
    {
      middleCharacter = trimmedInput.charAt(middleIndex - 1) + trimmedInput.charAt(middleIndex);
    } 
    else 
    {
      middleCharacter = trimmedInput.charAt(middleIndex);
    }
    alert(`The middle character(s): ${middleCharacter}`);
  }
}

// Task 2!!!

const users = [
      {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
      },
      {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
      },
      {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
      },
      {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
      },
      {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
      }
];
// Function to get unique skills from the user data
function getUniqueSkills(users) 
{
  const skillsSet = new Set();
  users.forEach(user => {
    user.skills.forEach(skill => 
    {
      skillsSet.add(skill);
    });
  });
  return Array.from(skillsSet);
}
console.log(getUniqueSkills(users));
// Function to get total balance of users with 2 friends and age < 30
function getTotalBalance(users) {
  return users.reduce((total, user) => {
    if (user.friends.length === 2 && user.age < 30) {
      return total + user.balance;
    }
    return total;
  }, 0); 
}
console.log(getTotalBalance(users));

//Task 3!!!

// Spread Operator (...)
// The spread operator is used to expand elements of an array or object into 
// individual elements. It is often used for copying or merging arrays and objects, 
// or for passing elements of an array as arguments to a function.

// Example: Expanding array elements
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Example: Merging arrays
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const food = [...fruits, ...vegetables];
console.log(food); // Output: ['apple', 'banana', 'carrot', 'broccoli']

// Example: Copying objects
const person = { name: 'Alice', age: 25 };
const clonedPerson = { ...person };
console.log(clonedPerson); // Output: { name: 'Alice', age: 25 }

// Example: Combining objects
const address = { city: 'New York', country: 'USA' };
const personDetails = { ...person, ...address };
console.log(personDetails); // Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }

// Example: Using spread to pass array elements as function arguments
const numbersArray = [4, 5, 6];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...numbersArray)); // Output: 15

// Rest Operator (...)
// The rest operator is used to collect multiple elements into an array. 
// It is typically used in function parameters to gather all remaining arguments 
// into a single array or in destructuring to collect remaining elements.

// Example: Using rest in function parameters
function logNumbers(first, ...rest) {
  console.log(first); // Output: 1
  console.log(rest); // Output: [2, 3, 4]
}
logNumbers(1, 2, 3, 4);

// Example: Using rest in array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, ...secondary] = colors;
console.log(primary); // Output: 'red'
console.log(secondary); // Output: ['green', 'blue', 'yellow']

// Example: Using rest in object destructuring
const car = { make: 'Toyota', model: 'Camry', year: 2020, color: 'blue' };
const { make, ...details } = car;
console.log(make); // Output: 'Toyota'
console.log(details); // Output: { model: 'Camry', year: 2020, color: 'blue' }


// Task 4!!!
const users_ = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const userList = document.getElementById("userList");
function populateUserList() {
    users_.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        listItem.addEventListener("click", () => {
            alert(`Hello, ${name}`);
        });
        userList.appendChild(listItem);
    });
}
populateUserList();

