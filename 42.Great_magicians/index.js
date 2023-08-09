function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the function to make the magicians great
var greatMagicianNames = make_great(magicianNames);
// Call the function to show the names of magicians (original list)
console.log("Original List:");
show_magicians(magicianNames);
// Call the function to show the names of great magicians
console.log("Modified List - The Great Magicians:");
show_magicians(greatMagicianNames);
