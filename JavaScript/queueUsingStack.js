
var MyQueue = function () {
    // Initialize two stacks to implement the queue behavior 
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // Push element onto stack1 as the enqueue operation 
    // not pushing to stack2 directly because stack2 is used for dequeue operation
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // If stack2 is empty, transfer all elements from stack1 to stack2
    if (this.stack2.length === 0) {
        // Transfer elements from stack1 to stack2 to reverse the order
        // This makes the oldest element (front of the queue) accessible at the top of stack2
        // This is done only when stack2 is empty to optimize the number of operations
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop(); // Pop the top element from stack2 which is the front of the queue
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // Similar to pop, but we just return the top element of stack2 without removing it
    if (this.stack2.length === 0) {
        // Transfer elements from stack1 to stack2 if stack2 is empty
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1]; // Return the top element of stack2 without removing it

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    // The queue is empty only if both stacks are empty
    // Check if both stack1 and stack2 are empty
    return this.stack1.length === 0 && this.stack2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// A great way to reduce code duplication in the pop and peek methods
// is to create a helper function that ensures stack2 has the elements
// transferred from stack1 when needed. This helper function can be called
// at the beginning of both pop and peek methods. This way, the logic for
// transferring elements is centralized in one place
// to use one method to handle both pop and peek operations, reducing code duplication.

// Helper function to transfer elements from stack1 to stack2 and use it in pop and peek methods
// This function checks if stack2 is empty and transfers elements from stack1 if needed

MyQueue.prototype._move = function () {
    // Transfer elements from stack1 to stack2 if stack2 is empty
    if (this.stack2.length === 0) {
        // Transfer elements from stack1 to stack2 to reverse the order
        while (this.stack1.length > 0) {
            // Pop from stack1 and push to stack2
            this.stack2.push(this.stack1.pop());
        }
    }
}

// example usage:

// MyQueue.prototype.pop = function() {
//     this._move();
//     return this.outStack.pop();
// };

// MyQueue.prototype.peek = function() {
//     this._move();
//     return this.outStack[this.outStack.length - 1];
// };
