//Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let profile = null;

  for (const pro of contacts) {
    if (pro.firstName === name) {
      profile = pro;
      break;
    }
  }

  if (!profile) {
    return 'No such contact';
  }
  if (!['firstName', 'lastName', 'number', 'likes'].includes(prop)) {
    return 'No such property';
  }

  return profile[prop];
  // Only change code above this line
}

// Change these values to test your function
lookUpProfile('Akira', 'likes');
