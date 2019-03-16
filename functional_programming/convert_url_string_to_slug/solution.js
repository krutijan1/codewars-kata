// the global variable
let globalTitle = 'Winter Is Coming';

function urlSlug(title) {
  return title
    .trim()
    .split(/\s+/)
    .map(e => e.toLowerCase())
    .join('-');
}

const winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
