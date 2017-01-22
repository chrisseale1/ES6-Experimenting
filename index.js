//CONST, VAR, LET

var ourFunction = function() {
    let x = "this is in the outer scope";

    if(true) {
        let x = "this is a new value";
        console.log(x);
    }

    console.log(x);
}

ourFunction();

//SPREAD OPERATORS
let awesomeBands = ["Jack White", "Smashing Pumpkins"]

let bands = ["Tool", "Medicine", "Morphine", ...awesomeBands];

console.log(bands);

//OBJECT SHORTHAND CREATION

let myObject = { x: "cat", y: "dog"};

console.log(myObject.x);


const engine = "Vroom!";
const wheel = "ssssssshhhhhhh";
const horn = "Honk!";

const carSounds = {engine, wheel, horn};

console.log(carSounds);

//Fat Arrows (na na na gonna have a good time)
//old standard way
const oldway = function (){
    alert("hello world");
}

oldway();

//new way fat arrows
const newWay =()=>{
    alert("Hello World. Gonna have a good time!");
}

newWay();

//fat arrow with arguments
const newWayWithArg =(arg1, arg2)=>{
    alert(arg1 + arg2);
}

newWayWithArg("You're a ", "sly one, Mr. Grinch.");