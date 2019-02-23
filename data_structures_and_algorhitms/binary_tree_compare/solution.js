// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise

function sameValue(a, b) {  
  if(a === null && b !== null) {
    return false
  }
  if(a !== null && b === null) {
    return false;
  }
  return a.val === b.val;
}

function compare(a, b) {
  if(a === null && b === null) {
    return true;
  }
  if(!sameValue(a, b)) {
    return false;
  }
  
  return true && compare(a.left, b.left) && compare(a.right, b.right);
}
