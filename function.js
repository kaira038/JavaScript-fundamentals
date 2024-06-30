

                  //FUNCTION STATEMENT


function greet(firstName="john",lastName="Doe"){  //default values passed

    //default staement - old way

    // if(typeof firstName ==="undefined"){
    //     firstName="john"
    // }
    // if (typeof lastName ==="undefined"){
    //     lastName="Doe"
    // }
    console.log(`Hello ${firstName} ${lastName}`);
}

 

//Call function
 greet();
 greet("kavi","priya");
 greet("jagan","javid");


                   //FUNCTION EXPRESSION


  //return some value
  
//   const add = function(){

//   }

//   console.log(add);

// add(5,5);    //cannot access before initialization

const add = function(x,y){

    console.log(x+y);
}

add(5,5);

// It is good habit to create function first and then after call the vale


// IIFE - Immediately Invoked Function Expression

// ()  - paranthesiz as well kind of expression

(function (name) {
    console.log(`Hello ${name}`);
})("john");

