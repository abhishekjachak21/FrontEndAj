// syntax: const myPromise = new Promise(function(resolve,reject));
////-------------------------------------------------------
///creation
// const PromiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Ok bro,its complete');
//         resolve()
// },1000 );  //5000
//     // resolve();
// });

// ///consumption
// PromiseOne.then(function(){
//         console.log('Promise consumed,yippe!!')
//     });
////-------------------------------------------------------





////-------------------------------------------------------
// const promiseTwo = new Promise(function(resolve,reject){
//         setTimeout(function(){
//            resolve({namee:'Abhi',Div:'A'});
//         },3000);
// })    

// promiseTwo.then(function(user){
//     console.log(user);
// });


// /* //wrong ho gya bro
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function------------------------------------------
// /creation
// const PromiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Ok bro,its complete');
//         resolve()
// },1000 );  //5000
//     // resolve();
// }); */

// ///consumption
// PromiseOne.then(function(){
//         console.log('Promise consumed,yippe!!')
//     });
////-------------------------------------------------------





////-------------------------------------------------------
// const promiseTwo = new Promise(function(resolve,reject){
//         setTimeout(function(){
//            resolve({namee:'Abhi',Div:'A'});
//         },3000);
// })    

// promiseTwo.then(function(user){
//     console.log(user);
// });


///wrong ho gya bro(){
//         resolve()
//         let error =  true
//         if(error){
//             console.log("Errur: do something bro")
//         }else{
//             console.log({naav:'Sneha', Div:'Top'})
//         }
//     })
// })
////-------------------------------------------------------


////-------------------------------------------------------
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =  false
//         if(error){
//             reject("Errur: do something bro");
//         }else{
//            resolve({naav:'Sneha', Div:'Top'});
//         }
//     },2000)
// })
// .then(function(user){
//     console.log(user);
//     return user.naav;
// })
// .then(function(user){
//     console.log(user,"studying rn");
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(()=>{console.log("Happy Finally!!")});
////-------------------------------------------------------




////-------------------------------------------------------
const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let eror =  true
            if(eror){
                reject("Errur: do something bro");
            }else{
               resolve({naav:'Raam', Div:'Higher'});
            }
        },2000)
    })

// async function consumePromiseFour(){
//     const response = await promiseFour
//     console.log(response);
// }
async function consumePromiseFour(){
        try{
        const response = await promiseFour;
        console.log(response);}
        catch(eror){           //dont forget to write bracket(error) here
            console.log(eror);
        }
    }

consumePromiseFour();
////-------------------------------------------------------