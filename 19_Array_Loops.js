let num = [3, 54, 88, 66]

// Classical for loop
for(let i = 0; i <num.length; i++){
    console.log(num[i])
}

// ForEach Loop
num.forEach((Element)=>{
    console.log(Element * Element)
})

// Array.from
let names = "Rithik"
let arr = Array.from(names)
console.log(arr)

// for...of
for(let item of num){
    console.log(item)
}

// for...in
for(let i in num){
    console.log(num[i])
}