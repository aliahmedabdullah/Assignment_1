var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//tore the locations in a array. Make sure the array is not in alphabetical order.
var favPlaces = ["Gilgit", "Skardu", "Kashmir", "Lahore", "islamabad"];
//Print your array in its original order.
console.log(favPlaces);
console.log("1============================================================");
//Print your array in alphabetical order without modifying the actual list.
var alphaPlaces = __spreadArray([], favPlaces, true).sort();
console.log(alphaPlaces);
console.log("2============================================================");
//array is still in its original order by printing it.
console.log(favPlaces);
console.log("3============================================================");
//Printing array in reverse alphabetical order without changing the order of the original list.
console.log(alphaPlaces.reverse());
console.log(alphaPlaces);
console.log("4============================================================");
//array is still in its original order by printing it.
console.log(favPlaces);
console.log("5============================================================");
