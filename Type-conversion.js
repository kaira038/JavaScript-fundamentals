let val;
val=String(32); //number to string
val=String(true); //boolean to string
val=String([1,2,3,4,5]); //array to string
val=Number("5+5");  //string to number  - can't euate numbers in string
val=Number(true);   //boolean to number 1-o/p
val=Number(false);//    //boolean to number 0-o/p
val=Number(null); // 0
val=Number("Hello");  //NaN
val=Number([1,2,3,4]);  //NaN

val=parseInt("100.45");  //100
val= parseFloat(100.34);  //100.34



console.log(val);
console.log(typeof val);