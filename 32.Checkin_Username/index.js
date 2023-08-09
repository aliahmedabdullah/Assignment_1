var members = ["Admin", "Ali", "Ahmed", "Abdullah", "Usman"];
var new_members = ["Adnan", "Ali", "Rafay", "Abdullah", "Hamza"];
var lowerCaseCurrentUsers = members.map(function (user) { return user.toLowerCase(); });
// Loop through the new_users list to check for availability
for (var _i = 0, new_members_1 = new_members; _i < new_members_1.length; _i++) {
    var newUser = new_members_1[_i];
    var lowerCaseNewUser = newUser.toLowerCase();
    if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
        console.log("Sorry, the username \"".concat(newUser, "\" has already been taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(newUser, "\" is available."));
    }
}
