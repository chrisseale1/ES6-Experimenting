"use strict";

var ourFunction = function ourFunction() {
    var x = "this is in the outer scope";

    if (true) {
        var _x = "this is a new value";
        console.log(_x);
    }

    console.log(x);
};

ourFunction();

var awesomeBands = ["Jack White", "Smashing Pumpkins"];

var bands = ["Tool", "Medicine", "Morphine"].concat(awesomeBands);

console.log(bands);
