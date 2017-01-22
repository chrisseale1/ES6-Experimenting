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

//FAT ARROWS (na na na gonna have a good time)
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


//TEMPLATE LITERALS
//old way concat
var shadysBack = "Guess who's back?" + " back again." + " Shady's back" + ", tell a friend." + "So the FCC won't let me be so they try" + " to shut me down on MTV" + ", but it feels so empty without me.";


//new way with variable and template literal
let topic1 = "NASCAR";

var PolRelHer = `
Let's talk about ${topic1},
Old Hollywood movie stars,
Let's talk about anything,
anything in this world...
cept politics, religion, and her.`;

console.log(PolRelHer);

//even with a function
let longStringFunction =(topic1)=>{
    return  `
    Richard Petty was the greatest driver in ${topic1} history.
    `;
}

console.log(longStringFunction(topic1));

//CLASSES
class Girlfriend {
    constructor(name, stability, attitude){
        this.name = name;
        this.stability = stability;
        this.attitude = attitude;
    }
    printName() {
        console.log("name = ", this.name);
    }   
    printStability(){
        console.log("stability = ", this.stability);
    }
    printAttitude(){
        console.log("attitude = ", this.attitude);
    }
}

const Angie = new Girlfriend("Angie", "unstable", "bitch");

Angie.printName();
Angie.printStability();
Angie.printAttitude();