/*
///Discussed in videos
-> map
->
*/


///---------==-------------------------25 may 2024
// const akela = [12,24,36, 65, 72, 48]

// const bakela  = akela.map((i)=>{return i*2})
// console.log(bakela);

// // const dukela =  akela.reduce((y)=>{return y+=y})
// // console.log(dukela);
// const dukela = akela.reduce((x, y) => { return x + y},3);
// console.log(dukela); // 257

// const thakela = akela.filter((y)=>{return y%2==0})
// console.log(thakela);

///---------==-------------------------






 ///------------------------------------------------
///10pm, Tuesday, Sept 26 2023
///Lecture Starts on filter map reduce etc

// const root = [89,2,1,9,7,2,5,10]

// // const newROOTS = root.filter( (item) =>  { item > 3 }  ) //why not
// // const newROOTS = root.filter( (item) =>  {return item > 3 }  ) //bcz { curly braces need return statement}
// const newROOTS = root.filter( (item) =>  item > 3 );

// console.log(newROOTS);

/*
//------now filter using foreach loop------

const accha = [2,9,7,1,5,12,33,65,78]
const bahotAccha = []

//jk.foreach( function  )
//jk.foreach( function(){} ) 1st way or
//jk.foreach( () => {}  ) 2nd way


accha.forEach(
  (item) => {
    if(item>11){
        bahotAccha.push(item);
    }
  }  
)
 
console.log(bahotAccha)


///great example of filter , array of obj, obj = 1book info
// const userBooks = books.filter( (bk) => bk.genre === "history"    )


///------------------------------------------------  */


/* ///------------------------------------------------
//after 17min of lec...Map started

const root = [8,4,2,1,9,7,2,5,10,21,57]

///this is mistake..see below
//  const newRoot = root
//                     .map(item * 2)

//                 console.log(newRoot); 


// const newRoot = root.map( (item) => item * 10 )
// const newRoot = root.filter( (item) => item > 10 )
// console.log(newRoot);

const newRoot = root.map( (item) => item * 10 )  //for operation use map
                    .map( (item) => item + 10 )
                    .filter ( (item) => item > 500 )  //for filtration use filter

console.log(newRoot);

const duck = root.map( (item) => item+1  )

console.log(duck);

 ///------------------------------------------------*/



///------------------------------------------------
//after 25min..reduce started

// const guru = [1,2,3,4,5,21,22,24,27,3,4,5,67]

// const numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }



///------------------------------------------------























//revision did folder hardcore revision/

//Revision->17 Feb 2024
//topics covered->
//callback fun
// higher order fun..forEach &  map-filter-reduce


///-----------------------------------------------------
// merging map-filer-reduce





///-----------------------------------------------------







///-----------------------------------------------------
// forEach vs map-filer-reduce






///-----------------------------------------------------








///-------------------------reduce----------------------------
// main purpose of the reduce function in JavaScript is to reduce an array to a single value.
//reduce synatx:  reduce(callbackFn, initialValue)
// const initialValue = 0;
// const sumWithInitial = array1
//   .reduce(  (accumulator, currentValue)=>accumulator+currentValue, initialValue);

// const arr4 = [4,5,6];

// const initial = 5;
// const arr5 = arr4
//             .reduce( (a,b)=>{ return a+b}, initial );

// console.log(arr5);
///-----------------------------------------------------









/*

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






*/


///-----------------------------------------------------
//callbackfunction

function buckle(l,m,uncle){
    console.log(l*m*uncle(4,5));
}


// const buckle = (l,m,uncle) =>  console.log(l*m*uncle(4,5));
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




