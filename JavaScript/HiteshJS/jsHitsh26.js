

///----------------------------------------------------
// const userEmail = "0"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN



//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
///----------------------------------------------------




///----------------------------------------------------
// // Nullish Coalescing Operator (??): null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



//nullish coalescing operator  => null, undefined
///suno suno bro
/* '??' this operator is used when 
there is probability of ans 
null or undefined...so it is just a way 
to navigate null,undefined into some value */


// const a = '';
// const b = 0;
// const c = false;

// const result1 = '34' ?? '33'; // Using '' (empty string) since it's not null or undefined
// const result2 = null ?? "ok"; // Using 0 since it's not null or undefined
// const result3 = false ?? true ; // Using false since it's not null or undefined
// const result4 = null ?? true ?? "MyGod";

// console.log(result1); // Output: ''
// console.log(result2); // Output: 0
// console.log(result3); // Output: false
// console.log(result4); // Output: false

///----------------------------------------------------








///----------------------------------------------------

// console.log(val1);

// // Terniary Operator ( ?: )
// // condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80     ?    console.log("less than 80")    :    console.log("more than 80")
// if(iceTeaPrice <= 80) ? console.log("less than 80") : console.log("more than 80")

///----------------------------------------------------