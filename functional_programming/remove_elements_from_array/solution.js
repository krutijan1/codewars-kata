function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

let inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
nonMutatingSplice(inputCities);
