console.log("Operators in Js")
// Arithmetic Operators
let a = 45;
let b = 4;
console.log("a + b = ", a + b);
console.log("a + b = ", a - b);
console.log("a + b = ", a / b);
console.log("a + b = ", a ** b);
console.log("a + b = ", a % b);

console.log("++a = ", ++a); //Output = 11
console.log("a++ = ", a++); //Output = 11
console.log("--a = ", --a); //Output = 11
console.log("a-- = ", a--); //Output = 11
console.log("a = ", a);     //Output = 10
console.log("a-- = ", a--); //Output = 10

// Assignment Operators
let assignment = 1;
assignment += 5 //Same as assignment = assignment + 5
console.log("a is now = ", a);
assignment -= 5 //Same as assignment = assignment - 5
console.log("a is now = ", a);
assignment *= 5 //Same as assignment = assignment * 5
console.log("a is now = ", a);
assignment /= 5 //Same as assignment = assignment / 5
console.log("a is now = ", a);

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);