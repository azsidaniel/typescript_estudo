const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const coke: Drink = ['brown', true, 80];
const sprite: Drink = ['transparent', true, 60];
