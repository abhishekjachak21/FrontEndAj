
/////-------------------------------------------------
///after 20min lec


// const num = [1,2,3,4,5,"Hehe"]
const num = [11,22,33,44,55]

num.forEach( function(item){   //mast ekdam bruh
    console.log(item*3);
})



///arrow function ====  function() , arrow=>
// fuk = () =>  console.log("hei")
// fuk = () => (  console.log("hei")  )
fuk = () => console.log("hei abhishek,come on")

fuk();

num.forEach( function(val, index, num) {
    console.log(val,index,num)
})



const animals = ["frog","deer","tiger","cat"]

animals.forEach (
      function (ele) {
            console.log(ele);
      }
)
////in short, foreach loop =>  arryName.forEach( function(){ }   )

//jk.foreach( function  )
//jk.foreach( function(){} ) 1st way or
//jk.foreach( () => {}  ) 2nd way




/////-------------------------------------------------










/////-------------------------------------------------
// for..of loop///


// const arr1 = ["helo", 20, 24, 28, "NoOk"];

// for (const ele of arr1)
//   console.log(ele);


// const wordd = "Heelo Brother"  
// // const wordd = "Helo Brother"  

// for(const i of wordd)
//   console.log(i);




///maps///

// Create a map
// const fruits = new map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits);


// const fruits = new Map();  //case sensitive -> its Map, not map
//     fruits.set('apples', "500")
//     fruits.set('bananas', "300")
//     fruits.set('oranges', "200")
  

// //   console.log(fruits);

// for(const [key,val] of fruits)  
//    console.log(key,val);



///for..in loop///

// const anaconda = {
//     a : "Ant",
//     b: "Band",
//     c : "chnat"
// }

// for(const ele in anaconda)
//     console.log(`Key is a ${ele},and value is ${anaconda[ele]}`)


//for in loop fetches KEY in obj, but also in array too,
//just it fetches indexes as 0,1,2,3... bcz array has keys 0,1,2 and
//in obj we can customize keys


//also map is not iterable so forin loop we cant use

/////-------------------------------------------------