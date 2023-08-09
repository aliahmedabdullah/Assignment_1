//Test of equlity with strings
var myname = "Ali";
var myname1 = "ali";
console.log(myname === myname1);
//Test of inequlity with strings
var myname2 = "ali";
var myname3 = "ali";
console.log(myname2 !== myname3);
console.log("1==================================");
//Tests using the lower case function
var myname4 = "ALI";
var myname5 = "ali";
console.log(myname4.toLowerCase() !== myname5);
console.log(myname4.toLowerCase() === myname5);
console.log("2==================================");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log("3==================================");
//Tests using "and" and "or" operators
var age = 25;
var isStudent = true;
console.log(age >= 18 && isStudent);
console.log(age >= 18 || isStudent);
console.log(age < 18 && isStudent);
console.log(age < 18 || isStudent);
console.log("4==================================");
//Test whether an item is in an array
var mynamelist = ["Ali", "Ahmed", "Abdullah", "Usman"];
var validate = "Ali";
var validate2 = "Hamza";
console.log(mynamelist.includes(validate));
console.log(mynamelist.includes(validate2));
console.log("5==================================");
//Test whether an item is not in an array:
console.log(!mynamelist.includes(validate));
console.log(!mynamelist.includes(validate2));
