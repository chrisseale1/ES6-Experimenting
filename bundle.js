"use strict";

//CONST, VAR, LET

var ourFunction = function ourFunction() {
    var x = "this is in the outer scope";

    if (true) {
        var _x = "this is a new value";
        console.log(_x);
    }

    console.log(x);
};

ourFunction();

//SPREAD OPERATORS
var awesomeBands = ["Jack White", "Smashing Pumpkins"];

var bands = ["Tool", "Medicine", "Morphine"].concat(awesomeBands);

console.log(bands);

//OBJECT SHORTHAND CREATION

var myObject = { x: "cat", y: "dog" };

console.log(myObject.x);

var engine = "Vroom!";
var wheel = "ssssssshhhhhhh";
var horn = "Honk!";

var carSounds = { engine: engine, wheel: wheel, horn: horn };

console.log(carSounds);

//Fat Arrows (na na na gonna have a good time)
var oldway = function oldway() {
    alert("hello world");
};

oldway();

var newWay = function newWay() {
    alert("Hello World. Gonna have a good time!");
};

newWay();

var newWayWithArg = function newWayWithArg(arg1, arg2) {
    alert(arg1 + arg2);
};

newWayWithArg("You're a ", "sly one, Mr. Grinch.");
