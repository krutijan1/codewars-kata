function sentensify(str) {
  return str.split(/-|\.|,/).join(' ');
}

sentensify('May-the-force-be-with-you');
