// When you create a closure, the inner function "remembers" the variables from its outer functions because of lexical scoping.

//Closure: An inner function remembers variables from its outer functions because of lexical scoping, even after the outer function has finished running.

//Lexical Scoping: Like looking for toys in rooms, JavaScript looks for variables in nested functions based on where the code is written.

//when we return inner function, it gets returned with its lexical environement(like variables and all)...it not just return function, it return lexical scope

//closure = function along with scope (simple defination)

// // so ok closures means, adhi apan baherch function invoke karnar, invoke 
// //kelela function aatlya function la alert mode vr aananr, then jevha mi
// //aatla function call karnar tevha direct final result yenar.

//===========================Updated, final understanding of it, on 7 aug 2024===================
// //currying
// let add = function (x) {
//     return function (y) {
//       console.log("x",x,"y",y,"ans",x + y)
//     }
//   }
  
//   let addByTwo = add(2)
//   addByTwo(3)
// =======================================



// ======CLOSURE CLOSED=================================
//bhai bhai se nhi le sakta but bhai baap se le sakta hai,
// but baap bhi apne beto se nhi le sakta

// FINAL CLOSURE: Function with its lexical scope.
//inner 10th fun can also access 1st layer fun values, its bcz lexical scope.
// so when innermost fun returns, it gets returned with with whole lexical scope(lexical env values.)

//aaj final closure samajlay(18-08-2024) ; but technically, its 19-08-2024, 01:34AM
//==============================================







// Disadvantages of Closures in JavaScript 😅
// Overconsumption of memory or memory leaks can happen.
//read for more "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/#javascriptbasics"


//==============================================
function x(){
    var a = 25;
    function y(){
        console.log(a);
    }
    y();
}
x();
//==============================================












// //==============================================
    // function makeFunc() {
    //     var name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     name = "Akshay"
    //     return displayName;   //return karne se jo bhi uss func se jude hue h vo bhi return ho jate h pura scope return hota h
    // }

    // const myFunc = makeFunc();
    // console.log(myFunc);
    // myFunc();
// //==============================================