//tore the locations in a array. Make sure the array is not in alphabetical order.
const favPlaces: string[] = ["Gilgit", "Skardu", "Kashmir", "Lahore", "islamabad"]

//Print your array in its original order.

console.log(favPlaces);
console.log("1============================================================");

//Print your array in alphabetical order without modifying the actual list.
const alphaPlaces = [...favPlaces].sort();
console.log(alphaPlaces);
console.log("2============================================================");

//array is still in its original order by printing it.
console.log(favPlaces);
console.log("3============================================================");

//Printing array in reverse alphabetical order without changing the order of the original list.
console.log(alphaPlaces.reverse());
console.log("4============================================================");

//array is still in its original order by printing it.
console.log(favPlaces);
console.log("5============================================================");


console.log(favPlaces.reverse());
console.log("5============================================================");
