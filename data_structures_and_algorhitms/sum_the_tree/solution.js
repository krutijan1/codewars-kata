function sumTheTreeValues(root) {
    if (!root) {
        return 0;
    }
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
