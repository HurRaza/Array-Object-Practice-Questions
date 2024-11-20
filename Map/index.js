// Question: Create a Map named student with the following key-value pairs:

let student = new Map([
  ["name", "Hur"],
  ["age", 21],
  ["grade", "A"],
  ["city", "karachi"],
]);
console.log(student);

// Question: Add a new key subject with the value "Mathematics" to the student map. Answer:

student.set("subject", "Mathematics");
console.log("Add a new key subject", student);

// Question: Retrieve the value associated with the key grade in the student map. Answer:

console.log("Retrieve the value of grade:", student.get("grade"));

// Question: Check if the key age exists in the student map. Answer:

console.log("Check key age exists:", student.has("age"));

// Question: Remove the key grade from the student map. Answer:

student.delete("grade");
console.log("Remove the key grade", student);

// Question: Clear all key-value pairs from the student map. Answer:

//student.clear();
//console.log("Clear all key value pairs", student);

// Question: Create a Map named countryCodes with the following entries:
// US: "United States"
// IN: "India"
// GB: "United Kingdom"
// Use a for...of loop to print all key-value pairs in the map. Answer:

let countryCodes = new Map([
  ["US", "United States"],
  ["IN", "India"],
  ["GB", "United Kingdom"],
]);

for(let code of countryCodes){
    console.log(code);
}

// Question: Use the forEach method to print all keys in the countryCodes map. Answer:

countryCodes.forEach((value,key) => {
    console.log(key)
});

// Question: Get an array of all keys in the countryCodes map using Map.keys. Answer:

let keys = [...countryCodes.keys()];
console.log('all keys in the countryCodes', keys);

// Question: Get an array of all values in the countryCodes map using Map.values. Answer:

let values = [...countryCodes.values()];
console.log('all values in the countryCodes', values);

// Question: Get an array of all key-value pairs in the countryCodes map using Map.entries. Answer:

let entries = [...countryCodes.entries()];
console.log('all entries in the countryCodes', entries);

// Question: Use a Set to remove duplicate values from the array [1, 2, 2, 3, 4, 4, 5]. Answer:
// 

let array = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log('remove duplicate values from the array',array)

// Question: Convert the student map to an object. Answer:
// javascript

let obj = Object.fromEntries(student);
console.log('Convert the student map to an object',obj);

// Question: Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }. Answer:

let obj1 = { name: "Bob", age: 25, city: "Paris" };
let map = new Map(Object.entries(obj));

console.log('Create a Map from object',map);


// Question: Write a function getUniqueCharacters that takes a string and returns a Set of unique characters. Answer:

function getUniqueCharacters(str){
    return new Set(str);
}
let unique = getUniqueCharacters('zenkoders')
console.log('takes a string and returns a Set of unique characters',unique)