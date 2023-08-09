function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Examples:
describe_city("Beijing", "China");
describe_city("New York", "USA");
describe_city("Islamabad"); // Since no country provided, it will use the default value "Unknown"
