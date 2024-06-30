                               // if...else

// if(something){
//     do something
// }else{                     
//     do somethingelse
// }


const id=100;  //Number value

//Equal to

if(id=="100"){      
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// Not Equal
if(id!="100"){      
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

//Equal to both value and its type  ===

if(id ==="100"){     //string-type 
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

// suppose - //Number- type 
if(id===100){      
    console.log("Correct");
}
else{
    console.log("Incorrect");
}

let greet; 
if(typeof greet==="undefined"){
    console.log(`Yeah im undefined cos im not having the value,${greet}`);
}else{
    console.log(`Yeah im defined cos im  having value ${greet}`);
}
 //suppose value assigned
 let greeet= "Hello"; 
 if(typeof greeet==="undefined"){
     console.log(`Yeah im undefined cos im not having the value,${greet}`);
 }else{
     console.log(`Yeah im defined cos im  having value ${greet}`);
 }


 //Greater or less then

 if(id >=99){
    console.log("Correct");
 }
 else{
    console.log("Incorrect");
 }
//suppose - lesser
 if(id<=99){
    console.log("Correct");
 }
 else{
    console.log("Incorrect");
 }

 //if..else..elseif

 const color="blue";

 if (color==="blue") {
    console.log("Im blue");
 }
 else if (color==="green"){
    console.log("Im green");
 }
 else{
    console.log("I dont know the color");
 }

 //Logical -Operator-&&  Both value should be true or false


 //AND Operator
const name="kavipriya";
const age=21;  // try this values - 2,14,90

if (age>0 && age<12){
    console.log(`${name} is a child`);
}
else if(age>12 && age<20){
    console.log(`${name} is a teenager`);
}
else if(age>20 && age<60){
    console.log(`${name} is a adult`);
}
else{
    console.log(`age can't find out`);
}

// OR Operator  || Any one true or false 

if (age>16 || age>65){  //21>16 true, 21>65 false
    console.log(`${name} can be able to work`);    
}
else{
    console.log(`${name} cannot able to work`);
}

//suppose
if (age<16 || age>65){  //21>16 true, 21>65 false
    console.log(`${name} can be able to work`);    
}
else{
    console.log(`${name} cannot able to work`);
}

//Ternary operator

console.log(100===100? "Correct":"Incorrect");










