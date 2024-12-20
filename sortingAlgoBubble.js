// Function to implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length; // Get the length of the array
    let comparisons = []; // Array to keep track of comparisons for logging

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            comparisons.push(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log comparison
            if (arr[j] > arr[j + 1]) {
                // Swap if the current element is greater than the next
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                comparisons.push(`Swapped ${temp} and ${arr[j]}`); // Log swap
            }
        }
    }

    // Log all comparisons made during sorting
    console.log("Comparison Process:");
    comparisons.forEach(comparison => console.log(comparison));
}

// Create an empty array to hold numbers
let numbers = [];

// Prompt user to enter numbers one by one
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`)); // Prompt for number input
    numbers.push(num); // Add number to the array
}

// Log the original array
console.log("Original Array:", numbers);

// Call bubble sort function on the numbers array
bubbleSort(numbers);

// Log the sorted array
console.log("Sorted Array:", numbers);
