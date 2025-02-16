import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../components/ThemeContext';
import { getQuizzesByCategory } from '../data/quizzes';
import { getExercisesByCategory } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { theme, toggleTheme } = useTheme();
  const { course } = route.params;

  const quizList = getQuizzesByCategory(course.title) || [];
  const exerciseList = getExercisesByCategory(course.title) || [];

  const tutorialContent = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.headerText }]}>{course.title}</Text>

      <View style={styles.buttonContainer}>
        {quizList.length > 0 && (
          <TouchableOpacity
            style={[styles.quizButton, { backgroundColor: theme.primary }]}
            onPress={() => navigation.navigate('Quiz', { quiz: quizList[0] })}
          >
            <Text style={[styles.buttonText, { color: theme.cardBackground }]}>
              📝 Start Quiz
            </Text>
          </TouchableOpacity>
        )}

        {exerciseList.length > 0 && (
          <TouchableOpacity
            style={[styles.exerciseButton, { backgroundColor: theme.secondary }]}
            onPress={() =>
              navigation.navigate('Exercise', {
                exercises: exerciseList,
                category: course.title,
                onComplete: () => navigation.goBack(),
              })
            }
          >
            <Text style={[styles.buttonText, { color: theme.cardBackground }]}>
              💡 Practice Exercises
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.webviewContainer}>
        <WebView
          source={{ html: tutorialContent }}
          style={[styles.webview, { backgroundColor: theme.cardBackground }]}
        />
      </View>

      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quizButton: {
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  exerciseButton: {
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
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
  themeButton: {
    backgroundColor: '#36E732',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  themeButtonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: '600',
  },
});
