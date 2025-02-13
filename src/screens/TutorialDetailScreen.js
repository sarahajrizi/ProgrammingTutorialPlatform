import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { getQuizzesByCategory } from '../data/quizzes';
import { getExercisesByCategory } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { course } = route.params;

  let quizList = getQuizzesByCategory ? getQuizzesByCategory(course.title) : [];
  let exerciseList = getExercisesByCategory ? getExercisesByCategory(course.title) : [];

  const selectedQuiz = quizList.length ? quizList[0] : null;

  const tutorialContent = `
    <h1>${course.title}</h1>
    <p>Welcome to the ${course.title} tutorial! In this section, you'll learn the fundamental concepts of ${course.title.toLowerCase()}.</p>
    <p>Follow along with the exercises and quiz to test your knowledge.</p>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course.title}</Text>

      <View style={styles.buttonContainer}>
        {selectedQuiz && selectedQuiz.questions.length === 10 ? (
          <TouchableOpacity
            style={styles.quizButton}
            onPress={() => navigation.navigate('Quiz', { quiz: selectedQuiz })}
          >
            <Text style={styles.buttonText}>📝 Start Quiz</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.quizButton, styles.disabledButton]} disabled>
            <Text style={styles.buttonText}>No Quiz Available</Text>
          </TouchableOpacity>
        )}

        {exerciseList.length > 0 ? (
          <TouchableOpacity
            style={styles.exerciseButton}
            onPress={() => navigation.navigate('Exercise', { exercises: exerciseList })}
          >
            <Text style={styles.buttonText}>💡 Practice Exercises</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.exerciseButton, styles.disabledButton]} disabled>
            <Text style={styles.buttonText}>No Exercises Available</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* ✅ WebView që shfaq përmbajtjen e vetme të tutorialit */}
      <View style={styles.webviewContainer}>
        <WebView source={{ html: tutorialContent }} style={styles.webview} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quizButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
    elevation: 3,
  },
  exerciseButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#AAB3BE',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  webviewContainer: {
    flex: 1,
    marginTop: 10,
  },
  webview: {
    flex: 1,
  },
});

