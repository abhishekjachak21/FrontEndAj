//naam print karke dikhao.(EP. 1) by Suneja Ajay
//use node <filename> to run these files on nodejs


const users = [
    {
        id:1,
        name:"ajay",
        isActive:true,
        age:20
    }
    ,{
        id:2,
        name:"akash",
        isActive:true,
        age:18
    }
    ,{
        id:3,
        name:"fraz",
        isActive:true,
        age:34
    }
    ,{
        id:4,
        name:"vipul",
        isActive:false,
        age:30
    }
]


// //level-1(low)
// const names =[];
// for (let index = 0; index < users.length; index++) {
//     // names.push(users[index].name)
//     console.log((users[index].name))
// }
// // console.log(names);

//level-2
//  users.forEach((user)=>{
//       console.log(user.name);
//  })

// const names = []
// users.forEach((user)=>{
//           names.push((user.name))
//      })
//      console.log(names);

// //level-3(higher)
// const names =[];
// for (let index = 0; index < users.length; index++) {
//     if(users[index].isActive) names.push(users[index].name);
// }
// console.log(names);

//level-4
// console.log(users.filter((user)=>!user.isActive).map((user)=>user.name)); //both correct
// //or
// console.log(users.filter((itemm)=>!itemm.isActive).map((item)=>item.name)); //both correct

////#NOTE=> forEach doesnt return any array, but map does !



//====sorting====
// users.sort((a,b)=> a.age>b.age ? 1 : -1) //ascending
// console.log(users);


//sorting added
console.log(users
    .filter((user)=>user.isActive)
    .sort((a,b)=> a.age>b.age ? 1 : -1) 
    .map((user)=>user.name)); 