// Function to sort numbers in reverse order
function sortNumbersInReverse(arr) {
    return arr.sort((a, b) => b - a);
}

// Function to sort names alphabetically
function sortNamesAlphabetically(arr) {
    return arr.sort();
}

// Prompt the user for numbers and names
let numbersInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57):");
let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert input strings to arrays
let numbers = numbersInput.split(',').map(Number); // Convert to array of numbers
let names = namesInput.split(',').map(name => name.trim()); // Convert to array of names and trim spaces

// Log the original arrays
console.log("Original Numbers Array:", numbers);
console.log("Original Names Array:", names);

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order and log it
let sortedNumbers = sortNumbersInReverse(numbers);
console.log("Sorted Numbers in Reverse Order:", sortedNumbers);

// Sort names alphabetically and log it
let sortedNames = sortNamesAlphabetically(names);
console.log("Sorted Names Alphabetically:", sortedNames);
