// /src/screens/TutorialDetailScreen.js

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

import { getQuizzesByCategory } from '../data/quizzes';
import { getExercisesByCategory } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { tutorial } = route.params;

  // Marrim quiz-et e kategorisë (mund të jetë bosh ose me disa quiz-e)
  const quizList = getQuizzesByCategory(tutorial.category);
  const selectedQuiz = quizList.length > 0 ? quizList[0] : null;

  // Marrim ushtrimet e kategorisë (mund të jetë bosh ose me disa ushtrime)
  const exerciseList = getExercisesByCategory(tutorial.category);
  const selectedExercise = exerciseList.length > 0 ? exerciseList[0] : null;

  // Përmbajtja HTML e shembullit
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
      {/* Butoni për të nisur quiz-in, vetëm nëse kemi ndonjë quiz */}
      {selectedQuiz ? (
        <Button
          title="Start Quiz"
          onPress={() =>
            navigation.navigate('Quiz', { quiz: selectedQuiz })
          }
        />
      ) : (
        <Button title="No Quiz Available" onPress={() => {}} disabled />
      )}

      {/* Butoni për ushtrimin praktik, vetëm nëse kemi ndonjë ushtrim */}
      {selectedExercise ? (
        <Button
          title="Practice Exercise"
          onPress={() =>
            navigation.navigate('Exercise', { exercise: selectedExercise })
          }
        />
      ) : (
        <Button title="No Exercise Available" onPress={() => {}} disabled />
      )}

      {/* Shfaq përmbajtjen HTML në WebView */}
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});
