var members = ["Admin", "Ali", "Ahmed", "Abdullah", "Usman"];
for (var i = 0; i <= members.length; i++) {
    if (members[i] === 'Admin') {
        console.log("Hello, " + members[i] + " would you like to see a status report?");
    }
    else {
        console.log("Hello, " + members[i] + " thank you for logging in again.");
    }
}
