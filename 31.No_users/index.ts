const members: string[] = ["Admin", "Ali", "Ahmed", "Abdullah", "Usman"]


if (members.length !== 0) {
    console.log("There are some members in list")
}
else if (members.length === 0) {
    console.log("We need to find some users!")
}

console.log("=====================================")

while(members.length !== 0)
members.pop()


if (members.length !== 0) {
    console.log("There are some members in list")
}
else if (members.length === 0) {
    console.log("We need to find some users!")
}
