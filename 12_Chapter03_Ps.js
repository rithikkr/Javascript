let marks = {
    harry : 70,
    shubham : 40,
    ayush : 7,
    billu : 8
}
// Problem No 1
for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Problem No 2
for(let key in marks){
    console.log("The Marks of " + key + " are " + marks[key]);
}

// Problem No 3
let cn = 20
let i 
while (i != cn) {
    console.log("Try Again");
    i = prompt("Enter your Number");
}
console.log("You Enter correct Number");

// Problem No 4
const mean = (a, b, c, d)=>{
    return (a + b + c + d)/4
}
console.log(mean(4 ,4, 4, 4))