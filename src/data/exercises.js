// /src/data/exercises.js

export const javascriptExercises = [
  {
    id: 'ex1',
    title: 'Hello World Function',
    description: 'Create a function that returns "Hello World!"',
    solution: 'function hello() { return "Hello World!"; }'
  },
  {
    id: 'ex2',
    title: 'Sum of Two Numbers',
    description: 'Create a function that takes two numbers and returns their sum.',
    solution: 'function sum(a, b) { return a + b; }'
  },
];

export const es6FeaturesExercises = [
  {
    id: 'ex1',
    title: 'Arrow Function',
    description: 'Rewrite a simple function using an arrow function.',
    solution: 'const greet = (name) => "Hello " + name;'
  },
];

export const reactComponentsExercises = [
  {
    id: 'ex1',
    title: 'Functional Component',
    description: 'Create a functional component that returns "Hello React!".',
    solution: 'function HelloReact() { return <h1>Hello React!</h1>; }'
  },
];

export const stateAndPropsExercises = [
  {
    id: 'ex1',
    title: 'useState Hook',
    description: 'Create a component with a count state and a button to increment it.',
    solution: 'function Counter(){const[c,set]=React.useState(0);return <button onClick={()=>set(c+1)}>{c}</button>;}',
  },
];

// Funksion ndihmës që kthen ushtrimet
export function getExercisesByCategory(category) {
  switch (category) {
    case 'JavaScript Basics':
      return javascriptExercises;
    case 'ES6 Features':
      return es6FeaturesExercises;
    case 'React Components':
      return reactComponentsExercises;
    case 'State and Props':
      return stateAndPropsExercises;
    default:
      return [];
  }
}
