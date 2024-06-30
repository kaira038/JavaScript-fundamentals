// INTERACTION - alert, prompt,confirm

// 01 . Alert - msg wait for the user to press "ok"

alert("hello guys");

// 02 . Prompt - 

// Visitor can type something in the Promt input field, then get result or they cansel or hitting esc key, It will shows null as a result.



// let age =prompt('How old are?',100);   ----->   title, default(optional second parameter)

// alert(`you are ${age} years old!`);



let age =prompt('How old are?');

alert(`you are ${age} years old!`);


// Confirm - if the visitors ok clicks, retun as true

let isBoss = confirm("Are you the boss?");

alert(isBoss);