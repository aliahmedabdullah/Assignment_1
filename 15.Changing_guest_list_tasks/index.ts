const myguestList: string[] = ["Ali", "Ahmed", "Abdullah","Usman"]

//Printing all guest 
for (let i = 0; i < myguestList.length; i++) {
    console.log(`Dear ${myguestList[i]}, I cordially invite you to the birthday dinner tomorrow to be held at my residence`);
  }
  console.log(`==================================================`)


//Print one who is not coming
const removeGuest = 2;
console.log(`${myguestList[removeGuest]} is not coming`)
console.log(`==================================================`)
myguestList.splice(removeGuest,1)

//Replacing previous deleted name with new one
const addGuest=2
myguestList.splice(addGuest,0,"Mateen")

//Printing updated list
for (let i = 0; i < myguestList.length; i++) {
  console.log(`Dear ${myguestList[i]}, I cordially invite you to the birthday dinner tomorrow to be held at my residence`);
}
console.log(`==================================================`)

//


