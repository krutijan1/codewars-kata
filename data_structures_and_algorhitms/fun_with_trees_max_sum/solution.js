function maxSum(root) {
  if (!root) {
      return 0;
  }

  if (!root.left && !root.right) {
      return root.value
  }

  let max = 0;
  let leftSum = 0;
  let rightSum = 0;

  if (root.left) {
      leftSum += maxSum(root.left) + root.value;
      if (leftSum > max) {
          max = leftSum;
      }
  }

  if (root.right) {
      rightSum += maxSum(root.right) + root.value;
      if (rightSum > max) {
          max = rightSum;
      }
  }

  return max
}
