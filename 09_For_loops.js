// For loop
// This will print 0 to 20
/*
for(let i = 0; i < 21; i++){
    console.log(i);
}

// This will print 1 to 21
for(let i = 0; i < 21; i++){
    console.log(i+1);
}

// Program to add first n natural number
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n)
for(let i = 0; i < n; i++){
    sum += (i+1);
}
console.log("Sum of first " + n + " natural number is " + sum);
*/

let obj = {
    harry : 35,
    shubh : 40,
    shiv : 55,
    shivam : 80
}
// For in loop
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
// For of loop
for(let b of "Rithik"){
    console.log(b)
}