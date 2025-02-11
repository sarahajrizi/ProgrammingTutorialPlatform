import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { getQuizzesByCategory } from '../data/quizzes';
import { getExercisesByCategory } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { course } = route.params;

  let quizList = getQuizzesByCategory ? getQuizzesByCategory(course.title) : [];
  let exerciseList = getExercisesByCategory ? getExercisesByCategory(course.title) : [];

  const selectedQuiz = quizList.length ? quizList[0] : null;
  const selectedExercise = exerciseList.length ? exerciseList[0] : null;

  let subTutorials = [];

  switch (course.title) {
    case 'JavaScript Basics':
      subTutorials = [
        { id: 'jsb1', title: 'Variables & Data Types', html: `<h1>Variables & Data Types</h1><p>let, const, var</p>` },
        { id: 'jsb2', title: 'Functions & Scope', html: `<h1>Functions & Scope</h1><p>Function declaration & expressions</p>` },
        { id: 'jsb3', title: 'Operators & Conditions', html: `<h1>Operators & Conditions</h1><p>If-else, switch</p>` },
      ];
      break;

    case 'ES6 Features':
      subTutorials = [
        { id: 'es6-1', title: 'Let & Const', html: `<h1>Let & Const</h1><p>Block scope variables</p>` },
        { id: 'es6-2', title: 'Arrow Functions', html: `<h1>Arrow Functions</h1><p>Shorter function syntax</p>` },
        { id: 'es6-3', title: 'Destructuring', html: `<h1>Destructuring</h1><p>Extracting values from objects/arrays</p>` },
      ];
      break;

    case 'React Components':
      subTutorials = [
        { id: 'rc1', title: 'Functional Components', html: `<h1>Functional Components</h1><p>React components using functions</p>` },
        { id: 'rc2', title: 'Class Components', html: `<h1>Class Components</h1><p>React components using class syntax</p>` },
        { id: 'rc3', title: 'Props & Children', html: `<h1>Props & Children</h1><p>Passing data between components</p>` },
      ];
      break;

    case 'State and Props':
      subTutorials = [
        { id: 'sp1', title: 'Introduction to State', html: `<h1>State Management</h1><p>Using useState</p>` },
        { id: 'sp2', title: 'Passing Props', html: `<h1>Passing Props</h1><p>Sending data to child components</p>` },
        { id: 'sp3', title: 'useState Hook', html: `<h1>useState Hook</h1><p>Managing state in functional components</p>` },
      ];
      break;

    default:
      subTutorials = [];
      break;
  }

  const [selectedSubTutorial, setSelectedSubTutorial] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course.title}</Text>

      <View style={styles.buttonContainer}>
        {selectedQuiz ? (
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

        {selectedExercise ? (
          <TouchableOpacity
            style={styles.exerciseButton}
            onPress={() => navigation.navigate('Exercise', { exercise: selectedExercise })}
          >
            <Text style={styles.buttonText}>💡 Practice Exercise</Text>
          </TouchableOpacity>
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

