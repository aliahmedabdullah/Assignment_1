function make_sandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("You ordered an empty sandwich.");
  } else {
    console.log(`You ordered a sandwich with: ${items.join(', ')}`);
  }
  console.log("================================");
}


make_sandwich('Butter','jelly','Ketchup','Peppers');
make_sandwich('Cheese','Lettuce','Onions');
make_sandwich('Tomatoes');
make_sandwich(); 