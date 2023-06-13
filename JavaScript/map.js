
//Mapping
const arr = [2,5,8,4,6];

console.log(arr);

function double(x){ // double
 return x * 2;}

function binaryOP(x){
 return x.toString(10);}   //radix parameter 2 for binary, 10 for decimal as it is

const op = arr.map(double);
const opBin = arr.map(binaryOP);

console.log(op);
console.log(opBin);

//by using arrow function 
const arrowFun = arr.map((x)=> x*2);
console.log(arrowFun);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) =>  number * 2 );

console.log(doubledNumbers);