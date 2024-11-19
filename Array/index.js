let fruits=['Apple','Banana','Mango','Watermelon'];

// Question: Write code to access the second item in the fruits array. Answer:

console.log('Second Element',fruits[1]);


// Question: Use a forEach loop to print each item in the fruits array. Answer: 

console.log('ForEach Loop')
fruits.forEach((item)=>console.log(item));

// Question: Add Orange to the end of the fruits array. Answer:

fruits.push('orange');
console.log("Add in end",fruits);

// Question: Remove the first item (Apple) from the fruits array. Answer:

fruits.shift();
console.log("Remove first item", fruits);

// Question: Add Grapes to the beginning of the fruits array. Answer:

fruits.unshift('Grapes');
console.log("Add in beginning", fruits);

// Question: Remove the last item (Orange) from the fruits array. 
// Answer:

fruits.pop();
console.log("Remove last item", fruits);

// Question: Create a new array by adding Cherry and Peach to the existing fruits

let newArr = fruits.concat("Cherry","Peach");
console.log("New array by adding", newArr);

// Question: Use splice to remove Banana from the fruits array (assume it is in the second position). Answer:

fruits.splice(1,1);
console.log("splice remove banana" , fruits);

// Question: Use splice to insert Pineapple at the second position in the fruits array. Answer:

fruits.splice(1,0,'Pineapple')
console.log("splice insert banana" , fruits);

// Question: Use slice to create a new array with the first two items of the fruits array. Answer:

let arr = fruits.slice(0,2);
console.log('New array by slice',arr);


// Question: Find the index of Mango in the fruits array. Answer:

console.log("index of Mango", fruits.indexOf('Mango'));

// Question: Check if Banana exists in the fruits array using includes. Answer:

console.log("Banana exists in the fruits array", fruits.includes('Mango'));

// Question: Use find to locate the first fruit in the fruits array that starts with M. Answer:

let find = fruits.find((item)=>item.startsWith('M'))
console.log('Find first fruit starts with M is', find);

// Question: Use filter to create a new array with fruits that have more than 5 letters. Answer:

let arr1 = fruits.filter((item)=> item.length > 5)
console.log('fruits with more than 5 letters',arr1);

// Question: Sort the fruits array alphabetically. Answer:


console.log("Sort Alphabatically",fruits.sort());

// Question: Reverse the fruits array. Answer:

fruits.reverse();
console.log("Reverse", fruits);


// Question: Use reduce to create a single string from the fruits array, with items separated by a comma and a space (, ). Answer:

let reduce = fruits.reduce((str,item)=>str += ', ' + item );
console.log('reduce to create a single string: ', reduce);

// Question: Use map to create a new array where each fruit is in uppercase. Answer:

let FRUITS = fruits.map((item)=>item.toUpperCase());
console.log('map to create a new  in uppercase ', FRUITS);

// Question: Combine all the methods you've learned to:
// Add Kiwi at the start.
// Remove Mango from the array.
// Sort the remaining fruits alphabetically. Answer:

let arr2 = ['kiwi',...fruits].filter((item)=> item!=='Mango').sort();
console.log('Combine all the methods ',arr2);

// Bonus Questions
// Question: Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat. Answer:

let arr3 = [1, [2, 3], [4, [5, 6]]];
console.log('Flatten a nested array',arr3.flat(2));

// Question: Use join to create a string from the fruits array with items separated by a hyphen (-). Answer:

console.log('Join with hypen' , fruits.join('-'));