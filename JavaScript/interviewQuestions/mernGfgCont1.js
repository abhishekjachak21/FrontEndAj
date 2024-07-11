//   ================= //before returning x=20 happens so finally 20 is output
// function outer() {
//     var x = 10;
  
//     function inner() {
//       console.log(x);
//     }
  
//     x = 20;
//     return inner;
//   }
  
//   var result = outer();
//   result();               //output 20
//   =================





//   ================= //1st prior is local then global, so global is 10, ans is 10
// var a = 10;
// function foo() {
//  console.log(a);
// }
// function bar() {
//  var a = 20;
//  foo();
// }
// bar();           // output 10
//   =================




//   =================
// var x = 5;   //5 is global, 10 is local, local cannot accessed by outside, so 5 is ans 
// function updateX() {
// var x = 10;
// }
// updateX();
// console.log(x);    //output 5
//   =================


//   =================
// var x = 900
//  x = 9080

// function myF(){
//     let x = 56

//      x = 53
//      x = 59
//     // var x = 90
//     console.log("Hi");
//     console.log(x);
// }
// //  x = 90086
// myF();
// console.log(x);
//   =================






function StringChallenge(str) { 

    // code goes here  
    const myMap = new Map();
    for(let i=0;i<str.size();i++){
      myMap[str[i]]++;
    }

    for(let i of myMap){
       console.log(i.firs)
    }
    
    return str; 
  
  }

StringChallenge(aaaabbbhiis);