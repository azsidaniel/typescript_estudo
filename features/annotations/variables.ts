// in this file we are not relying on Type Inference

//simple types
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects types
let now: Date = new Date();

//array types
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

//classes
class Car {}
let car: Car = new Car();

//objects literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y", 20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
const words = ['red', 'green', 'blue'];
let foundWord: boolean;

words.map((word) => {
  if (word === 'green') {
    foundWord = true;
  }
});

// 3) Variable whose type cannot be inferred correctly
let numbersArray = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

numbers.map((number) => {
  if (number > 0) {
    numberAboveZero = number;
  }
});
