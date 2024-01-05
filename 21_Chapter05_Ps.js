// Chapter 5 Practice Set
// Practice Problem 1
// let arr = [1, 2, 3, 4, 5, 6, 99]
// let a = prompt("Enter a number")
// a =N umber.parseInt(a)
// arr.push(a)
// console.log(a)

// Practice Problem 2
let arr = [1, 2, 3, 4, 5, 6, 99]
let a;
do {
   a = prompt("Enter a number")
   a = Number.parseInt(a)
   arr.push(a)
}while(a != 0);
console.log(arr)
