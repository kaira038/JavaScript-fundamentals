const person={
    firstName:"Kavi",
    lastName:"Priya",
    age:21,
    email:"kavi57@gmail.com",
    hadLunch:true,
    hobbies:["music","sports"],
    address:{
        city:"chennai",
        state:"Tamilnadu"
    },

    //Method
    getFullName:function(){
        //return person.firstName+" "+person.lastName;
        return{
            firstNaame:person.firstName, //return as object
            lastName:person.lastName
        }
    }
//object inside function represented= namely called as "Method"
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.email);
console.log(person["email"]);// another way to access object
console.log(person.address.city);
console.log(person.getFullName()); //return with function key- with out used parenthesiz




