import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
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
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(false);

  const handleExerciseCompletion = () => {
    if (currentExerciseIndex < exerciseList.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setCompletedExercises(true);
    }
  };

  let subTutorials = [
    { id: 'sub1', title: 'Introduction', html: '<h1>Introduction</h1><p>Welcome to the tutorial.</p>' },
    { id: 'sub2', title: 'Deep Dive', html: '<h1>Deep Dive</h1><p>Exploring the topic further.</p>' },
  ];

  const [selectedSubTutorial, setSelectedSubTutorial] = useState(null);

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

        {exerciseList.length > 0 && !completedExercises ? (
          <TouchableOpacity
            style={styles.exerciseButton}
            onPress={() => navigation.navigate('Exercise', { 
              exercise: exerciseList[currentExerciseIndex],
              onComplete: handleExerciseCompletion,
            })}
          >
            <Text style={styles.buttonText}>💡 Practice Exercise {currentExerciseIndex + 1}</Text>
          </TouchableOpacity>
        ) : completedExercises ? (
          <Text style={styles.successMessage}>🎉 You have completed all exercises successfully!</Text>
        ) : (
          <TouchableOpacity style={[styles.exerciseButton, styles.disabledButton]} disabled>
            <Text style={styles.buttonText}>No Exercise Available</Text>
          </TouchableOpacity>
        )}
      </View>

      {!selectedSubTutorial ? (
        <>
          <Text style={styles.subHeader}>📚 Sub-Tutorials</Text>
          <FlatList
            data={subTutorials}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.subItem}
                onPress={() => setSelectedSubTutorial(item)}
              >
                <Text style={styles.subItemText}>📖 {item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <View style={styles.webviewContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedSubTutorial(null)}>
            <Text style={styles.backButtonText}>⬅ Back to Sub-Tutorials</Text>
          </TouchableOpacity>
          <WebView source={{ html: selectedSubTutorial.html }} style={styles.webview} />
        </View>
      )}
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
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28A745',
    textAlign: 'center',
    marginTop: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  subItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
    alignItems: 'center',
  },
  subItemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  backButton: {
    padding: 12,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});