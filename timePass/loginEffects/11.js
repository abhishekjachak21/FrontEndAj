



const btn= document.getElementById('btn');
const usr= document.getElementById('usr');
const pass= document.getElementById('pass');

btn.addEventListener('click',handlee)

function handlee(){
// Get the value of the username input field
const usernameValue = usr.querySelector('input').value;  //i just missed this
const passValue = pass.querySelector('input').value;  //i just missed this
if(usernameValue == 'abhi21'  && passValue=='123')  {
  display(usernameValue,passValue);
}
}

function display(usernameValue,passValue){
  console.log("Your Usrname is ",usernameValue);
  console.log("ur pass is ",passValue);
}