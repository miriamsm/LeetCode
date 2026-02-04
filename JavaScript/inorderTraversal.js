/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// recursive approach
var inorderTraversal = function(root) {
    // Initialize an empty array to store the result of inorder traversal
    var result = [];
    // Helper function to perform inorder traversal recursively
    // It takes a node as input and processes its left subtree, then the node itself, and finally its right subtree
    // This function modifies the result array in place
    // it is inside inorderTraversal to have access to the result array
    function traverse(node) {
        // Base case: if the current node is null, return   
        if (node === null) return;
        // Recursive case: traverse the left subtree
        // Call traverse on the left child 
        // before visiting the current node
        traverse(node.left);
        // Visit the node by adding its value to the result array
        result.push(node.val);
        // Traverse the right subtree
        traverse(node.right);
    }
    // Start the traversal from the root node
    traverse(root);
    // Return the final result array containing the inorder traversal
    return result;
    
};

// another approach is to use an iterative method with a stack
var inorderTraversal = function(root) {
    // Initialize an empty array to store the result of inorder traversal  
    var result = [];
    // Initialize an empty stack to help with the traversal
    var stack = []; 
    var current = root; // Start with the root node
    // while there are nodes to process or the stack is not empty
    // Continue until there are no nodes left to process 
    while (current !== null || stack.length > 0) {
        // Go to the leftmost node of the current subtree
        // if it's null we pop from the stack and keep going until we reach the leftmost node that is not null
        // Push all left children onto the stack
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        // Pop from the stack and add to result
        current = stack.pop();
        result.push(current.val);
        // Move to the right subtree
        // Set current to the right child of the popped node to continue the traversal
        // and process the right subtree next
        current = current.right;
    }
    return result;
}