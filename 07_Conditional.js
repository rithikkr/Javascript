let a = prompt("Hey whats your age?")
a = Number.parseInt(a) //Converting the string to a number
if (a < 0) {
    alert("This is an invalid age")
}
else if(a < 9){
    alert("You are a kid and you cannot think of driving")
}
else if(a < 18 && a >= 9){
    alert("You are a kid and you can think of driving after 18")
}
else{
    alert("You can now drive you are above 18")
}
console.log("Done")

console.log("You can", (a <18? "not drive" :"drive"))

// HomeWork - Explore switch statement and write a basic program in the comments
const phone = 'Samsung';
switch (phone) {

case 'Mi':
case 'oppo':
console.log("This to phone under the 40000");
break;
case 'apple':
console.log("Bhai soch bhi maat...");
break;
case 'Samsung':
console.log("This phone under the 50000");
break;

default:
console.log("Bhai tu nokia 1400 lele..");

}