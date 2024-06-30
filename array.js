const numbers=[1,2,3,4,5,6,7,8,9];
const test="Hello";


let val;
// Get array length
val=numbers.length;

// Check if its array
val=Array.isArray(numbers);   //true
val=Array.isArray(test);      //False

// Get a Single value
val=numbers[1];    //2
val=numbers[5];   //6

// Insert value into array
val=numbers[0]=11;

// Find the index of value
val=numbers.indexOf(7);
val=numbers.indexOf(8);
val=numbers.indexOf(66);  //-1  default- if value not find

// Mutating Array
// Add to the end
numbers.push(1000);

// Take off from the end/delete from the end
numbers.pop();
numbers.pop();

// Add on to the front
numbers.unshift(2000);

// take off  from the front
numbers.shift();
numbers.shift();


// console.log(val);
// console.log(numbers);

           // splice --- add/delete(remove)


// Example- another

const fruits=["apple","kiwi","banana","berry"];

val=Array.isArray(fruits);

//fruits.splice(1,2);//   1- index, 2- no of element going to remove

fruits.splice(2,1,"orange"); //replace by banana 2- index  1- no of element

console.log(fruits);
// console.log(val);



