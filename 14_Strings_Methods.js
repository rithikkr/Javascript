let names = "Rithik";
// console.log(names.length);

// console.log(names.toUpperCase());
// console.log(names.toLowerCase());
// console.log(names.slice(2, 4));
// console.log(names.slice(2));
// console.log(names.replace("Rit", "Sit"))

// let friend = "Naman";
// console.log(names.concat(" is a friend of ", friend))

// let friend2 = "             Rahul             "
// console.log(friend2)
// console.log(friend2.trim()) 

let game = "Pubg" + "Cricket" + "Football"
console.log(game[0]);
console.log(game[1]);
console.log(game[2]);
// game[4] = "O" //This is not possible because string are immutable string cant be change
console.log(game)

// String printing through for loop
let str = 'This is my string';
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}