



// Immediately Invoked Function Expressions (IIFE)
// ()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();     ///giveattention to semicolon biro

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('abhi')

//imagine this like

// (function chai(k){
//     console.log(`DB CONNECTED`);
// })chai(k);









///--------------------------------------------------
// // //Arrow function symbol :
// // //just replace function with function i.e () arrow i.e =>
// // //() => {}


// // // console.log(fufu(3,7));   //this works for 1st type like function tata(){}
// // const fufu = (n1,n2) => {
// //     return n1+n2;
// // }

// // const kuku = (n1,n2) =>  n1+n2;

// // const muku = (n1,n2) =>  (n1+n2);   //in react its useful

// // console.log(fufu(3,7));
// // console.log(kuku(9,4));
// // console.log(muku(2,5));



// ///upon this we do
// // const muku = (n1,n2) =>  (n1+n2);   //in react its useful
// // const muku = (n1,n2) =>  (user : "akshayKumar");   //error
// const muku = (n1,n2) =>  ({user : "akshayKumar"});   //success...this little things really matters bro

// console.log(muku(2,5));


///--------------------------------------------------





// const chai = function () {        ///shows undefined, bcz this keyword works in obj
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);         //this shows 'window' obj,bcz browser has global obj i.e window
// }


// chai()










///--------------------------------------------------
// ///ep23
// //arrow function
// console.log("Hi bro! Upskill yourself,that is the only way to reach God YOU");

// const yippe = {
//     user : "abhi",
//     kaal : "thikThak",
//     welcomeBro : function(){
//         console.log("accha");
//         console.log(`${this.user},welcome then`);
//     }
// }

// // console.log(yippe.welcomeBro); //teeno mei,bahut fark h bete
// // console.log(yippe.welcomeBro());  //dhyan se kaam le
// yippe.welcomeBro();
///--------------------------------------------------
















// Sir's code

/* const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() */