var ourFunction = function() {
    let x = "this is in the outer scope";

    if(true) {
        let x = "this is a new value";
        console.log(x);
    }

    console.log(x);
}

ourFunction();


let awesomeBands = ["Jack White", "Smashing Pumpkins"]

let bands = ["Tool", "Medicine", "Morphine", ...awesomeBands];

console.log(bands);

