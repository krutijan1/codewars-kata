function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

let first = [1, 2, 3];
let second = [4, 5];

nonMutatingPush(first, second);
