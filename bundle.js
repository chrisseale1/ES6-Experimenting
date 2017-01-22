"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//CONST, VAR, LET

//var motto = "I'm awesome but mutable.";
var motto = "I'm awesome and immutable!"; //this won't change. But how do we know if we don't want to change the value ever?

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
console.log(carSounds.horn);

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

//SOURCE MAPS:  Check out the source map that was added for bundle.  Use it for debugging

//DEFAULT arguments

function test() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    //if someone does not enter a value when the function is called,  0 will be used for a.
    console.log(a + 10);
};

test(); //this would return 10.  Previously, it would have returned NaN.

//NEW FOR LOOPS

//the old way
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); //logs 1 through 10
};

//new way
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = myArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i = _step.value;

        console.log(_i); //still logs 1 through 10
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

;
