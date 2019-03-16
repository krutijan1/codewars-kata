***Data Structures: Add a New Element to a Binary Search Tree***

Now that we have an idea of the basics lets write a more complex method.

In this challenge, we will create a method to add new values to our binary search tree. The method should be called add and it should accept an integer value to add to the tree. Take care to maintain the invariant of a binary search tree: the value in each left child should be less than or equal to the parent value, and the value in each right child should be greater than or equal to the parent value. Here, let's make it so our tree cannot hold duplicate values. If we try to add a value that already exists, the method should return null. Otherwise, if the addition is successful, undefined should be returned.

Hint: trees are naturally recursive data structures!
