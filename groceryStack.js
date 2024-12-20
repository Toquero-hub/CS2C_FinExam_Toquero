// Class representing a stack of grocery items
class GroceryStack {
    constructor() {
        this.items = []; // Initialize an empty array to hold the grocery items
    }

    // Method to check if the stack is empty and return the top item
    peek() {
        if (this.items.length === 0) {
            console.log("The stack is empty.");
            return null; // Return null if the stack is empty
        }
        return this.items[this.items.length - 1]; // Return the last item (top of the stack)
    }

    // Method to add an item to the stack
    push(item) {
        this.items.push(item); // Add the item to the end of the array
        console.log(`Added: ${item}`);
        this.printStack(); // Print the current state of the stack
    }

    // Method to remove the last added item from the stack
    pop() {
        if (this.peek() === null) { // Check if the stack is empty before popping
            return;
        }
        const removedItem = this.items.pop(); // Remove and return the last item
        console.log(`Removed: ${removedItem}`);
        this.printStack(); // Print the current state of the stack
    }

    // Method to print the current state of the stack
    printStack() {
        console.log("Current Stack:", this.items.join(', '));
    }
}

// Create an instance of GroceryStack
const groceryStack = new GroceryStack();

// Prompt user for grocery items and push them onto the stack
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`); // Prompt for grocery item
    groceryStack.push(item); // Push item onto the stack
}

// Example usage of pop function (optional)
groceryStack.pop(); // Remove last added item from the stack
