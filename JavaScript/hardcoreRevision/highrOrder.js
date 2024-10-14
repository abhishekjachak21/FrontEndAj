//Revision->28-08-2024
//topics covered->
// higher order fun, eg -> forEach,map-filter-reduce


////================================================================
//Example for higher order function:

// const radius = [1, 2, 3];
// // function to calculate area of the circle
// const calculateArea =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// // function to calculate diameter of the circle
// const calculateDiameter =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));
// console.log(calculateDiameter(radius))

//-----


// const radius = [1, 2, 3];

// const area = function(radius){
//     return Math.floor(Math.PI * radius * radius);
// }

// const diameter = function(radius){
//     return 2 * radius;
// }

// const calculate = function(radius, logic){ 
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculate(radius, diameter));
// console.log(calculate(radius, area));


////================================================================







////================================================================
///what is Higher order function and what is callback function ?
// Breaking It Down:
// "Khana khane ke baad bartan andar rakh" is like a higher-order function.
// "Bartan andar rakh" is like the callback function.
// How It Works:
// The higher-order function (khana khane ke baad bartan andar rakh) does something (e.g., eating food) and then calls another function when it’s done (bartan andar rakh).
// The callback function (bartan andar rakh) is the action that gets executed after the main task is completed.
// In this analogy:

// Khana khana (eating food) is the main task.
// Bartan andar rakh (putting the dishes away) is the additional task that happens after, which is like the callback function being executed after the main function is done.
// So yes, in this context, "bartan andar rakh" is acting like a callback function that gets executed after the main action (eating) is completed.
////================================================================

















///-----------------------------------------------------
///-----------------------------------------------------
//Revision->17 Feb 2024
//topics covered->
//callback fun
// higher order fun..forEach &  map-filter-reduce




///-----------------------------------------------------
// forEach vs map-filer-reduce






///-----------------------------------------------------






///-----------------------------------------------------
// merging map-filer-reduce





///-----------------------------------------------------
















///-------------------------reduce----------------------------
// main purpose of the reduce function in JavaScript is to reduce an array to a single value.
//reduce synatx:  reduce(callbackFn, initialValue)
// const initialValue = 0;
// const sumWithInitial = array1
//   .reduce(  (accumulator, currentValue)=>accumulator+currentValue, initialValue);

// const arr4 = [4,5,6];

// const initial = 20;
// const arr5 = arr4.reduce((acc,curr)=> acc+curr, initial );

// console.log(arr5);
///-----------------------------------------------------











///--------------------filter---------------------------------
//filter ... syntax ->
// const arr = [2,8,4,9,0];

// const arr2 = arr.filter( (item) => {return item>5}  )

// console.log(arr2);

// 3 diff ways
// const arr2 = arr.filter( (item) => {return item>5} )   //R
// const arr2 = arr.filter( (item) => { item>5} )    //Wrong approach
// const arr2 = arr.filter( (item) => ( item>5 ) )      //R
// const arr2 = arr.filter( (item) =>  item>5   )            //R




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










///-----------------map------------------------------------
// main purpose of the map function in JavaScript is to transform elements of an array into a new array based on a transformation function applied to each element

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


///-----



// console.log(doubledNumbers); 
// const arr = [2,8,4,9,0];

// // const arr2 = arr.map( (item) => {return item*5}  )
// // const arr2 = arr.map( (item) => ( item*5)  )
// const arr2 = arr.map( (item) => ( item+5)  )

// console.log(arr2);

///-----------------------------------------------------







///-----------------------------------------------------
// forEach, map, filter, reduce, are higher order functions.
//forEach ...syntax ->

//forEach has 3 arguments (currElement, index, array) keep in mind
// numbers.forEach( function(){} );  -- inshort

//--------

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num, index) {
//     if (num % 2 === 0) {
//         numbers[index] = num * 2; // Double the value of even numbers
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

// let arr = ['1',402,'true', "banana", "hello", true, 0,  1,2,34,"apple"];

// const filterStr = (arr) => {  // i thought this is callback funbut its not
//      return arr.filter( item => typeof(item)=== 'string'  ) 
// }

// const highOrd = (filteredStr) => {  //this is higherord fun no doubt
//      console.log("Hi below are strings from array 'arr' ");
//      console.log(filteredStr);
// }

// const stringF = filterStr(arr);

// highOrd(stringF);

///-----------------------------------------------------

// Higher-order function that accepts a callback
const performAction = (callback) => {
    const result = "Action performed!";
    callback(result);
}

// Callback function
const myCallback = (message) => {
    console.log(message);
}

// Using the higher-order function
performAction(myCallback);

///-----------------------------------------------------











/////#### BELOW EXAMPLE ARE COMPLEX, IAM REWRITING THEM ON 3-9-2024, FOR SIMPLICITY, ABOVE/
////DO NOT REFER THEM, JUST BE CONFIDENT THAT YOU ARE EVOLVING

///-----------------------------------------------------
// Higher-order function

// function performOperation(k,callback) {
//     console.log('Performing operation...');
//     callback(); 
// }

// function logMessage() {
//     console.log('Operation completed!');
// }

// performOperation(console.log(2 * 3),logMessage);



// Higher-order function - AI Generated

// function performOperation(...callbacks) {
//     console.log('Performing operation...');
//     callbacks.forEach(callback => callback()); // Execute each callback function
// }

// // Callback function
// const logMessage = () => console.log('Operation completed!');

// // Callback function
// const k = () => console.log(2 * 3);

// // Call the higher-order function with multiple callback functions
// performOperation(k, logMessage);

///-----------------------------------------------------




///-----------------------------------------------------
//callbackfunction

// function buckle(l,m,uncle){
//     console.log(l*m*uncle(4,5));
// }


// const buckle = (l,m,uncle) =>  console.log(l*m*uncle(4,5));
// var uncle = (a,b) => a+b ;
// buckle(2,3,uncle);


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



