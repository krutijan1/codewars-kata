function titleCase(str) {
  return str
    .split(' ')
    .map(e => e.toLowerCase())
    .map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1, e.length);
    })
    .join(' ');
}

console.log(titleCase("I'm a little tea pot"));
