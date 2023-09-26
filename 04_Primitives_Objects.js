// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true;
let d = BigInt("500") + BigInt("500");
let e = "Rithik";
let f = Symbol("I am a nice Symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof a);

// Object in Js - Non primitive Data types
const names = {
    "Rithik" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Harry" : undefined
}
console.log(names["Rithik"]);