let num = [1, 2, 3, 4, 5, 56];
let b = num.toString() //b is now a string
console.log(b);
console.log(typeof b);
let c = num.join(" and ");
console.log(c, typeof c);
let d = num.pop(); //pop returns the popped element
console.log(num, d)
let e = num.push(55); //push return the new array length
console.log(num, e);
let f = num.shift();
console.log(f, num) //Removes an element from the start of the array
let g = num.unshift(67); //Adding and return new array length
console.log(g, num)
