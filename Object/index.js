// Question: Create an object person with the following properties:
// name: "John"
// age: 30
// city: "New York"
// Answer:

let person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log("Create an object person", person);

// Question: Access the name property of the person object and store it in a variable. Answer:

console.log("Name: ", person.name);

// Question: Add a new property isMarried with the value false to the person object. Answer:

person.isMarried = false;
console.log("add new property isMarried: ", person);

// Question: Delete the city property from the person object. Answer:

delete person.city;
console.log(person);

// Question: Add a method greet to the person object that logs "Hello, my name is John" to the console when called. Answer:

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Question: Call the greet method of the person object. Answer:

person.greet();

// Question: Write a loop to print all keys of the person object. Answer:

let keys = Object.keys(person);
for (i of keys) {
  console.log(i);
}

// Question: Write a loop to print all values of the person object. Answer:

let values = Object.values(person);
for (i of values) {
  console.log(i);
}

// Question: Use destructuring to extract the name and age properties from the person object. Answer:

let { name, age } = person;
console.log("name: ", name);
console.log("age: ", age);

// Question: Provide default values for destructuring if the properties gender and city do not exist. Answer:

const { gender = "male", city = "New York" } = person;

console.log("gender: ", gender);
console.log("city", city);

// Section 5: Advanced Operations
// Question: Create a new object student that has the same properties as person, but add an additional property grade: "A". Answer:

let student = Object.assign({}, person, { grade: "A" });
console.log("Student", student);

// Question: Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 } into a new object. Answer:

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = Object.assign(obj1, obj2);
console.log("Merge two objects", obj3);

// Question: Use Object.keys to get an array of all keys in the person object. Answer:

console.log("keys in person", Object.keys(person));

// Question: Use Object.values to get an array of all values in the person object. Answer:

console.log("Values in person", Object.values(person));

// Question: Use Object.entries to get an array of key-value pairs in the person object. Answer:

console.log("Array of key-value pair", Object.entries(person));

// Section 6: Checking Properties
// Question: Check if the age property exists in the person object. Answer:

console.log("Check age property exists: ", person.hasOwnProperty("age"));

// Question: Use Object.hasOwn() to check if isMarried is a direct property of person. Answer:

console.log(
  "Check isMarried is a direct property of person: ",
  Object.hasOwn(person, "isMarried")
);

// Section 7: Freezing and Sealing
// Question: Use Object.freeze to make the person object immutable. Try changing the age property. Answer:

// Object.freeze(person);
// person.age = 22;
// console.log("Freeze Person after changing age: ", person)

// Question: Use Object.seal on the person object and add a new property salary. Answer:

// Object.seal(person);
// person.salary = 50000;
// console.log("Seal Person after add new property salary: ", person)

// Question: Write code to create a deep copy of the person object using JSON.stringify and JSON.parse. Answer:

let personJson = JSON.stringify(person);
console.log("JSON String of person", personJson);
let personObj = JSON.parse(personJson);
console.log("Parse JSON String into object", personObj);

// Question: Create an array of objects representing books:
// javascript

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 180,
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 149,
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 109,
    year: 1925,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    price: 225,
    year: 1851,
  },
];
 
console.log(books);

// Use filter to find all books with a price greater than 150. Answer:
// javascript

let findBook = books.filter((book)=>book.price>150);
console.log('All books with a price greater than 150',findBook);

// Question: Use map to create an array of book titles. Answer:
// javascript

let titles = books.map((book)=>book.title);
console.log("array of book titles",titles);

// Question: Use reduce to calculate the total price of all books. Answer:

let totalPrice = books.reduce((sum,book)=> sum + book.price, 0);
console.log("total price of all books",totalPrice);


// Bonus Questions
// Question: Use a for...of loop to print the title and author of each book in the books array. Answer:

for(let book of books){
    console.log(`title: ${book.title} --> Author: ${book.author}`);
}

// Question: Write a function updateAge that takes an object and an age parameter, updates the object's age, and returns the updated object. Answer:

function updateAge(obj, age){
    obj.age = age;
    return obj;
}

console.log("function updateAge: ", updateAge(person,41))
