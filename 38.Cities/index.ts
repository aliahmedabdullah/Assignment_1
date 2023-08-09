function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

// Examples:
describe_city("Beijing", "China");
describe_city("New York", "USA");
describe_city("Islamabad"); // Since no country provided, it will use the default value "Unknown"
