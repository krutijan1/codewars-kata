function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return new RegExp(target + '$').test(str);
}

confirmEnding('Bastian', 'n');
