var myguestList = ["Ali", "Ahmed", "Abdullah", "Usman"];
//Printing all guest 
for (var i = 0; i < myguestList.length; i++) {
    console.log("Dear ".concat(myguestList[i], ", I cordially invite you to the birthday dinner tomorrow to be held at my residence"));
}
console.log("==================================================");
//Print one who is not coming
var removeGuest = 2;
console.log("".concat(myguestList[removeGuest], " is not coming"));
console.log("==================================================");
myguestList.splice(removeGuest, 1);
//Replacing previous deleted name with new one
var addGuest = 2;
myguestList.splice(addGuest, 0, "Mateen");
//Printing updated list
for (var i = 0; i < myguestList.length; i++) {
    console.log("Dear ".concat(myguestList[i], ", I cordially invite you to the birthday dinner tomorrow to be held at my residence"));
}
console.log("==================================================");
