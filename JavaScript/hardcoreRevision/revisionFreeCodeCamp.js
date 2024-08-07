


// ///Promises
// // const promise = new Promise((resolve, reject) => {
// //   let value = false
// //   if (value) {
// //     resolve('hey value is true')
// //   } else {
// //     reject('there was an error, value is false')
// //   }
// // })

// // promise
// //   .then((x) => {
// //     console.log(x)
// //   })
// //   .catch((err) => console.log(err))
//   //-----for fun only
// async function checkValue() {
//   const promise = new Promise((resolve, reject) => {
//     let value = true;
//     if (value) {
//         setTimeout(()=>{
//           resolve("Love you bro")
//         },9000)
    
//     } else {
//       reject('there was an error, value is false');
//     }
//   });

//   try {
//     const h="pehle mai"
//     console.log(h);
//     const result = await promise;
//     console.log(result); 
//   } catch (err) {
//     console.log(err); 
//   }
// }
// checkValue();
//   ////----




// const student_1 =  {
//   name: 'Randall',
//   displayName_1: function displayName() {
//       console.log(this.name)
//   }
// }
// const student_2 =  {
//   name: 'Raj',
//   displayName_2: function displayName() {
//       console.log(this.name)
//   }
// }

// // student_1.displayName_1()
// // student_2.displayName_2()
// student_1.displayName_1.call(student_1)  
// student_1.displayName_1.call(student_2) 






// function myFunc() {
//   console.log("hi")     
// }

// const obj = {
// bool: true,
// myFunc: myFunc,
// }

// obj.myFunc()







// function Counter() {
//     var count = 0; // Private variable
  
//     // Public method to increment the count
//     this.incrementCount = function () {
//       count++;
//       console.log(count); // Log the current count
//     };
//   }
  
//   // Attempting to log count directly results in an error
// //   console.log(count); // Error: count is not defined
  
//   // Creating a new instance of Counter
//   var adder = new Counter();
  
//   // Calling the incrementCount method
//   adder.incrementCount(); // 1
//   adder.incrementCount(); // 1
//   adder.incrementCount(); // 1
//   adder.incrementCount(); // 1
//   adder.incrementCount(); // 1

  



// //currying
// let add = function (x) {
//     return function (y) {
//       console.log("x",x,"y",y,"ans",x + y)
//     }
//   }
  
//   let addByTwo = add(2)
//   addByTwo(3)
// // so ok closures means, adhi apan baherch function invoke karnar, invoke 
// //kelela function aatlya function la alert mode vr aananr, then jevha mi
// //aatla function call karnar tevha direct final result yenar.

// const greet = () =>  {
//     const prefix = 'Mr'
//     return (name) => {
//         console.log(`${prefix} ${name}, welcome!`)
//     }
// }

// console.log(greet()('Jack'))


// Return a new array where even numbers are multiplied by 2 
// let arr = [1, 2, 3, 4, 5, 6, 7]

// function consoleEven(arr) {
//   let data = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 1))
  
//   console.log(data)  // [1,  4, 3, 8, 5, 12, 7]
// }
// console.log(arr);













// const numbers = [1, 2, 3, 4];
// numbers.forEach((number, index, arr) => {
//   arr[index] = number * 2; // Mutates the original array
// });
// console.log(numbers); // [2, 4, 6, 8]
