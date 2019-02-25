function lineupStudents(students) {

  if (!students) {
    return [];
  }

  const result = students.split(' ').filter(e => e.length != 0);

  return result.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else if (a.length < b.length) {
      return 1;
    } else {
      if (a > b) {
        return - 1;
      } else if (a < b) {
        return 1;
      }
      return 0;
    }
  });

}
