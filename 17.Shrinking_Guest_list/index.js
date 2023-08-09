var myguestList = ["Ali", "Ahmed", "Abdullah", "Usman"];
console.log("Importance Notice: We are sorry to inform you that we have only two spaces for dinner");
//Deleting members 
while (myguestList.length != 2) {
    var remMembers = myguestList.pop();
    console.log("Sorry ".concat(remMembers, ", I cannot invite you to dinner"));
}
//Updating invitation 
for (var i = 0; i < myguestList.length; i++) {
    console.log("Dear ".concat(myguestList[i], " You are still invited"));
}
//Deleting array till 0
for (var i_1 = 0; i_1 < myguestList.length + 1; i_1++) {
    myguestList.pop();
}
//Final Array
console.log('Guest List', myguestList);
