/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node) {
    const result = [];

    if (!node) {
        return result;
    }

    result.push(node.data);
    result.push(...preOrder(node.left));
    result.push(...preOrder(node.right));

    return result;
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
    const result = [];

    if (!node) {
        return result;
    }

    result.push(...inOrder(node.left));
    result.push(node.data);
    result.push(...inOrder(node.right));

    return result;
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
    const result = [];

    if (!node) {
        return result;
    }

    result.push(...postOrder(node.left));
    result.push(...postOrder(node.right));
    result.push(node.data);

    return result;
}
