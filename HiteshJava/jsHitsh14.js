

///---------------------------------------------------
///flat
// const harri = [1,2,3,[4,5],6,[6,7,[8,,9]]];
// console.log(harri);
// const newArrBro = harri.flat(Infinity); //take (2) as a depth 
// console.log(newArrBro);                 //but for safety can take infinity
///---------------------------------------------------


///---------------------------------------------------
//push vs concat
// const erray = ['abhi', 'shyam', 'rahul'];
// console.log(erray);
// const birray = ['nana', 'kaka', 'mama'];
// console.log(birray);
// const karray = erray.concat(birray);
// console.log(karray);

// const marray = erray.push(birray);  //array will store like element
// // console.log(marray);  //marray nothing get affected
// console.log(erray);

// // erray.push(birray);
// // console.log(erray);

// /// if 3 array u want to merge
// const oarry = ["car", "cycle", "bike"];

// const darry = [...erray,...birray,...oarry]
// console.log(darry);
// console.log(typeof darry);
///---------------------------------------------------





///---------------------------------------------------
// //-> join() methoday converted into string
// console.log('Fruits: ' + joinedString);
// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits);
// console.log(typeof fruits);

// const joinedString = fruits.join(', '); //arr
// console.log(typeof joinedString);
// // Output: Fruits: apple, banana, cherry
///---------------------------------------------------






///----------------------------------------------------
//18 Sept 2023
//slice vs splice
const arr = [5,6,7,8,9,10];
console.log(arr);


console.log(arr.slice(1,3)); //just chhilka nikala
console.log(arr);

console.log(arr.splice(1,3)); //adha pura kaat dala
console.log(arr);
///---------------------------------------------------

