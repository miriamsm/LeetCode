
var MinStack = function() {
    this.stack = []; //main stack to store all elements
    this.minStack = []; //stack to keep track of minimums
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val); //push the value onto the main stack
    //if minStack is empty or the new value is less than or equal to the current minimum, push it onto minStack
    if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //check if the stack is empty 
    //if it is, do nothing
    if (this.stack.length === 0) {
        return;
    }
    // pop the top element from the main stack and store it in a variable
    const popped = this.stack.pop();
    if (popped === this.getMin()) { //if the popped element is the current minimum, pop it from minStack as well
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() { 
    //check if the stack is empty
    // if it is, return null
    if (this.stack.length === 0) {
        return null;
    } 
    //return the top element of the main stack without removing it
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //check if the minStack is empty
    // if it is, return null
    if (this.minStack.length === 0) {
        return null;
    }
    //return the top element of the minStack which is the current minimum
    return this.minStack[this.minStack.length - 1]; 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */