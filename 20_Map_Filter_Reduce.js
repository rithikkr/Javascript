let arr = [3, 54, 88, 66];
// Array map method
let a = arr.map((value, index, array) =>{
    console.log(value, index, array);
    return value + index;
})
console.log(a)

// Array filter method
let arr2 = [3, 54, 88, 66, 5, 4, 0];
let a2 = arr2.filter((a)=>{
    return a < 10;
})
console.log(a2)

// Array reduce method
let arr3 = [3, 5, 4, 0];
const reduce_func = (h1, h2) =>{
    return h1 + h2;
}
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);