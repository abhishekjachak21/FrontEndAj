// polyfill.js
// polyfill.js
function delayPrint(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve(num);
      }, Math.random() * 1000);
    });
  }
  
  async function printNumbers() {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(delayPrint(i));
    }
    const results = await Promise.all(promises);
    console.log(results);
  }
  
  printNumbers();


  

// function someFunction(value) {
//     return new Promise((resolve) => {
//       resolve();
//     });
//   }
  
//   async function displayScores() {
//     const scores = [1, 2, 3, 4, 5];
//     console.log("Starting to display scores");
//     scores.forEach(async (score) => {
//       await someFunction();
//       console.log('The current score is ', score);
//     });
//     console.log("Finished displaying scores. This should execute last!");
//   }
//   displayScores();







// const promise1 = Promise.resolve('Hello');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'World'));
// const promise3 = Promise.reject(new Error('Oops!'));

// const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises)
//   .then((results) => {
//     console.log(results);
//   });





