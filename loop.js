        //Looping - Iteration

// loop can execute a block of code number of times

// for(i=0;i<10;i++){
//  console.log(i);   
// }

for(i=0;i<10;i++){

    if (i===2) {
        console.log(`2 is my favorite number`);
        continue;
    }
    if (i===5) {
        console.log(`i hit the state`);
        break;
    }
        
    

    console.log(i); 

    
}
