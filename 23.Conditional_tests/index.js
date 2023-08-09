var car = 'subaru';
// Test 1: Is car equal to 'subaru'? Prediction: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2: Is car not equal to 'honda'? Prediction: True
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
// Test 3: Is car length less than 10? Prediction: False
console.log("Is car.length < 10? I predict False.");
console.log(car.length < 10);
// Test 4: Is car length greater than 5? Prediction: True
console.log("Is car.length > 5? I predict True.");
console.log(car.length > 5);
// Test 5: Is car equal to 'Toyota' or 'Honda'? Prediction: False
console.log("Is car == 'Toyota' || car == 'Honda'? I predict False.");
console.log(car == 'Toyota' || car == 'Honda');
// Test 6: Is car equal to 'subaru' and car length is less than 7? Prediction: True
console.log("Is car == 'subaru' && car.length < 7? I predict True.");
console.log(car == 'subaru' && car.length < 7);
// Test 7: Is car not equal to 'subaru' or car length is greater than 3? Prediction: True
console.log("Is car != 'subaru' || car.length > 3? I predict True.");
console.log(car != 'subaru' || car.length > 3);
// Test 8: Is car equal to 'SUBARU'? Prediction: False (case-sensitive)
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');
// Test 9: Is car strictly equal to 'subaru'? Prediction: True
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 10: Is car strictly equal to 5? Prediction: False (different data types)
console.log("Is car === 5? I predict False.");
console.log(car === '5');
