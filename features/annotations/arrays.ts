const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
//carMakers.push(100); -> does not work

//help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('06/03/1997');
importantDates.push(new Date());
