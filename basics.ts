// Primitives, Number, strings, Booleans
// More Complex Types: arrays, objects
// Function types, Parameters

//Primitives

let age: number;
age = 12;

let username: string;
username = "Shaun";

let isInstructor: boolean;
isInstructor = true;

//More Complex Types

let hobbies: string[];
hobbies = ["Sports", "Reading", "Cooking"];

type Person = {
  // Type Aliases
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "string",
  age: 30,
};

// person = {
//   isEployee: true,
// };

let people: Person[];

// Type Inference

let course: string | number = "React - The Complete Guide"; //Union Type
course = 1234;

// Functions && Types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeggining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeggining(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeggining(["a", "b", "c"], "d");

// updatedArray[0].split("");
