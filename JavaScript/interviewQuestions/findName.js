
/*
1. chk if user name exists or not
2. adding a element to the array
3. remove duplicate elements in the array
4.concatening the array
*/



///----------------------------------------------------------------
//4. concatenation of an array
const arr1=[1,2,3]
const arr2=[4,5,6]
console.log([...arr1, ...arr2]);
console.log(arr1,arr2);
///----------------------------------------------------------------





///----------------------------------------------------------------
///3. remove duplicates element in the arrayk       

// const arr = [1,2,3,4,4,5,5,5,6,7];
// const arr2 = [... new Set(arr)] //bhot fark h ...new Set() mei aur sirf new Set() mei
//spread operator individual dalta hai usme se, uske(S.O) bina, vo pura array ek element jaisa ek obj jaisa behave karta h
// // console.log(arr);
// console.log(arr2);


//soln 2
// const arr1 = [1,2,3,4,4,5,5,5,5,5,5,5,6,7];
// const uniqueArr = (arr) => {
//     return arr.reduce((superman,ele)=>{
//         return superman.includes(ele) ? superman : [...superman,ele] 
//     },[2])
// }

// console.log(uniqueArr(arr1));

///----------------------------------------------------------------






///----------------------------------------------------------------
///2. adding element to array
// -> .push() se original element bhi badal jata h lekin spread operator se nahi badalta

// const arr = [1,3,5]
// const arr2 = [...arr,7,9]
// console.log(arr2);

//using function now

// const arr = [1,3,5]
// const append = (arr,ele) => {
//     return [...arr,ele]
// }

// console.log(append(arr, 7));
// console.log(arr);

///----------------------------------------------------------------





///----------------------------------------------------------------
// 1. chk if user name exists or not


// const users = [
//     {
//         id:1,
//         name:"ajay",
//         isActive:true,
//         age:20
//     }
//     ,{
//         id:2,
//         name:"akash",
//         isActive:true,
//         age:18
//     }
//     ,{
//         id:3,
//         name:"fraz",
//         isActive:true,
//         age:34
//     }
//     ,{
//         id:4,
//         name:"vipul",
//         isActive:false,
//         age:30
//     }
// ]

// //level-1
// const isNameExists = (name,users) => {
//     let exist = false;
//     for (let i = 0; i < users.length; i++) {
//         if(users[i].name == name) exist = true;
//     }
//     return exist;
// }

// console.log(isNameExists("vipin",users))


// //level-2 find user

// const isNameExists = (name, users ) => {
//    const user = users.find((usr)=>usr.name === name);
//    return Boolean(user);
// } 
// console.log(isNameExists("vipul",users))


// //level-3 find user w/o boolean word

// const isNameExists = (name, users ) => {
//    const user = users.some((usr)=>usr.name === name);
//    return user;
// } 
// console.log(isNameExists("vidpul",users))


//level-4 find index

// const isNameExists = (name, users ) => {
//     const index = users.findIndex((usr)=>usr.name === name); //callback ata h bhot fun ke andar
//     return index;
//  } 
//  console.log(isNameExists("vipul",users))

///----------------------------------------------------------------