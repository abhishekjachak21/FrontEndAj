
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
        name:"vipin",
        isActive:false,
        age:30
    }
]


const names =[];
for (let index = 0; index < users.length; index++) {
    names.push(users[index].name)
}
console.log(names);