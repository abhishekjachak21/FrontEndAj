//Video-> By Piyush Garg
//todays date-> 26June2024, 6:04PM
//watch full video, is simple, conceptual, 

//Q/-------------------------------------------------------------
//Browers -> WebAPIs, utility functions
// call stack mei fun immediately call hota h isiliye settimeout uss fun ko browser ko saup dete h
//settimeout, fetch, promises etc ye sab browser ki sampatti h
// call stack vs webAPIs CB Queue
//event loop pushes functions into call stack, only if callstack is empty
//isiliye setimeout mei delay 0 ho bhi toh bhi vo last mei run hota h
function a(){
    console.log("A");
}

setTimeout(() => console.log("B"), 0);

a();

console.log("C");

Promise.resolve().then(()=>console.log("D"))


///-------------------------------------------------------------
