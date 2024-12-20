// Prompt the user for names and ages
let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

// Convert input strings to arrays
let names = namesInput.split(',').map(name => name.trim()); // Convert to array of names and trim spaces
let ages = agesInput.split(',').map(Number); // Convert to array of numbers

// Check if both arrays have the same length
if (names.length !== ages.length) {
    console.error("The number of names must match the number of ages.");
} else {
    // Create a new multi-dimensional array to store name-age pairs
    let restructuredArray = [];

    for (let i = 0; i < names.length; i++) {
        restructuredArray.push([names[i], ages[i]]);
    }

    // Log the restructured multidimensional array
    console.log("Restructured Multi-Dimensional Array (Name, Age):");
    restructuredArray.forEach(pair => {
        console.log(pair);
    });
}
