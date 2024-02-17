

///---------------------------------------------------
////flat
const harri = [1,2,3,[4,5],6,[6,7,[8,9]]];
console.log(harri);
// const newArrBro = harri.flat(Infinity); //take (2) as a depth 
const newArrBro = harri.flat(4);  
console.log(newArrBro);    //but for safety can take infinity

const kaka = [101,102,103];
harri.push(kaka);   //pushes arr as a element
console.log(kaka);

console.log(harri);
const newHarri = harri.flat(5); // merging ALL in ONE
console.log(newHarri);

///destructuring
const [aila,maila,kaila,...ohho] = newHarri;
console.log(aila);
console.log(maila);
console.log(kaila);
console.log(ohho); //baki sagle
///---------------------------------------------------


///---------------------------------------------------
///18 Sept 2023
/// push,pop,shift,unshift,slice,splice
// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits);
// fruits.push("Krishna"); //add last
// console.log(fruits);
// fruits.pop();  //removes last
// console.log(fruits);
// fruits.shift();  //removes front
// console.log(fruits);
// fruits.unshift("Krishna");  //add front
// console.log(fruits);

// const arr = [5,6,7,8,9,10];
// console.log(arr);

// console.log(arr.slice(1,3)); //just chhilka nikala
// console.log(arr);

// console.log(arr.splice(1,3)); //adha piece kaat dala
// console.log(arr);
///---------------------------------------------------



///---------------------------------------------------
// //// push vs concat
// const erray = ['abhi', 'shyam', 'rahul'];
// console.log(erray);

// // const birray = ['nana', 'kaka', 'mama'];
// const birray = new Array('nana','kaka','mamaa');  //new way of creating array
// console.log(birray);

// const karray = erray.concat(birray);
// console.log(karray);

// // const marray = erray.push(birray);  //array will store like element
// // console.log(marray);  //marray nothing get affected
// // console.log(erray);

// // erray.push(birray);
// // console.log(erray);

// /// if 3 array u want to merge..aur yhi sabse best tarika
// const oarry = ["car", "cycle", "bike"];

// const darry = [...erray,...birray,...oarry]
// console.log(darry);
// console.log(typeof darry);
///---------------------------------------------------





///---------------------------------------------------
// //-> join() methoday converted into string

// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits);
// console.log(typeof fruits);

// const joinedString = fruits.join(', '); //arr
// console.log('Fruits: ' + joinedString);
// console.log(typeof joinedString);
// // Output: Fruits: apple, banana, cherry
///---------------------------------------------------
//revising this on 11Nov 2023





