const firstName="kavi";
const lastName="priya";
const age=21;
const str="Hello Im kavipriya from chennai";
const device="mobile,laptop,airpods";

let val;

val=firstName+lastName;
val=lastName+firstName;

//concatenation
val=firstName+" "+lastName;
val=firstName+"/"+lastName;

//Append
val="kaviya";

// val= val+"priya";
val+="priya";

val="hello,myname"+firstName+"and i am"+age;

// Length
val=firstName.length;  //4

//concat
val=firstName.concat(" ",lastName);

//change case
val=firstName.toUpperCase(firstName);
val=firstName.toLowerCase(firstName);

// charAt
val=firstName.charAt("2");
val=firstName.charAt(firstName.length-1);

//Slice() method
const fruit="stawberry";
val=fruit.slice(0,4);  //staw
val=fruit.slice(2,5);  //awb
val=fruit.slice(0);
val=fruit.slice(4);

// split() method   -returns array

val=str.split(" "); //return as array- seperation based on space
val=device.split(","); //return as array- seperation based on comma

//Replace

val=str.replace("kavipriya","kaira");


//Include

val=str.includes("chennai");  //true


console.log(val);


