// /src/screens/TutorialDetailScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import { WebView } from 'react-native-webview';

// (Opsionale) nëse keni logjikë quiz/exercise
import { getQuizzesByCategory } from '../data/quizzes';
import { getExercisesByCategory } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { course } = route.params; 
  // p.sh. { id: 'js-b', title: 'JavaScript Basics' }

  // (Opsionale) Marrim quiz/exercise bazuar në course.title
  let quizList = [];
  let exerciseList = [];
  if (getQuizzesByCategory) quizList = getQuizzesByCategory(course.title);
  if (getExercisesByCategory) exerciseList = getExercisesByCategory(course.title);

  const selectedQuiz = quizList.length ? quizList[0] : null;
  const selectedExercise = exerciseList.length ? exerciseList[0] : null;

  // Definojmë "subTutorials" - nga 5 për secilin kurs
  let subTutorials = [];

  switch (course.title) {
    case 'JavaScript Basics':
      subTutorials = [
        {
          id: 'jsb1',
          title: 'Variables & Data Types',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fffbea; padding: 20px;">
                <h1>JavaScript Basics - Variables & Data Types</h1>
                <p>Learn about var, let, const, and different data types in JS.</p>
                <pre>
let age = 30;
const name = "Alice";
var isActive = true;
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'jsb2',
          title: 'Functions & Scope',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fffbea; padding: 20px;">
                <h1>JavaScript Basics - Functions & Scope</h1>
                <p>Explore how functions work and variable scope in JavaScript.</p>
                <pre>
function greet() {
  console.log("Hello, JavaScript!");
}
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'jsb3',
          title: 'Operators & Conditions',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fffbea; padding: 20px;">
                <h1>Operators & Conditions</h1>
                <p>+, -, ===, if-else, switch, etc.</p>
                <pre>
const x = 10;
if (x > 5) {
  console.log("Greater than 5");
} else {
  console.log("5 or less");
}
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'jsb4',
          title: 'Arrays & Loops',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fffbea; padding: 20px;">
                <h1>Arrays & Loops</h1>
                <p>Working with array methods and different looping constructs.</p>
                <pre>
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'jsb5',
          title: 'DOM Manipulation',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fffbea; padding: 20px;">
                <h1>DOM Manipulation</h1>
                <p>Accessing and changing the DOM in browser-based JS.</p>
                <pre>
document.getElementById("myDiv").innerText = "Hello DOM!";
                </pre>
              </body>
            </html>
          `,
        },
      ];
      break;

    case 'ES6 Features':
      subTutorials = [
        {
          id: 'es6-1',
          title: 'Let & Const',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #f0f8ff; padding: 20px;">
                <h1>ES6 - Let & Const</h1>
                <p>Block-scope variable declarations.</p>
                <pre>
let count = 0;
const PI = 3.14;
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'es6-2',
          title: 'Arrow Functions',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #f0f8ff; padding: 20px;">
                <h1>ES6 - Arrow Functions</h1>
                <pre>
const greet = (name) => console.log(\`Hello \${name}\`);
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'es6-3',
          title: 'Destructuring',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #f0f8ff; padding: 20px;">
                <h1>ES6 - Destructuring</h1>
                <p>Extract properties from objects/arrays easily.</p>
                <pre>
const person = { name: "Bob", age: 25 };
const { name, age } = person;
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'es6-4',
          title: 'Spread & Rest',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #f0f8ff; padding: 20px;">
                <h1>ES6 - Spread & Rest</h1>
                <pre>
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'es6-5',
          title: 'Promises',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #f0f8ff; padding: 20px;">
                <h1>ES6 - Promises</h1>
                <p>Handling async operations with then/catch.</p>
                <pre>
new Promise((resolve, reject) => {
  // async work
});
                </pre>
              </body>
            </html>
          `,
        },
      ];
      break;

    case 'React Components':
      subTutorials = [
        {
          id: 'rc1',
          title: 'Functional Components',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #eef7ff; padding: 20px;">
                <h1>React - Functional Components</h1>
                <pre>
function HelloReact() {
  return <h1>Hello React!</h1>;
}
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'rc2',
          title: 'Class Components',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #eef7ff; padding: 20px;">
                <h1>React - Class Components</h1>
                <pre>
class HelloClass extends React.Component {
  render() {
    return <h1>Hello from Class</h1>;
  }
}
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'rc3',
          title: 'Props & Children',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #eef7ff; padding: 20px;">
                <h1>Props & Children</h1>
                <p>Pass data from parent to child with props.</p>
              </body>
            </html>
          `,
        },
        {
          id: 'rc4',
          title: 'useEffect Hook',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #eef7ff; padding: 20px;">
                <h1>useEffect Hook</h1>
                <pre>
useEffect(() => {
  // side effect
}, []);
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'rc5',
          title: 'Conditional Rendering',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #eef7ff; padding: 20px;">
                <h1>Conditional Rendering</h1>
                <p>Show or hide components based on state.</p>
              </body>
            </html>
          `,
        },
      ];
      break;

    case 'State and Props':
      subTutorials = [
        {
          id: 'sp1',
          title: 'Introduction to State',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fef9f9; padding: 20px;">
                <h1>Introduction to State</h1>
                <pre>
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count+1)}>{count}</button>;
}
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'sp2',
          title: 'Passing Props',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fef9f9; padding: 20px;">
                <h1>Passing Props</h1>
                <p>Send data from parent to child in React.</p>
              </body>
            </html>
          `,
        },
        {
          id: 'sp3',
          title: 'useState Hook',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fef9f9; padding: 20px;">
                <h1>useState Hook</h1>
                <pre>
const [value, setValue] = useState(initialValue);
                </pre>
              </body>
            </html>
          `,
        },
        {
          id: 'sp4',
          title: 'Handling Forms',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fef9f9; padding: 20px;">
                <h1>Handling Forms</h1>
                <p>Use controlled components with onChange handlers.</p>
              </body>
            </html>
          `,
        },
        {
          id: 'sp5',
          title: 'Lifting State Up',
          html: `
            <html>
              <body style="font-family: sans-serif; background: #fef9f9; padding: 20px;">
                <h1>Lifting State Up</h1>
                <p>Share state between two child components via their parent.</p>
              </body>
            </html>
          `,
        },
      ];
      break;

    default:
      subTutorials = [];
      break;
  }

  // State për subTutorialin e zgjedhur
  const [selectedSubTutorial, setSelectedSubTutorial] = useState(null);

  return (
    <View style={styles.container}>
      {/* Butoni “Start Quiz” */}
      {selectedQuiz ? (
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate('Quiz', { quiz: selectedQuiz })}
        />
      ) : (
        <Button title="No Quiz Available" disabled />
      )}

      {/* Butoni “Practice Exercise” */}
      {selectedExercise ? (
        <Button
          title="Practice Exercise"
          onPress={() => navigation.navigate('Exercise', { exercise: selectedExercise })}
        />
      ) : (
        <Button title="No Exercise Available" disabled />
      )}

      {/* Nëse s’kemi zgjedhur asnjë subTutorial, shfaqim listën */}
      {!selectedSubTutorial ? (
        <FlatList
          data={subTutorials}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => setSelectedSubTutorial(item)}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        // Nëse kemi zgjedhur një subTutorial
        <View style={{ flex: 1 }}>
          <Button
            title="Back to SubTutorials"
            onPress={() => setSelectedSubTutorial(null)}
          />
          <WebView
            originWhitelist={['*']}
            source={{ html: selectedSubTutorial.html }}
            style={{ flex: 1 }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
