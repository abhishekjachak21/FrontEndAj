console.log('Abhi');
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (butt) {
//   console.log(button);
  butt.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
    //   body.style.backgroundColor = 'pink';
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') 
      body.style.backgroundColor = e.target.id;
    
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
      }
  });
});
