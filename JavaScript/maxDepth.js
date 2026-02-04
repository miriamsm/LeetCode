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
 * @return {number}
 */

// recursive approach
var maxDepth = function(root) {
    if (root== null) return 0; // Base case: if the node is null, return depth of 0
    // Recursive case: calculate the depth of left and right subtrees
    // and return the maximum of the two depths plus one for the current node
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    
};

// iterative approach using level order traversal (BFS)
var maxDepth = function(root) {
    if (root == null) return 0; // If the tree is empty, return depth of 0  
    // Initialize depth counter to 0 because we haven't traversed any levels yet
    let depth = 0; 
    // Initialize a queue for level order traversal, starting with the root node
    // We will process nodes level by level, and for each level, we will increment the depth counter
    // so for example, when we process the first level (the root), depth will be 1, then when we process the second level (children of the root), depth will be 2, and so on
    // and the queue will help us keep track of the nodes at the current level and the next level as we traverse the tree
    let queue = [root]; 
    while (queue.length > 0) {
        depth++; // Increment depth for each level of the tree  
        let levelSize = queue.length; // Get the number of nodes at the current level
        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift(); // Dequeue the next node
            // Enqueue the left and right children of the current node if they exist
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }   
    return depth; // Return the maximum depth of the tree
}