const createIterator = array => {
  let index = 0;
  return {
    next: () => {
      const element = array[index];
      const done = index === array.length;

      if (index < array.length) {
        index += 1;
      }

      return { value: element, done };
    },
    get index() {
      return index;
    }
  };
};
