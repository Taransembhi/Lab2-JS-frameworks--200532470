// Importing the utility functions from the second JavaScript file
// Using CommonJS syntax for import
const { 
    printWelcomeMessage, 
    convertMeasurement, 
    doMathOperation,
    generateRandomPassword 
} = require('./utils');

// Call/invoke the functions from the second JavaScript file
// You can customize the inputs as per your requirements

printWelcomeMessage("Sat sri akal", "Taranjeet", "Singh");
console.log("Conversion Result:", convertMeasurement(120, "Minutes", "Hours"));
console.log("Square root", doMathOperation(55, "squareRoot"));
console.log("Exponential:", doMathOperation(5, "exponential"));
console.log("Generated Password:", generateRandomPassword(12, { includeUppercase: true, includeNumbers: true }));
console.log("Default Password:", generateRandomPassword()); // Generates a default password of length 8 with lowercase letters and numbers
