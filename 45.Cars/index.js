function carInfo(car) {
    var options = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        options[_i - 1] = arguments[_i];
    }
    return { car: car, options: options };
}
console.log(carInfo({ manufacturer: 'Honda', model: 'Civic' }, { color: 'white', make: '2023', variant: "Vti Oriel", condition: "New" }));
