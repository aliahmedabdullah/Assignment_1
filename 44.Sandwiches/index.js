function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with: ".concat(items.join(', ')));
    }
    console.log("================================");
}
make_sandwich('Butter', 'jelly', 'Ketchup', 'Peppers');
make_sandwich('Cheese', 'Lettuce', 'Onions');
make_sandwich('Tomatoes');
make_sandwich();
