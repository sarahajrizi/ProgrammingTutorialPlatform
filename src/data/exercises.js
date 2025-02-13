export const javascriptExercises = [
  { 
    id: 'ex1', 
    title: 'Hello World Function', 
    description: 'Return "Hello World!"', 
    solution: `
      function hello() { 
        return "Hello World!"; 
      }
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Sum Function', 
    description: 'Return the sum of two numbers', 
    solution: `
      function sum(a, b) { 
        return a + b; 
      }
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Find Maximum', 
    description: 'Return the maximum of two numbers', 
    solution: `
      function max(a, b) { 
        return a > b ? a : b; 
      }
    ` 
  }
];

export const es6FeaturesExercises = [
  { 
    id: 'ex1', 
    title: 'Arrow Function', 
    description: 'Convert function to an arrow function', 
    solution: `
      const greet = name => "Hello " + name;
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Destructuring', 
    description: 'Use object destructuring to extract values', 
    solution: `
      const person = { name: "John", age: 30 };
      const { name, age } = person;
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Spread Operator', 
    description: 'Use spread operator to copy an array', 
    solution: `
      const numbers = [1, 2, 3];
      const newNumbers = [...numbers, 4, 5];
    ` 
  }
];

export const reactComponentsExercises = [
  { 
    id: 'ex1', 
    title: 'Functional Component', 
    description: 'Create a simple React functional component', 
    solution: `
      import React from 'react';
      function HelloReact() { 
        return <h1>Hello React!</h1>; 
      }
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Props Example', 
    description: 'Create a component that displays a message from props', 
    solution: `
      import React from 'react';
      function Message({ text }) { 
        return <h1>{text}</h1>; 
      }
    ` 
  },
  { 
    id: 'ex3', 
    title: 'State Management', 
    description: 'Create a component that uses useState', 
    solution: `
      import React, { useState } from 'react';
      function Counter() {
        const [count, setCount] = useState(0);
        return <button onClick={() => setCount(count + 1)}>{count}</button>;
      }
    ` 
  }
];

export const stateAndPropsExercises = [
  { 
    id: 'ex1', 
    title: 'useState Hook', 
    description: 'Create a component with state', 
    solution: `
      import React, { useState } from 'react';
      function Counter() {
        const [count, setCount] = useState(0);
        return <button onClick={() => setCount(count + 1)}>{count}</button>;
      }
    ` 
  },
  { 
    id: 'ex2', 
    title: 'useEffect Hook', 
    description: 'Use useEffect to fetch data', 
    solution: `
      import React, { useState, useEffect } from 'react';
      function FetchData() {
        const [data, setData] = useState(null);
        useEffect(() => {
          fetch("https://api.example.com/data")
            .then(response => response.json())
            .then(data => setData(data));
        }, []);
        return <div>{JSON.stringify(data)}</div>;
      }
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Props in Components', 
    description: 'Create a component that accepts and displays props', 
    solution: `
      import React from 'react';
      function Welcome({ name }) {
        return <h1>Welcome, {name}!</h1>;
      }
    ` 
  }
];

export const nodeJsExercises = [
  { 
    id: 'ex1', 
    title: 'Create a Simple Server', 
    description: 'Use Node.js to create an HTTP server', 
    solution: `
      const http = require("http");
      const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, Node.js!");
      });
      server.listen(3000, () => console.log("Server running on port 3000"));
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Read a File', 
    description: 'Use Node.js to read a file asynchronously', 
    solution: `
      const fs = require("fs");
      fs.readFile("example.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Use Express.js', 
    description: 'Create a simple Express server', 
    solution: `
      const express = require("express");
      const app = express();
      app.get("/", (req, res) => res.send("Hello Express!"));
      app.listen(3000, () => console.log("Express server running on port 3000"));
    ` 
  }
];

export const pythonBasicsExercises = [
  { 
    id: 'ex1', 
    title: 'Print Hello', 
    description: 'Write a Python function that prints "Hello, World!"', 
    solution: `
      def say_hello():
          print("Hello, World!")
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Sum Function', 
    description: 'Write a Python function that returns the sum of two numbers', 
    solution: `
      def sum_numbers(a, b):
          return a + b
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Check Even', 
    description: 'Write a function that checks if a number is even', 
    solution: `
      def is_even(n):
          return n % 2 == 0
    ` 
  }
];

export const htmlCssExercises = [
  { 
    id: 'ex1', 
    title: 'Create a Simple HTML Page', 
    description: 'Write a basic HTML structure with a heading and a paragraph.', 
    solution: `
      <!DOCTYPE html>
      <html>
      <head>
          <title>My Page</title>
      </head>
      <body>
          <h1>Welcome to My Page</h1>
          <p>This is a simple paragraph.</p>
      </body>
      </html>
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Style a Button with CSS', 
    description: 'Use CSS to make a button green with white text.', 
    solution: `
      <style>
          .btn {
              background-color: green;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
          }
      </style>
      <button class="btn">Click Me</button>
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Create a Responsive Layout', 
    description: 'Use CSS Flexbox to create a simple responsive layout.', 
    solution: `
      <style>
          .container {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
          }
          .box {
              width: 30%;
              padding: 20px;
              background-color: lightblue;
              text-align: center;
              margin: 10px;
          }
      </style>
      <div class="container">
          <div class="box">Box 1</div>
          <div class="box">Box 2</div>
          <div class="box">Box 3</div>
      </div>
    ` 
  }
];

export const dataScienceExercises = [
  { 
    id: 'ex1', 
    title: 'Load a CSV File', 
    description: 'Write a Python function to load a CSV file using pandas.', 
    solution: `
      import pandas as pd
      def load_csv(filename):
          return pd.read_csv(filename)
    ` 
  },
  { 
    id: 'ex2', 
    title: 'Basic Data Visualization', 
    description: 'Create a simple bar chart using matplotlib.', 
    solution: `
      import matplotlib.pyplot as plt
      def plot_data():
          categories = ['A', 'B', 'C']
          values = [10, 20, 15]
          plt.bar(categories, values)
          plt.show()
    ` 
  },
  { 
    id: 'ex3', 
    title: 'Train a Linear Regression Model', 
    description: 'Train a simple linear regression model using sklearn.', 
    solution: `
      from sklearn.linear_model import LinearRegression
      import numpy as np

      def train_model(X, y):
          model = LinearRegression()
          model.fit(np.array(X).reshape(-1, 1), y)
          return model
    ` 
  }
];

export function getExercisesByCategory(category) {
  switch (category.trim()) {
    case 'JavaScript Basics': return javascriptExercises;
    case 'ES6 Features': return es6FeaturesExercises;
    case 'React Components': return reactComponentsExercises;
    case 'State and Props': return stateAndPropsExercises;
    case 'Node.js Fundamentals': return nodeJsExercises;
    case 'Python Basics': return pythonBasicsExercises;
    case 'HTML & CSS Essentials': return htmlCssExercises;
    case 'Data Science Fundamentals': return dataScienceExercises;
    default: return [];
  }
}
