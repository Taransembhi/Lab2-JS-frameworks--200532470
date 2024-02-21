const crypto = require('crypto');

// Function to print a welcome message with custom greetings
function printWelcomeMessage(greeting, firstName, lastName) {
    console.log(`${greeting} ${firstName} ${lastName}, welcome to Javascript`);
}

// Function to convert measurement units (time units)
function convertMeasurement(value, fromUnit, toUnit) {
    // Example conversions
    if (fromUnit === "Minutes" && toUnit === "Hours") {
        return value / 60;
    } else if (fromUnit === "Hours" && toUnit === "Minutes") {
        return value * 60;
    } else if (fromUnit === "Days" && toUnit === "Hours") {
        return value * 24;
    } else if (fromUnit === "Hours" && toUnit === "Days") {
        return value / 24;
    }
    // Add more conversion logic as needed
}

// Function to perform various math operations (exponential, square root, cube)
function doMathOperation(value, operation) {
    // Example: Exponential
    if (operation === "exponential") {
        return Math.pow(value, 2);
    }
    // Example: Square root
    else if (operation === "squareRoot") {
        return Math.sqrt(value);
    }
    // Example: Cube
    else if (operation === "cube") {
        return Math.pow(value, 3);
    }
    // Add more math operations as needed
}

// Function to generate a random password with specified options
function generateRandomPassword(length = 8, options = {}) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-=_+';

    let characters = '';
    if (options.includeLowercase) characters += lowercaseChars;
    if (options.includeUppercase) characters += uppercaseChars;
    if (options.includeNumbers) characters += numberChars;
    if (options.includeSpecialChars) characters += specialChars;

    // If no options are selected, default to lowercase letters and numbers
    if (characters === '') characters = lowercaseChars + numberChars;

    // Splitting the characters into an array for better performance
    const charactersArray = characters.split('');

    let password = '';

    // Generate the password using crypto's secure randomBytes function
    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, charactersArray.length);
        password += charactersArray[randomIndex];
    }

    return password;
}

// Exporting the functions to be used in other files
module.exports = {
    printWelcomeMessage,
    convertMeasurement,
    doMathOperation,
    generateRandomPassword
};
