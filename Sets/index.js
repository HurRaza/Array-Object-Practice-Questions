// Question: Create a Set named numbers containing the values 1, 2, 3, 4, 5. Answer:

let numbers = new Set([1,2,3,4,5]);
console.log("Create a set",numbers);

// Question: Add the value 6 to the numbers set. Answer:

numbers.add(6);
console.log("Add the value", numbers);

// Question: Check if the value 3 exists in the numbers set. Answer:

console.log('value 3 exists',numbers.has(3));

// Question: Remove the value 2 from the numbers set. Answer:

numbers.delete(2);
console.log("delete value 2",numbers)

// Question: Clear all values from the numbers set. Answer:

numbers.clear();
console.log("Clear the set",numbers);

// Question: Create a Set of fruits ['Apple', 'Banana', 'Mango']. Use a for...of loop to print each fruit. Answer:

let fruits = new Set(['Apple', 'Banana', 'Mango']);
for(let fruit of fruits){
    console.log(fruit);
}

// Question: Use the forEach method to print each value in the numbers set. Answer:

let nums = new Set([1,2,3,4,5]);
nums.forEach((n)=>console.log(n));

// Question: Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. Answer:

let setA = new Set([1, 2, 3]) 
let setB = new Set([3, 4, 5])
const union = setA.union(setB);
console.log("Union",union);

// Question: Find the intersection of setA and setB. Answer:

let intersect = setA.intersection(setB);
console.log("intersection",intersect); 


// Question: Find the difference between setA and setB (values in setA but not in setB). Answer:

let diff = setA.difference(setB);
console.log("difference",diff); 