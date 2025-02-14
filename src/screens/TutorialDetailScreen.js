import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { getQuizzesByCategory } from '../data/quizzes';
import { getExercisesByCategory } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { course } = route.params;

  let quizList = getQuizzesByCategory(course.title) || [];
  let exerciseList = getExercisesByCategory(course.title) || [];

  const tutorialContent = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; text-align: center; }
          p { font-size: 16px; line-height: 1.6; }
        </style>
      </head>
      <body>
        <h1>${course.title}</h1>
        <p>Welcome to the ${course.title} tutorial! In this section, you'll learn the fundamental concepts of ${course.title.toLowerCase()}.</p>
        <p>Follow along with the exercises and quiz to test your knowledge.</p>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course.title}</Text>

      <View style={styles.buttonContainer}>
        {quizList.length > 0 ? (
          <TouchableOpacity
            style={styles.quizButton}
            onPress={() => navigation.navigate('Quiz', { quiz: quizList[0] })}
          >
            <Text style={styles.buttonText}>📝 Start Quiz</Text>
          </TouchableOpacity>
        ) : null}

        {exerciseList.length > 0 ? (
          <TouchableOpacity
            style={styles.exerciseButton}
            onPress={() => navigation.navigate('Exercise', { 
              exercises: exerciseList, 
              category: course.title,  
              onComplete: () => navigation.goBack()
            })}
          >
            <Text style={styles.buttonText}>💡 Practice Exercises</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* ✅ WebView për shfaqjen e përmbajtjes së tutorialit */}
      <View style={styles.webviewContainer}>
        <WebView source={{ html: tutorialContent }} style={styles.webview} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F7FA' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#333' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  quizButton: { backgroundColor: '#007AFF', paddingVertical: 12, borderRadius: 10, flex: 1, alignItems: 'center', marginRight: 5 },
  exerciseButton: { backgroundColor: '#34C759', paddingVertical: 12, borderRadius: 10, flex: 1, alignItems: 'center', marginLeft: 5 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  webviewContainer: { flex: 1, marginTop: 10 },
  webview: { flex: 1 },
});
