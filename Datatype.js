//    1.  primitive value
// string

const name="jagan";

console.log(name);
console.log(typeof name);

// numbers
const age=27;
console.log(age);
console.log(typeof age);

// Boolean
const hasKids=true;
console.log(hasKids);
console.log( typeof hasKids);

// Null -empty
const box = null;
console.log(box);
console.log(typeof box);

// Undefined
let undef;  //should never put unfined as the keyword
console.log(undef);
console.log(typeof undef);

            //     2. Referance types

const myArr=["jagan","javid",47,true,undefined,null];
console.log(myArr);
console.log(typeof myArr); 
console.log(myArr[0]);
console.log(myArr[3]);


// object  - key value pairs or name value pair
 const Car={
    name:"BMW",
    color:"black",
    year:2020,
    start:function(){
      console.log("Car started");
    }
 }
 console.log(Car);
 console.log(typeof Car);
 console.log(Car.name);


// NOTE:
//       object - acsessed by dot
//       array  -acsessed by square bracket


 

