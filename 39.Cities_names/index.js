function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
console.log(city_country('Islamabad', 'Pakistan'));
console.log(city_country('Beijing', 'China'));
console.log(city_country('New York', 'America'));
