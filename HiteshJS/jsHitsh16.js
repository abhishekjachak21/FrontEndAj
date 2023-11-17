// constructor -> singleton
// Object.create


/* 
Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
*/


///-------------------------------------------------------
/// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])   // JsUser.full name u cant do like this
console.log(typeof JsUser.lastLoginDays)
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


/// all abt SYmbol brio

const uniqueKey = Symbol('unique key');

const myObjj = {
  [uniqueKey]: "I am value"
};

console.log(myObjj[uniqueKey]); // Output: "I am value"
///-------------------------------------------------------




///-------------------------------------------------------
// // const keyy = Symbol('HUh');
// const myObj = {
//     namee : "Abhishek",
//     study : "yes",
//     tp : false,
//     // [keyy] : "dontknow"
//     // [keyy] : Symbol('HUh')    //dekhna padega iska
// }
// console.log(myObj);
// console.log(typeof myObj.study);
// // console.log(typeof myObj[keyy]);


// myObj.jojo = function() {
//         console.log("Hi bro, why you do so much of HardWork?");
// };
    
// myObj.jojoLol = function() {
//     console.log(`Still I as ${ this.namee }, not getting any success, idk why?`);
// };

// console.log(myObj.jojo());
// console.log(myObj.jojoLol());
///-------------------------------------------------------



///-------------------------------------------------------
// const myObj = {
//     namee: "Abhishek",
//     study: "yes",
//     tp: false,
// };

// console.log(myObj);
// console.log(typeof myObj.study);

// myObj.jojo = function() {
//     console.log("Hi bro, why you do so much of HardWork?");
// };

// myObj.jojoLol = function() {
//     console.log(`Still I, as ${this.namee}, not getting any success, why?`);
// };

// console.log(myObj.jojo);
// console.log(myObj.jojoLol);
///-------------------------------------------------------



///------------------------------------------------------
///Symbol
let symbol1 = Symbol('mySymbol');
let symbol2 = Symbol('mySymbol is symbol');
console.log(symbol1); 
console.log(symbol2); 
console.log(symbol1 === symbol2); // Output: false
console.log(symbol1.description); 
console.log(symbol2.description); 
///------------------------------------------------------





///-------------------------------------------------------
// destructuring
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     city: 'New York'
//   };
  
//   const { firstName, age } = person;
  
//   console.log(firstName); // Output: "John"
//   console.log(age);  // Output: "30"


// const numbers = [1, 2, 3, 4, 5,6,67,7,7,7,7,7,7,65,4,3,2,12,3,23];

// const [first, second,...fifth] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(fifth);  // Output: 3,4,...23
///-------------------------------------------------------
//revising this on 12Nov 2023(Bhosari)