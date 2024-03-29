** Type Live Demo **

https://taskify123.netlify.app/

// Typescript basics
let occupation: any; // not recommended to use any

// if we don't know the type instead "any" use "unknown"
let department: unknown;

let name: string;
let age: number | string; // age could be number or it could be string
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// assigning object, Type Aliases
type PersonType = {
  name: string;
  age?: number; //age is optional
};

let person: PersonType;

// array of person objects
let lotOfPersons: PersonType[];

// assigning function
let printName: (name: string) => void; // void returns "undefined".
let printage: (age: number) => never; // never doesn't return anything.

// assigning object, Interfaces
interface PersonInterface {
  name: string;
  age?: number;
}

// Type Inheritance in Typescript

/* type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: boolean;
};

let y: Y = {
  c: "priyam",
  d: true,
  a: "mondal",
  b: 21,
}; */

// Interface Inheritance in Typescript

/* interface car {
  type: string;
  wheels: number;
}

interface maruti extends car {
  name: string;
}

let brezza: maruti = {
  type: "suv",
  wheels: 4,
  name: "Maruti Suzuki Brezza",
}; */

// Type inherits interface vice versa

// interface Car {
//   type: string;
//   wheels: number;
// }

// type X = Car & {
//   a: string;
//   b: number;
// };

// let data: X = {
//   type: "test",
//   wheels: 4,
//   a: "test",
//   b: 4,
// };

// type X = {
//   a: string;
//   b: number;
// };

// interface Car extends X {
//   type: string;
//   wheels: number;
// }

// let test: Car = {
//   type: "test",
//   wheels: 4,
//   a: "test",
//   b: 4,
// };

// Typescript basics