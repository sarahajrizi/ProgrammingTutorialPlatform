// /src/data/quizzes.js

/**
 * Mund të shtojm sa quiz-e të doni (p.sh. JavaScript, React, Node.js, etj).
 * Më poshtë kemi dy quiz-e si shembull: "JavaScript Basics" dhe "Advanced JavaScript".
 */

export const javascriptQuizzes = [
  {
    id: 'js1',
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'How do you declare a variable in JavaScript?',
        options: [
          
          'var x;',
          'variable x;',
          'v x;',
          'let x;'
        ],
        correctAnswers: [0, 3], 
        explanation: 'In JavaScript, you can declare variables using var, let, or const.'
      },
      {
        question: 'Which type of scope is created with the "var" keyword?',
        options: [
          'Block scope',
          'Function scope',
          'Global scope',
          'Module scope'
        ],
        correctAnswers: [1],
        explanation: 'Variables declared with var are function-scoped (or globally-scoped if declared outside a function).'
      },
      // Mund të shtoni edhe pyetje të tjera
    ]
  },
  {
    id: 'js2',
    title: 'Advanced JavaScript',
    questions: [
      {
        question: 'What is hoisting in JavaScript?',
        options: [
          'Moving all declarations to the top of the current scope',
          'Redefining all functions at runtime',
          'Deleting variables that are unused',
          'Stopping the execution if an error occurs'
        ],
        correctAnswers: [0],
        explanation: 'Hoisting is the behavior of moving declarations (variables and functions) to the top of their scope before code execution.'
      },
      {
        question: 'Which statement is used to handle errors in JavaScript?',
        options: [
          'throw/catch',
          'try/catch',
          'for/in',
          'while/do'
        ],
        correctAnswers: [1],
        explanation: 'try/catch statements are used to handle exceptions in JavaScript.'
      },
      // Edhe këtu mund të shtoni pyetje shtesë
    ]
  }
];
