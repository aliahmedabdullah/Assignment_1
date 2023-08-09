const members: string[] = ["Admin", "Ali", "Ahmed", "Abdullah", "Usman"]
const new_members: string[] = ["Adnan", "Ali", "Rafay", "Abdullah", "Hamza"]


const lowerCaseCurrentUsers: string[] = members.map((user) => user.toLowerCase());

// Loop through the new_users list to check for availability
for (const newUser of new_members) {
    const lowerCaseNewUser = newUser.toLowerCase();

    if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
        console.log(`Sorry, the username "${newUser}" has already been taken. Please enter a new username.`);
    } else {
        console.log(`The username "${newUser}" is available.`);
    }
}