///------------------------------------------------
//after 25min..reduce started

// const guru = [1,2,3,4,5,21,22,24,27,3,4,5,67]

const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}



///------------------------------------------------


/* ///------------------------------------------------
//after 17min of lec...Map started

const root = [8,4,2,1,9,7,2,5,10,21,57]

///this is mistake..see below
//  const newRoot = root
//                     .map(item * 2)

//                 console.log(newRoot); 


// const newRoot = root.map( (item) => item * 10 )
// const newRoot = root.filter( (item) => item > 10 )
// console.log(newRoot);

const newRoot = root.map( (item) => item * 10 )  //for operation use map
                    .map( (item) => item + 10 )
                    .filter ( (item) => item > 500 )  //for filtration use filter

console.log(newRoot);

const duck = root.map( (item) => item+1  )

console.log(duck);

 ///------------------------------------------------*/



/* ///------------------------------------------------
///10pm, Tuesday, Sept 26 2023
///Lecture Starts on filter map reduce etc

const root = [89,2,1,9,7,2,5,10]

// const newROOTS = root.filter( (item) =>  { item > 3 }  ) //why not
const newROOTS = root.filter( (item) =>  {return item > 3 }  ) //bcz { curly braces need return statement}
// const newROOTS = root.filter( (item) =>  item > 3    )

console.log(newROOTS);


//------now filter using foreach loop------

const accha = [2,9,7,1,5,12,33,65,78]
const bahotAccha = []

//jk.foreach( function  )
//jk.foreach( function(){} ) 1st way or
//jk.foreach( () => {}  ) 2nd way


accha.forEach(
  (item) => {
    if(item>11){
        bahotAccha.push(item);
    }
  }  
)
 
console.log(bahotAccha)


///great example of filter , array of obj, obj = 1book info
// const userBooks = books.filter( (bk) => bk.genre === "history"    )


///------------------------------------------------  */