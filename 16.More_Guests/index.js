var myguestList = ["Ali", "Ahmed", "Abdullah", "Usman"];
//
console.log("Respected");
for (var i = 0; i < myguestList.length; i++) {
    console.log("".concat(myguestList[i], ", "));
}
console.log("I am here to tell all of you that i found a bigger dinner table and i will invite more guests accordingly ");
console.log("==================================================");
//Add one new guest to the beginning of your array.
myguestList.unshift("Hamza");
//Add one new guest to the middle of your array
myguestList.splice(Math.round(myguestList.length / 2), 0, "Abu Bakr");
//Add one new guest to the end of your list.
myguestList.push("Rafay");
for (var i = 0; i < myguestList.length; i++) {
    console.log("Dear ".concat(myguestList[i], ", I cordially invite you to the birthday dinner tomorrow to be held at my residence"));
}
