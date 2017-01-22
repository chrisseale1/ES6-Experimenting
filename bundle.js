"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

//FAT ARROWS (na na na gonna have a good time)
//old standard way
var oldway = function oldway() {
    alert("hello world");
};

oldway();

//new way fat arrows
var newWay = function newWay() {
    alert("Hello World. Gonna have a good time!");
};

newWay();

//fat arrow with arguments
var newWayWithArg = function newWayWithArg(arg1, arg2) {
    alert(arg1 + arg2);
};

newWayWithArg("You're a ", "sly one, Mr. Grinch.");

//TEMPLATE LITERALS
//old way concat
var shadysBack = "Guess who's back?" + " back again." + " Shady's back" + ", tell a friend." + "So the FCC won't let me be so they try" + " to shut me down on MTV" + ", but it feels so empty without me.";

//new way with variable and template literal
var topic1 = "NASCAR";

var PolRelHer = "\nLet's talk about " + topic1 + ",\nOld Hollywood movie stars,\nLet's talk about anything,\nanything in this world...\ncept politics, religion, and her.";

console.log(PolRelHer);

//even with a function
var longStringFunction = function longStringFunction(topic1) {
    return "\n    Richard Petty was the greatest driver in " + topic1 + " history.\n    ";
};

console.log(longStringFunction(topic1));

//CLASSES

var Girlfriend = function () {
    function Girlfriend(name, stability, attitude) {
        _classCallCheck(this, Girlfriend);

        this.name = name;
        this.stability = stability;
        this.attitude = attitude;
    }

    _createClass(Girlfriend, [{
        key: "printName",
        value: function printName() {
            console.log("name = ", this.name);
        }
    }, {
        key: "printStability",
        value: function printStability() {
            console.log("stability = ", this.stability);
        }
    }, {
        key: "printAttitude",
        value: function printAttitude() {
            console.log("attitude = ", this.attitude);
        }
    }]);

    return Girlfriend;
}();

var Angie = new Girlfriend("Angie", "unstable", "bitch");

Angie.printName();
Angie.printStability();
Angie.printAttitude();
