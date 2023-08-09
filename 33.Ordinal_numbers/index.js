var ordinalnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinalnum_1 = ordinalnum; _i < ordinalnum_1.length; _i++) {
    var no = ordinalnum_1[_i];
    if (no === 1)
        console.log("1rst");
    else if (no === 2)
        console.log("2nd");
    else if (no === 3)
        console.log("3rd");
    else
        console.log("".concat(no, "th"));
}
