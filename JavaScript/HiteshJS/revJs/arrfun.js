//Revision->17 Feb 2024
//topics covered->
//var let const
//arrow function
// callback fun
// higher order fun, map, filter, reduce, foreach


///-----------------------------------------------------
//filter ... syntax ->
const arr = [2,8,4,9,0];

// const arr2 = arr.filter( (item) => {return item>5}  )

// 3 diff ways
// const arr2 = arr.filter( (item) => {return item>5} )   //R
// const arr2 = arr.filter( (item) => { item>5} )    //Wrong approach
// const arr2 = arr.filter( (item) => ( item>5 ) )      //R
const arr2 = arr.filter( (item) =>  item>5   )            //R


console.log(arr2);
///-----------------------------------------------------




/*


///===========================================
// array.filter(callbackFn, thisArg)   ....same for map,reduce

// The callbackFn function can take three parameters:
// currElement: The current element in the array.
// index: The index of the current element in the array.
// array: The original array.

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // [2, 4]
///===========================================






///-----------------------------------------------------
//map ... syntax ->
//  arrayName.map(function (currElement, currElementIndex, currElementArr) {},  this);

// const numbers = [1, 2, 3, 4, 5];
// const aila = [6,7,8,9,10];

// const doubledNumbers = aila.map(function(num, index, numbers) {
//     // num: current element being processed
//     // index: index of the current element
//     // array: the array being traversed

//     if(index%2==0) return "even";
//     // Double the current element
//     else return num*2;
// });

// console.log(doubledNumbers); 

///-----------------------------------------------------









///-----------------------------------------------------
// Examples of higher-order functions in JavaScript include forEach, map, filter, reduce, and many others from the standard library.

//forEach ...syntax ->
//forEach has 3 arguments (currElement, index, array) keep in mind
// numbers.forEach( function(){} );  -- inshort

//--------

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num, index, array) {
//     if (num % 2 === 0) {
//         array[index] = num * 2; // Double the value of even numbers
//     }
// });

// console.log(numbers); // Output: [1, 4, 3, 8, 5]

//--------

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num,i) {  //i is index
//     console.log(`Element at index ${i}: ${num * 2}`);
// });

//--------


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(num) {
//     console.log(num * 2);
// });
// numbers.forEach((num) => {
//     console.log(num * 2);
// });
// numbers.forEach( (num) => console.log(num*2) ) //arrow function hehe



///-----------------------------------------------------








///-----------------------------------------------------
// Higher-order function

function performOperation(k,callback) {
    console.log('Performing operation...');
    callback(); 
}

function logMessage() {
    console.log('Operation completed!');
}

performOperation(console.log(2 * 3),logMessage);



// Higher-order function - AI Generated

function performOperation(...callbacks) {
    console.log('Performing operation...');
    callbacks.forEach(callback => callback()); // Execute each callback function
}

// Callback function
const logMessage = () => console.log('Operation completed!');

// Callback function
const k = () => console.log(2 * 3);

// Call the higher-order function with multiple callback functions
performOperation(k, logMessage);

///-----------------------------------------------------








///-----------------------------------------------------
//callbackfunction

function buckle(l,m,uncle){
    console.log(l*m*uncle(4,5));
}


const buckle = (l,m,uncle) =>  console.log(l*m*uncle(4,5));
var uncle = (a,b) => a+b ;
buckle(2,3,uncle);


// function buckle(l,m,n){
//     console.log(l*m*n);
// }
// const uncle = (a,b) => a*b;
// buckle(7,2,uncle(4,5));



// function buckle(l, m, uncle) {
//     console.log(l * m * uncle(4, 5));
// }

// const uncleFunc = (a, b) => a + b;
// buckle(2, 3, uncleFunc);

///-----------------------------------------------------








///-----------------------------------------------------
//arrow function

// const bruh = (a,b) => console.log(a*b) ;
// bruh(2,4);


// const bruh = (a,b) => console.log(a*b) ;
// console.log(bruh(2,5));


// const bruh = (a,b) => a*b ;
// console.log(bruh(2,5));


const bruh = (a,b) => { return a*b };
console.log(bruh(2,5));


if(bruh(1,6)) console.log("true");
else console.log("False");

console.log(bruh(2,7));
///-----------------------------------------------------






///-----------------------------------------------------
///var let const
// var yu = 89;
// let yy = 90;
// const zz = 91;
// yu=5900
// console.log(yu);

// yy = 9000;
// // zz=yy;

// console.log(yy);
// console.log(zz);
///-----------------------------------------------------
*/