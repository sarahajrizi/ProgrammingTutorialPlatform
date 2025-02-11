export const javascriptExercises = [
  { id: 'ex1', title: 'Hello World Function', description: 'Return "Hello World!"', solution: 'function hello() { return "Hello World!"; }' },
  { id: 'ex2', title: 'Sum Function', description: 'Return sum of two numbers', solution: 'function sum(a, b) { return a + b; }' },
];

export const es6FeaturesExercises = [
  { id: 'ex1', title: 'Arrow Function', description: 'Convert function to arrow function', solution: 'const greet = (name) => "Hello " + name;' },
];

export const reactComponentsExercises = [
  { id: 'ex1', title: 'Functional Component', description: 'Return a simple React functional component', solution: 'function HelloReact() { return <h1>Hello React!</h1>; }' }
];

export const stateAndPropsExercises = [
  { id: 'ex1', title: 'useState Hook', description: 'Create a component with state', solution: 'function Counter(){const[c,set]=React.useState(0);return <button onClick={()=>set(c+1)}>{c}</button>;}' }
];

export function getExercisesByCategory(category) {
  switch (category.trim()) {
    case 'JavaScript Basics': return javascriptExercises;
    case 'ES6 Features': return es6FeaturesExercises;
    case 'React Components': return reactComponentsExercises;
    case 'State and Props': return stateAndPropsExercises;
    default: return [];
  }
}
