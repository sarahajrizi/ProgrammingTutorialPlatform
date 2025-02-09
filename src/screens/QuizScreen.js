import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function QuizScreen({ route, navigation }) {
  const { quiz } = route.params;
  const { progress, saveProgress } = useProgress(); 

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index) => {
    if (!showResults) {
      const isCorrect = quiz.questions[currentQuestion].correctAnswers.includes(index);
      if (isCorrect) setScore(score + 1);

      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);

        const newProgress = {
          ...progress,
          completedQuizzes: {
            ...progress.completedQuizzes,
            [quiz.id]: true,
          },
          scores: {
            ...progress.scores,
            [quiz.id]: score + (isCorrect ? 1 : 0),
          },
        };
        saveProgress(newProgress);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f7" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{quiz.title}</Text>
      </View>

      <View style={styles.container}>
        {showResults ? (
          <View style={styles.resultsContainer}>
            <Text style={styles.scoreText}>
              Score: {score}/{quiz.questions.length}
            </Text>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back to Tutorials</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionCount}>
              Question {currentQuestion + 1}/{quiz.questions.length}
            </Text>

            <Text style={styles.questionText}>
              {quiz.questions[currentQuestion].question}
            </Text>

            {quiz.questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswer(index)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
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
    backgroundColor: '#f0f4f7',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
    justifyContent: 'center',
  },
  questionCount: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  backButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
