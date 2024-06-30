//Video-> Piyush Garg
//todays date-> 25June2024,10.34am) , till 26june 6pm ended 40min video took 4 hrs, hope this doesnt repeat in next part
//going now, to start next part

//Q/-------------------------------------------------------------
// const obj = Object.create({
//     height :30,
// })
// console.log(obj.height);

// delete obj.height;

// console.log(obj.height);
//CREATE KARNE SE height prototype mei banti h so delete karne se bhi vo delete ni ho pati
///-------------------------------------------------------------






//Q/-------------------------------------------------------------
// const piyush = {
//         name : "piyush bhai",
//         sayName : function(){
//             console.log(this.name);
//         }
//     }
// setTimeout(() => {
//     piyush.sayName()
// }, 3000);   

// .bind() function assign hai, aur .call() direct call karta h
///-------------------------------------------------------------






//Q/-------------------------------------------------------------
// const abhi = {
//     name : "abhi j",
//     sayName : function(){
//         console.log(this.name);
//     }
// }
// const piyush = {
//     name : "piyush bhai",
//     sayName : function(){
//         console.log(this.name);
//     }
// }
// // piyush.sayName()
// function myName (){
//     console.log(this.name); 
// }

// myName.call(piyush);   ////call makes it more specific bhai, this poora obj de dalta hai, fir bhi jyada nhi uutra


// const nf = myName.bind(piyush)  // .bind() function banata hai, aur .call() direct call karta h

// nf()
///-------------------------------------------------------------





//Q/-------------------------------------------------------------
// for (const i = 0; i < 10; i++) {  //var-> global context, let-> local scope
//     setTimeout(() => console.log(i), 0);
// } 

//bcz let har ek iteration mei ek naya 'i' create karta h.
/*var: It's like everyone shares one marker. When we check later, we see the same number written by everyone.
let: It's like everyone has their own marker. When we check later, we see each kid's own number. */
///-------------------------------------------------------------





//Q/-------------------------------------------------------------
// foo = 100;
// console.log("foo: ",foo);
// var foo = 50;
// console.log("foo: ",foo);
///-------------------------------------------------------------



//Q/-------------------------------------------------------------
//IIFE
// (()=>console.log("Start"))();
///-------------------------------------------------------------






//Q/-------------------------------------------------------------
//jara jara hoisting wlaa hi question hai

// myFun()
// var myFun = ()=>console.log("FIRST")
// myFun()
// function myFun(){
//     console.log("SECOND");
// }
// myFun()



/* aise hoti h process

function myFun() {
    console.log("SECOND");
}
var myFun; //declaration are hoisted(pulled something to top), but not initializn
myFun();
myFun = () => console.log("FIRST");
myFun();
myFun();
*/
///-------------------------------------------------------------






//Q/-------------------------------------------------------------
//Hoisting and temporal dead zone
// var age = 100
// console.log("Age: ",age)
// let age = 23 //let,const ke upar jo hota h vo temporal dead zone h,isiliye let initializn error deta h

// console.log("Age: ",age)
// var age=23;
// console.log("Age: ",age) //hoisting kehte h bhai iss pehlu ko, global context mei, memory phase mei pehle sare variables load hote h, 
///-------------------------------------------------------------