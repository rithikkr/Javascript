let marks_class_10 = [91, 56, 84, 5, false, "Not Present"];
console.log(marks_class_10[0]);
console.log(marks_class_10[1]);
console.log(marks_class_10[2]);
console.log(marks_class_10[3]);
console.log(marks_class_10[4]);
console.log(marks_class_10[5]);
console.log(marks_class_10[6]); //Undefined because index 6 didn't exist
console.log("The length of marks is ", marks_class_10.length)
marks_class_10[6] = 77; //Adding a new value to the array
marks_class_10[0] = 89; //Changing the value of an array
console.log(marks_class_10);
console.log(typeof marks_class_10);

//Quiz
let array = [ 10,20,30,40,false,null]
for(let i = 0 ; i<=array.length ;i++ )
{
console.log(array[i])
}