function mostFrequentItemCount(collection) {
  const cache = {};
  let max = 0;
  
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    if(cache[item]) {
      cache[item] += 1;
    } else {
      cache[item] = 1;
    }
    if(cache[item] > max) {
      max = cache[item];
    }
  }
  
  return max;
}
