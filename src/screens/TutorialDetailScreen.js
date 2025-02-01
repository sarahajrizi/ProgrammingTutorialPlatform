// /src/screens/TutorialDetailScreen.js

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

// Importet e quiz-eve dhe ushtrimeve
import { javascriptQuizzes } from '../data/quizzes';
import { javascriptExercises } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  // Marrim objektin "tutorial" nga parametri i navigimit (nëse përdoret)
  const { tutorial } = route.params;

  // Përmbajtja HTML si shembull
  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          h1 { color: #2c3e50; }
          pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
          }
        </style>
      </head>
      <body>
        <h1>${tutorial?.title || 'Default Tutorial Title'}</h1>
        <p>This is an example tutorial detail.</p>
        <pre>
function greet() {
  console.log("Hello, World!");
}
        </pre>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>

      {/* Butoni për të nisur quiz-in */}
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Quiz', {
          // Mund të zgjedhësh cilindo quiz nga javascriptQuizzes
          quiz: javascriptQuizzes[0]
        })}
      />

      {/* Butoni për ushtrimin praktik */}
      <Button
        title="Practice Exercise"
        onPress={() => navigation.navigate('Exercise', {
          // Mund të zgjedhësh cilindo ushtrim nga javascriptExercises
          exercise: javascriptExercises[0]
        })}
      />

      {/* Shfaq përmbajtjen HTML në një WebView */}
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
