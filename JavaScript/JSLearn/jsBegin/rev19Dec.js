// for loop
console.log("for loop:");
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
console.log("\nwhile loop:");
var j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do-while loop
console.log("\ndo-while loop:");
var k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);



// for...in loop
console.log("\nLOOP => for...in loop:");
var person = { name: "Abhishek", age: 25, salary:125000 };
for (var key in person) {
    console.log(key + ": " + person[key]);
}

Object.keys(person).forEach( (key) =>{
    console.log(key,":",person[key])});



// for...of loop
console.log("\n\nLOOP => for...of loop:");
var colors = ["red", "green", "blue"];
for (var color of colors) {
    console.log(color);
}
let arr1 =[" ",1,45,"raam","kabirSaheb"];
for(let item of arr1)
  console.log(item)




// forEach method
console.log("\nforEach method:");
var numbers = [1, 2, 3];
numbers.forEach(function (item) {
    console.log(item);
});


//forEachMethod
console.log("\nforEach method 2nd way:");

// function hehe(item) {
//     console.log(item);
// }


var numbers = [1, 4, 2, 3];
numbers.forEach(hehe);

function hehe(item) {
    console.log(item);
}


// map method
console.log("\nmap method:");
var squared = numbers.map(function (number) {
    return number * number;
});
console.log(squared);
