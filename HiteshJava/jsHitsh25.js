console.log("hi");
function one() {
    console.log("One");
    console.log("then two");
    two();
}

function two() {
    console.log("two");
    console.log("then three");
    three();
}

function three() {
    console.log("three");
    console.log("the end");
}

one();
two();
three();