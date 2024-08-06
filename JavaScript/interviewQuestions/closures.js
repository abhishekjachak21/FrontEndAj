// When you create a closure, the inner function "remembers" the variables from its outer functions because of lexical scoping.

//Closure: An inner function remembers variables from its outer functions because of lexical scoping, even after the outer function has finished running.

//Lexical Scoping: Like looking for toys in rooms, JavaScript looks for variables in nested functions based on where the code is written.

//when we return inner function, it gets returned with its lexical environement(like variables and all)...it not just return function, it return lexical scope

//closure = function along with scope (simple defination)




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