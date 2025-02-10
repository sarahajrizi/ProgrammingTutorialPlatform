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

export default function QuizScreen({ route, navigation }) {
  const { quiz } = route.params;
  const { progress, saveProgress } = useProgress();

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

          // Ruajmë progresin
          const finalScore = score + (isCorrect ? 1 : 0);
          const newProgress = {
            ...progress,
            completedQuizzes: { ...progress.completedQuizzes, [quiz.id]: true },
            scores: { ...progress.scores, [quiz.id]: finalScore },
          };
          saveProgress(newProgress);
        }
      }, 500); // Koha e vogël për të parë animacionin
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f7" />

      {/* Titulli i quiz-it */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{quiz.title}</Text>
      </View>

      <View style={styles.container}>
        {showResults ? (
          // Kur quiz-i mbaron
          <View style={styles.resultsContainer}>
            <Text style={styles.scoreText}>🎉 Score: {score}/{quiz.questions.length}</Text>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>⬅️ Back to Tutorials</Text>
            </Pressable>
          </View>
        ) : (
          // Pyetjet dhe opsionet
          <View style={styles.questionContainer}>
            <Text style={styles.questionCount}>
              Question {currentQuestion + 1}/{quiz.questions.length}
            </Text>
            <Text style={styles.questionText}>
              {quiz.questions[currentQuestion].question}
            </Text>

            {quiz.questions[currentQuestion].options.map((option, idx) => (
              <Pressable
                key={idx}
                style={[
                  styles.optionButton,
                  selectedOption === idx
                    ? quiz.questions[currentQuestion].correctAnswers.includes(idx)
                      ? styles.correctAnswer
                      : styles.wrongAnswer
                    : null,
                ]}
                onPress={() => handleAnswer(idx)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
    justifyContent: 'center',
  },
  questionCount: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease-in-out',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  correctAnswer: {
    backgroundColor: '#2ECC71', // E gjelbër për përgjigje të sakta
  },
  wrongAnswer: {
    backgroundColor: '#E74C3C', // E kuqe për përgjigje të gabuara
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
    color: '#2c3e50',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
