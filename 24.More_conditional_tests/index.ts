//Test of equlity with strings
const myname: string = "Ali";
const myname1: string = "ali";
console.log(myname === myname1)



//Test of inequlity with strings
const myname2: string = "ali";
const myname3: string = "ali";
console.log(myname2 !== myname3)
console.log("1==================================")


//Tests using the lower case function
const myname4: string = "ALI";
const myname5: string = "ali";
console.log(myname4.toLowerCase() !== myname5)
console.log(myname4.toLowerCase() === myname5)
console.log("2==================================")

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log("3==================================")

//Tests using "and" and "or" operators
const age: number = 25;
const isStudent: boolean = true;

console.log(age >= 18 && isStudent);
console.log(age >= 18 || isStudent);
console.log(age < 18 && isStudent);
console.log(age < 18 || isStudent);
console.log("4==================================")

//Test whether an item is in an array
const mynamelist: string[] = ["Ali", "Ahmed", "Abdullah", "Usman"]
const validate: string = "Ali"
const validate2: string = "Hamza"
console.log(mynamelist.includes(validate));
console.log(mynamelist.includes(validate2));
console.log("5==================================")

//Test whether an item is not in an array:
console.log(!mynamelist.includes(validate));
console.log(!mynamelist.includes(validate2));
