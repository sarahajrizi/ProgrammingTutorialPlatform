import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import { useProgress } from '../components/ProgressContext';
import { useTheme } from '../components/ThemeContext';

export default function QuizScreen({ route, navigation }) {
  const { quiz } = route.params;
  const { progress, saveProgress } = useProgress();
  const { theme, toggleTheme } = useTheme();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (optionIndex) => {
    if (!showResults) {
      const isCorrect = quiz.questions[currentQuestion].correctAnswers.includes(optionIndex);
      setSelectedOption(optionIndex);

      setTimeout(() => {
        if (isCorrect) setScore(score + 1);

        if (currentQuestion < quiz.questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
        } else {
          setShowResults(true);
          const finalScore = score + (isCorrect ? 1 : 0);
          const newProgress = {
            ...progress,
            completedQuizzes: { ...progress.completedQuizzes, [quiz.id]: true },
            scores: { ...progress.scores, [quiz.id]: finalScore },
          };
          saveProgress(newProgress);
        }
      }, 500);
    }
  };

  return (
    <SafeAreaView style={[styles.safeContainer, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />

      <View style={[styles.header, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>{quiz.title}</Text>
      </View>

      <View style={styles.container}>
        {showResults ? (
          <View style={styles.resultsContainer}>
            <Text style={[styles.scoreText, { color: theme.text }]}>
              🎉 Score: {score}/{quiz.questions.length}
            </Text>
            <Pressable
              style={[styles.backButton, { backgroundColor: theme.primary }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.backButtonText, { color: theme.cardBackground }]}>
                ⬅️ Back to Tutorials
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={[styles.questionContainer, { backgroundColor: theme.cardBackground }]}>
            <Text style={[styles.questionCount, { color: theme.text }]}>
              Question {currentQuestion + 1}/{quiz.questions.length}
            </Text>
            <Text style={[styles.questionText, { color: theme.text }]}>
              {quiz.questions[currentQuestion].question}
            </Text>

            {quiz.questions[currentQuestion].options.map((option, idx) => {
              let backgroundColor = theme.primary;
              if (selectedOption === idx) {
                backgroundColor = quiz.questions[currentQuestion].correctAnswers.includes(idx)
                  ? '#2ECC71'
                  : '#E74C3C';
              }
              return (
                <Pressable
                  key={idx}
                  style={[styles.optionButton, { backgroundColor }]}
                  onPress={() => handleAnswer(idx)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  header: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  questionContainer: {
    borderRadius: 12,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  questionCount: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  themeButton: {
    backgroundColor: '#36E732', 
    padding: 8,
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
