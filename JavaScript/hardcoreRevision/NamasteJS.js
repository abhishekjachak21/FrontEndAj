



//==============================================
// setTimeout(() => {
//   console.log("timeee");
// }, 5000);

// function x(y){
//   console.log("x");
//   y();
// }
// x(function y(){
//   console.log("y");
// })



async function fetchData() {
  console.log("Fetching data...");
  const data = await new Promise(resolve => {
      setTimeout(() => {
          resolve("Data received!");
      }, 3000); // Simulate a 3-second fetch
  });
  console.log(data);
}

console.log("Before calling fetchData");
fetchData();
console.log("After calling fetchData");



//==============================================






//==============================================
// function bigRoom() {
//     let toy1 = "Car"; // This toy is in the big room
  
//     function smallRoom() {
//       let toy2 = "Ball"; // This toy is in the small room
  
//       console.log(toy1); // You can see the Car from the small room
//       console.log(toy2); // You can see the Ball in the small room
//     }

//     function midRoom() {
//         let toy3 = "Ball00n"; // This toy is in the small room
    
//         console.log(toy1); // You can see the Car from the small room
//         console.log(toy2); // You can see the Ball in the small room
//         console.log(toy3); // You can see the Ball in the mid room
//       }
  
//     // smallRoom(); // You go to the small room
//     midRoom();
//     // console.log(toy2); // You can't see the Ball from the big room (closed door)
//   }
  
//   bigRoom(); // You start in the big room
  
  


// function x(){
//     var a = 25;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

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

//==============================================






///-------------------------------------------------
// function c(){
   
//     a()
//     function a(){
//     //   console.log(b);
//       d()
//     function d(){
//       console.log(b);
//     }
//     }
// }
// var b = 28;
// c()

///-------------------------------------------------





///-------------------------------------------------
// #5video (13-08-2024)
//Function behind the scenes

// var c = 1;
// a();
// b();
// console.log(c);


// function a(){
//     var c = 10;
//     console.log(c);
    
// }
// function b(){
//     var c = 100;
//     console.log(c);
// }
///-------------------------------------------------
