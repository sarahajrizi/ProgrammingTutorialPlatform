// /src/data/quizzes.js

export const quizzesByCategory = {
  'JavaScript Basics': [
    {
      id: 'js-basics-quiz',
      title: 'JavaScript Basics Quiz',
      questions: [
        {
          question: '1. How do you declare a variable in JavaScript?',
          options: [
            'variable x;',
            'var x;',
            'dim x as integer',
            'x := 0;'
          ],
          correctAnswers: [1],
          explanation: 'In JavaScript, you can declare variables with var, let, or const.'
        },
        {
          question: '2. Which data type is NOT primitive in JavaScript?',
          options: [
            'Number',
            'String',
            'Object',
            'Boolean'
          ],
          correctAnswers: [2],
          explanation: 'Objects are not a primitive type; they are reference types.'
        },
        {
          question: '3. Which keyword is used to define a function in JavaScript?',
          options: [
            'function',
            'func',
            'def',
            'method'
          ],
          correctAnswers: [0],
          explanation: 'JavaScript functions are defined with the "function" keyword.'
        },
        {
          question: '4. What is the result of "typeof null"?',
          options: [
            '"object"',
            '"null"',
            '"undefined"',
            '"number"'
          ],
          correctAnswers: [0],
          explanation: 'Due to a quirk in JS, typeof null === "object".'
        },
        {
          question: '5. How do you write a single-line comment in JS?',
          options: [
            '/* comment */',
            '# comment',
            '// comment',
            '<!-- comment -->'
          ],
          correctAnswers: [2],
          explanation: 'Single-line comments in JS use two forward slashes.'
        },
        {
          question: '6. Which operator is used for strict equality (no type conversion)?',
          options: [
            '==',
            '===',
            '=',
            '!=='
          ],
          correctAnswers: [1],
          explanation: '=== checks both value and type without conversion.'
        },
        {
          question: '7. How do you convert a string "123" to a number in JS?',
          options: [
            'Number("123")',
            'parseInt("123")',
            '+ "123"',
            'All of the above'
          ],
          correctAnswers: [3],
          explanation: 'All listed methods can convert "123" to a number.'
        },
        {
          question: '8. Which array method adds an element to the end?',
          options: [
            'push()',
            'pop()',
            'unshift()',
            'shift()'
          ],
          correctAnswers: [0],
          explanation: 'push() adds to the end, pop() removes from the end, unshift() adds to the front, shift() removes from the front.'
        },
        {
          question: '9. How do you write a "for" loop in JS?',
          options: [
            'for (var i = 0; i < 5; i++) { }',
            'for i=0 to 5 { } next i',
            'loop i=0 to 5 { }',
            'repeat (5) { }'
          ],
          correctAnswers: [0],
          explanation: 'The traditional JS for loop syntax is for (init; condition; increment) { }.'
        },
        {
          question: '10. Which statement can stop a loop prematurely?',
          options: [
            'stop',
            'break',
            'exit',
            'return'
          ],
          correctAnswers: [1],
          explanation: 'The "break" statement ends the loop.'
        },
      ],
    },
  ],

  'ES6 Features': [
    {
      id: 'es6-quiz',
      title: 'ES6 Features Quiz',
      questions: [
        {
          question: '1. Which keyword declares a block-scoped variable?',
          options: [
            'var',
            'let',
            'static',
            'define'
          ],
          correctAnswers: [1],
          explanation: 'let declares a block-scoped variable in ES6.'
        },
        {
          question: '2. What is the default parameter syntax in ES6?',
          options: [
            'function greet(name = "Guest") { ... }',
            'function greet(name) { if(!name) name="Guest"; }',
            'greet: name => name ?? "Guest"',
            'let greet = function(name?) { ... }'
          ],
          correctAnswers: [0],
          explanation: 'ES6 allows default parameters directly in the function signature.'
        },
        {
          question: '3. Which statement about arrow functions is true?',
          options: [
            'They always require curly braces.',
            'They have their own "this" binding.',
            'They are not hoisted.',
            'They inherit "this" from the enclosing scope.'
          ],
          correctAnswers: [3],
          explanation: 'Arrow functions don’t have their own "this"; they use the lexical scope.'
        },
        {
          question: '4. How do you import a default export in ES6?',
          options: [
            'import * from "module";',
            'import default from "module";',
            'import defaultExport from "module";',
            'import { default } from "module";'
          ],
          correctAnswers: [2],
          explanation: 'You import the default export with "import X from \'module\'".'
        },
        {
          question: '5. Which of the following is a rest parameter usage?',
          options: [
            'function sum(...nums) { }',
            'function sum(?) { }',
            'function sum(*nums) { }',
            'function sum(nums[]) { }'
          ],
          correctAnswers: [0],
          explanation: 'The syntax ...nums is used for rest parameters.'
        },
        {
          question: '6. Which feature is NOT introduced in ES6?',
          options: [
            'let & const',
            'Modules (import/export)',
            'Promises',
            'JSON'
          ],
          correctAnswers: [3],
          explanation: 'JSON was introduced long before ES6 (ECMAScript 2015).'
        },
        {
          question: '7. What does object destructuring look like?',
          options: [
            'const [ name, age ] = person;',
            'const { name, age } = person;',
            'person("name", "age");',
            'this person = { name, age };'
          ],
          correctAnswers: [1],
          explanation: 'Object destructuring syntax is { name, age } = person.'
        },
        {
          question: '8. Which new string method was introduced in ES6?',
          options: [
            '.includes()',
            '.split()',
            '.replace()',
            '.charAt()'
          ],
          correctAnswers: [0],
          explanation: 'String.prototype.includes() is an ES6 (2015) addition.'
        },
        {
          question: '9. Which symbol is used to define a generator function?',
          options: [
            'function->',
            'function*',
            'function^',
            'function() yields'
          ],
          correctAnswers: [1],
          explanation: 'Generators in ES6 are defined with function* syntax.'
        },
        {
          question: '10. Which operator is used for the spread syntax?',
          options: [
            '...',
            '++',
            '~~',
            '#'
          ],
          correctAnswers: [0],
          explanation: 'Spread syntax uses the three dots, e.g. [...array].'
        },
      ],
    },
  ],

  'React Components': [
    {
      id: 'react-comp-quiz',
      title: 'React Components Quiz',
      questions: [
        {
          question: '1. What is a functional component in React?',
          options: [
            'A component that must extend React.Component',
            'A function that returns JSX',
            'A plugin that adds extra features',
            'A custom hook'
          ],
          correctAnswers: [1],
          explanation: 'A functional component is a simple JS function that returns JSX.'
        },
        {
          question: '2. Which hook do you use for side effects?',
          options: [
            'useState',
            'useEffect',
            'useContext',
            'useReducer'
          ],
          correctAnswers: [1],
          explanation: 'useEffect is used for side effects like data fetching or subscriptions.'
        },
        {
          question: '3. How do you pass data from a parent to a child component?',
          options: [
            'Through Redux',
            'Using props',
            'Using the DOM',
            'Through localStorage'
          ],
          correctAnswers: [1],
          explanation: 'Props are the primary way to pass data from parent to child.'
        },
        {
          question: '4. What does JSX stand for?',
          options: [
            'JavaScript XML',
            'Java Syntax Extension',
            'JSON Extra',
            'JS Export'
          ],
          correctAnswers: [0],
          explanation: 'JSX stands for JavaScript XML, a syntax extension for React.'
        },
        {
          question: '5. Which statement is true about React keys?',
          options: [
            'Keys help React identify which items have changed.',
            'Keys must be globally unique across all components.',
            'Keys are used for styling elements.',
            'Keys are optional in lists.'
          ],
          correctAnswers: [0],
          explanation: 'Keys help React efficiently update and reorder items.'
        },
        {
          question: '6. Which method is used in class components to return JSX?',
          options: [
            'render()',
            'returnJSX()',
            'componentDidMount()',
            'constructor()'
          ],
          correctAnswers: [0],
          explanation: 'Class components must have a render() method that returns the JSX.'
        },
        {
          question: '7. What is the minimum React version that supports hooks?',
          options: [
            '16.8',
            '15.5',
            '17.0',
            '16.0'
          ],
          correctAnswers: [0],
          explanation: 'Hooks were introduced in React 16.8.'
        },
        {
          question: '8. Which file typically contains the root React component?',
          options: [
            'index.js',
            'App.js',
            'Main.js',
            'Router.js'
          ],
          correctAnswers: [1],
          explanation: 'Usually, the root component is defined in App.js.'
        },
        {
          question: '9. How do you create a React project quickly?',
          options: [
            'Using create-react-app',
            'Writing all config manually',
            'Via React Webpack CLI',
            'Via Node "npx new-react-app"'
          ],
          correctAnswers: [0],
          explanation: 'create-react-app is the official CLI tool for quickly bootstrapping.'
        },
        {
          question: '10. Which statement is true about React fragments?',
          options: [
            'They are used to pass props to children',
            'They prevent extra HTML elements from being added to the DOM',
            'They are only used with react-router',
            'They are an alternative to "strict mode"'
          ],
          correctAnswers: [1],
          explanation: 'React Fragments let you group children without adding extra nodes.'
        },
      ],
    },
  ],

  'State and Props': [
    {
      id: 'state-props-quiz',
      title: 'State and Props Quiz',
      questions: [
        {
          question: '1. Which hook allows you to manage state in a functional component?',
          options: [
            'useState',
            'useContext',
            'useRef',
            'useEffect'
          ],
          correctAnswers: [0],
          explanation: 'useState is the main hook for local state management.'
        },
        {
          question: '2. Which statement is true about state in class components?',
          options: [
            'State is read-only',
            'State is updated with setState()',
            'You must mutate this.state directly',
            'There is no state in class components'
          ],
          correctAnswers: [1],
          explanation: 'In class components, we call setState() to update the state.'
        },
        {
          question: '3. Props are ______.',
          options: [
            'variables that can be changed by the child component',
            'configuration data passed from parent to child',
            'only for styling components',
            'updated by child components with setProps()'
          ],
          correctAnswers: [1],
          explanation: 'Props are read-only data passed from parent to child.'
        },
        {
          question: '4. Which is a correct way to initialize state in a functional component?',
          options: [
            'const state = 0;',
            'this.state = { count: 0 };',
            'const [count, setCount] = useState(0);',
            'let [count, updateCount] = newState(0);'
          ],
          correctAnswers: [2],
          explanation: 'The ES6 destructuring with useState is the correct approach.'
        },
        {
          question: '5. How do you update state based on the previous state in a functional component?',
          options: [
            'setCount(count + 1)',
            'setCount((prevCount) => prevCount + 1)',
            'useEffect to watch count then update it',
            'Use a Redux store'
          ],
          correctAnswers: [1],
          explanation: 'It is recommended to use setCount with a function if you rely on previous state.'
        },
        {
          question: '6. Which is true about prop drilling?',
          options: [
            'It is the recommended way to share global data',
            'It can be avoided by using React Context',
            'It only works in class components',
            'It is a method to connect to Redux store'
          ],
          correctAnswers: [1],
          explanation: 'Prop drilling can sometimes be avoided by using Context or other state management solutions.'
        },
        {
          question: '7. Which lifecycle method is used to set the initial state in a class component?',
          options: [
            'constructor',
            'componentDidMount',
            'componentWillMount',
            'getDerivedStateFromProps'
          ],
          correctAnswers: [0],
          explanation: 'State is typically initialized in the constructor for class components.'
        },
        {
          question: '8. How do you pass props to a component in React?',
          options: [
            '<Child props={{ value: 1 }} />',
            '<Child :value="1" />',
            '<Child value={1} />',
            'props are automatically provided by React'
          ],
          correctAnswers: [2],
          explanation: 'Props are passed as attributes in JSX, e.g. <Child value={1} />.'
        },
        {
          question: '9. Which hook is used for side effects, not for managing state?',
          options: [
            'useReducer',
            'useEffect',
            'useState',
            'useContext'
          ],
          correctAnswers: [1],
          explanation: 'useEffect is for side effects (fetching data, etc.).'
        },
        {
          question: '10. What is the recommended way to pass data from child to parent?',
          options: [
            'Return the data from the child function',
            'Use a callback prop from the parent',
            'Use localStorage as a shared store',
            'Children cannot communicate with the parent'
          ],
          correctAnswers: [1],
          explanation: 'We typically pass a function (callback) as a prop to the child, which calls it to send data upward.'
        },
      ],
    },
  ],
};

export function getQuizzesByCategory(category) {
  return quizzesByCategory[category] || [];
}
