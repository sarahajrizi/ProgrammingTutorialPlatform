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

  'Node.js Fundamentals': [
    {
      id: 'nodejs-fundamentals-quiz',
      title: 'Node.js Fundamentals Quiz',
      questions: [
        { question: '1. What is Node.js?', options: ['A JavaScript runtime', 'A programming language', 'A front-end framework', 'A database'], correctAnswers: [0], explanation: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.' },
        { question: '2. Which module is used to create a server in Node.js?', options: ['http', 'fs', 'express', 'path'], correctAnswers: [0], explanation: 'The http module in Node.js is used to create a server.' },
        { question: '3. What command is used to initialize a new Node.js project?', options: ['npm start', 'node init', 'npm init', 'node start'], correctAnswers: [2], explanation: 'The npm init command initializes a new Node.js project.' },
        { question: '4. How do you import a module in Node.js?', options: ['import module from \"module\"', 'require(\"module\")', 'include module', 'fetch(\"module\")'], correctAnswers: [1], explanation: 'Modules in Node.js are imported using require().' },
        { question: '5. What is the purpose of package.json?', options: ['Stores configuration for the project', 'Contains JavaScript code', 'Defines routes in Express', 'Manages database connections'], correctAnswers: [0], explanation: 'package.json contains metadata about a Node.js project and its dependencies.' },
        { question: '6. Which built-in module is used to work with file systems in Node.js?', options: ['os', 'path', 'fs', 'http'], correctAnswers: [2], explanation: 'The fs module is used for file system operations in Node.js.' },
        { question: '7. What is Express.js?', options: ['A database', 'A Node.js framework', 'A JavaScript library', 'A package manager'], correctAnswers: [1], explanation: 'Express.js is a fast, unopinionated, minimalist web framework for Node.js.' },
        { question: '8. How do you handle asynchronous operations in Node.js?', options: ['Using callbacks', 'Using Promises', 'Using async/await', 'All of the above'], correctAnswers: [3], explanation: 'Node.js supports asynchronous operations using callbacks, Promises, and async/await.' },
        { question: '9. What is the event loop in Node.js?', options: ['A loop for iterating over arrays', 'A mechanism that handles asynchronous operations', 'A built-in function', 'A loop in Express'], correctAnswers: [1], explanation: 'The event loop is a mechanism in Node.js that handles non-blocking asynchronous operations.' },
        { question: '10. Which command is used to install a package in Node.js?', options: ['npm install package-name', 'node install package-name', 'install package-name', 'package add'], correctAnswers: [0], explanation: 'npm install package-name is used to install a package in Node.js.' }
      ]
    }
  ],

  'Python Basics': [
    {
      id: 'python-basics-quiz',
      title: 'Python Basics Quiz',
      questions: [
        { question: '1. What is the correct file extension for Python files?', options: ['.py', '.python', '.pyt', '.pt'], correctAnswers: [0], explanation: 'Python files use the .py extension.' },
        { question: '2. How do you define a function in Python?', options: ['function myFunction():', 'def myFunction():', 'define myFunction():', 'func myFunction():'], correctAnswers: [1], explanation: 'Functions in Python are defined using the def keyword.' },
        { question: '3. What is the correct way to create a list in Python?', options: ['list = {1,2,3}', 'list = [1,2,3]', 'list = (1,2,3)', 'list = "1,2,3"'], correctAnswers: [1], explanation: 'Lists in Python are defined using square brackets.' },
        { question: '4. How do you insert an item into a list at a specific index?', options: ['list.insert(index, item)', 'list.add(index, item)', 'list.append(index, item)', 'list.push(index, item)'], correctAnswers: [0], explanation: 'The insert() method allows inserting an item at a specific index.' },
        { question: '5. What is the correct way to open a file for reading in Python?', options: ['open("file.txt", "w")', 'open("file.txt", "r")', 'open("file.txt", "a")', 'open("file.txt", "x")'], correctAnswers: [1], explanation: 'The "r" mode opens a file for reading.' },
        { question: '6. What keyword is used to handle exceptions in Python?', options: ['try', 'catch', 'error', 'except'], correctAnswers: [3], explanation: 'The except keyword is used to handle exceptions in Python.' },
        { question: '7. How do you create a dictionary in Python?', options: ['dict = {"key": "value"}', 'dict = ["key": "value"]', 'dict = ("key": "value")', 'dict = "key": "value"'], correctAnswers: [0], explanation: 'Dictionaries in Python use curly braces and key-value pairs.' },
        { question: '8. What function is used to get the length of a list in Python?', options: ['count()', 'size()', 'length()', 'len()'], correctAnswers: [3], explanation: 'The len() function returns the length of a list in Python.' },
        { question: '9. Which of the following is a valid variable name in Python?', options: ['2var', '_var', 'var$', 'var-name'], correctAnswers: [1], explanation: 'Variable names in Python can start with an underscore but not a number or special character.' },
        { question: '10. What keyword is used to define a class in Python?', options: ['class', 'define', 'object', 'type'], correctAnswers: [0], explanation: 'Classes in Python are defined using the class keyword.' }
      ]
    }
  ],

  'HTML & CSS Essentials': [
    {
      id: 'html-css-quiz',
      title: 'HTML & CSS Essentials Quiz',
      questions: [
        { question: '1. What does HTML stand for?', options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'High Tech Markup Language'], correctAnswers: [0], explanation: 'HTML stands for Hyper Text Markup Language.' },
        { question: '2. What is the correct HTML element for inserting a line break?', options: ['<br>', '<lb>', '<break>', '<line>'], correctAnswers: [0], explanation: 'The <br> tag inserts a line break in HTML.' },
        { question: '3. Which CSS property is used to change the text color of an element?', options: ['text-color', 'fgcolor', 'color', 'font-color'], correctAnswers: [2], explanation: 'The color property is used to set the text color in CSS.' },
        { question: '4. What is the default display value of a <div> element?', options: ['inline', 'block', 'inline-block', 'none'], correctAnswers: [1], explanation: 'A <div> element is by default a block-level element.' },
        { question: '5. Which CSS property controls the text size?', options: ['font-size', 'text-style', 'font-style', 'text-size'], correctAnswers: [0], explanation: 'The font-size property controls the text size in CSS.' },
        { question: '6. How do you apply a CSS style to all <p> elements?', options: ['p { style: ... }', 'p { css: ... }', 'p { properties: ... }', 'p { }'], correctAnswers: [3], explanation: 'The p { } syntax is used in CSS to style all <p> elements.' },
        { question: '7. What is the correct HTML for adding a background color?', options: ['<body bg="yellow">', '<body style="background-color:yellow;">', '<background>yellow</background>', '<bg>yellow</bg>'], correctAnswers: [1], explanation: 'The correct way to set a background color is using the style attribute.' },
        { question: '8. How do you create a hyperlink in HTML?', options: ['<a>http://example.com</a>', '<a href="http://example.com">Visit</a>', '<link>http://example.com</link>', '<hyper>http://example.com</hyper>'], correctAnswers: [1], explanation: 'The <a href="..."> tag is used to create hyperlinks in HTML.' },
        { question: '9. Which CSS property is used to make text bold?', options: ['font-weight', 'bold-style', 'text-bold', 'weight'], correctAnswers: [0], explanation: 'The font-weight property is used to make text bold in CSS.' },
        { question: '10. What does the z-index property in CSS control?', options: ['Text size', 'Stacking order of elements', 'Background color', 'Margins'], correctAnswers: [1], explanation: 'The z-index property controls the stacking order of overlapping elements.' }
      ]
    }
  ],

  'Data Science Fundamentals': [
    {
      id: 'data-science-quiz',
      title: 'Data Science Fundamentals Quiz',
      questions: [
        { question: '1. What is data science?', options: ['A way to store data', 'A method for analyzing and interpreting complex data', 'A programming language', 'A database system'], correctAnswers: [1], explanation: 'Data science is a field that focuses on analyzing and interpreting complex data.' },
        { question: '2. Which language is most commonly used for data science?', options: ['Java', 'Python', 'C++', 'Ruby'], correctAnswers: [1], explanation: 'Python is widely used for data science due to its powerful libraries like pandas and NumPy.' },
        { question: '3. What is the purpose of machine learning in data science?', options: ['To manually process data', 'To create static reports', 'To build predictive models', 'To design websites'], correctAnswers: [2], explanation: 'Machine learning helps in creating predictive models based on data patterns.' },
        { question: '4. What does pandas library in Python help with?', options: ['Web development', 'Data manipulation and analysis', 'Graphics rendering', 'Database management'], correctAnswers: [1], explanation: 'Pandas is a Python library used for data manipulation and analysis.' },
        { question: '5. What is a data frame in pandas?', options: ['A single number', 'A 2D table-like data structure', 'A type of graph', 'A machine learning model'], correctAnswers: [1], explanation: 'A data frame in pandas is a two-dimensional table-like data structure used for storing and manipulating data.' },
        { question: '6. What does NumPy provide in data science?', options: ['Database storage', 'Scientific computing and array operations', 'Web hosting', 'Cloud storage'], correctAnswers: [1], explanation: 'NumPy provides support for scientific computing and handling arrays in Python.' },
        { question: '7. What is the purpose of data visualization?', options: ['To hide data', 'To make data more interpretable', 'To store data', 'To secure data'], correctAnswers: [1], explanation: 'Data visualization helps make complex data more understandable through charts and graphs.' },
        { question: '8. What is a neural network?', options: ['A type of database', 'A machine learning model inspired by the human brain', 'A programming language', 'A network of databases'], correctAnswers: [1], explanation: 'A neural network is a machine learning model designed to mimic human brain functioning.' },
        { question: '9. What is big data?', options: ['Small amounts of structured data', 'A database management system', 'Extremely large datasets that require special processing methods', 'A data compression technique'], correctAnswers: [2], explanation: 'Big data refers to extremely large datasets that require advanced methods to store, process, and analyze.' },
        { question: '10. Which tool is commonly used for big data processing?', options: ['Excel', 'Hadoop', 'PowerPoint', 'Word'], correctAnswers: [1], explanation: 'Hadoop is a widely used tool for processing and analyzing big data.' }
      ]
    }
  ]
};

export function getQuizzesByCategory(category) {
  return quizzesByCategory[category] || [];
}
