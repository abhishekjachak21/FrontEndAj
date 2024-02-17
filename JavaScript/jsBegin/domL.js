











///-------------------------------------------------
///BUlb on off,changing content in button also
///also the color,console prints on off 
const btn = document.querySelector('.btn')
const bulb = document.querySelector('.bulb')
var flag=0;
btn.addEventListener('click',function(){

    if(flag==0){
    bulb.style.backgroundColor = 'white';
    console.log("Bulb off");
    // document.querySelector('button').innerHTML = 'ON';
    btn.innerHTML = 'ON'
    flag=1;    
}
else{
    bulb.style.backgroundColor = 'yellow';
    console.log("Bulb on");
    // document.querySelector(button).innerHTML = 'OFF';
    btn.innerHTML = 'OFF'
    flag=0;
}
});
///-------------------------------------------------







///-------------------------------------------------
// console.log("Hi")

// const butt = document.querySelector("h1");

// console.log(butt)

// butt.innerHTML = 'guidelines are caretakers'

// console.log(butt)

// butt.style.color = 'yellow'
// butt.style.backgroundColor = 'black'

// butt.addEventListener('click',function(){
//     //  console.log("Hehehehe")
//     //  console.log("Hehhe")
//     butt.style.backgroundColor = 'green'
//     butt.innerHTML = 'listen bro'
// })
///-------------------------------------------------




