// Class representing a single node in the linked list
class Node {
    constructor(value) {
        this.value = value; // Set the value of the node
        this.next = null;   // Initialize next as null
    }
}

// Class representing the linked list
class LinkedList {
    constructor() {
        this.head = null;   // Initialize head as null
        this.size = 0;      // Initialize size as 0
    }

    // Method to append a new node to the linked list
    append(value) {
        const newNode = new Node(value); // Create a new node with the given value

        if (!this.head) { // If the list is empty, set head to the new node
            this.head = newNode;
        } else {
            let current = this.head; // Start from the head
            while (current.next) {    // Traverse to the end of the list
                current = current.next;
            }
            current.next = newNode;   // Link the last node to the new node
        }

        this.size++;                  // Increment size of the list
        this.print();                 // Print the list after appending
    }

    // Method to print the linked list
    print() {
        let current = this.head;      // Start from the head
        let result = [];              // Array to hold values for display

        while (current) {             // Traverse through the list
            result.push(current.value); // Add each node's value to result array
            current = current.next;   // Move to next node
        }

        console.log("Linked List:", result.join(' -> ')); // Print linked list in readable format
    }
}

// Create an instance of LinkedList
const linkedList = new LinkedList();

// Append items to the linked list
linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
