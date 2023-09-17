// console.log(1==='1')


/*
///Objects
///------------------------------------------------
const human={
 blood:"Red",
 neuron:"Lakhs",
 cover:"skin",
 energy:"Food",
"key":"Lock",
"keyer":"Locker",
"Lock make":"Key"}
console.log(human.energy)
console.log(human.key);
console.log(human.keyer);
console.log(human["Lock make"]);
///------------------------------------------------






///------------------------------------------------
console.log("hii");
const person={namee:"Abhii",age:"20"};
console.log(person);
console.log(person.namee);
person.passion="Walking";
person.goal="Java Script";
// person.goal="Conquering World";
console.log(person);
///------------------------------------------------*/



///------------------------------------------------
var naav = "abhi";
console.log(naav);

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person);  

// In the example above, this refers to the person object.
// I.E. this.firstName means the firstName property of this.
// I.E. this.firstName means the firstName property of person.
///------------------------------------------------