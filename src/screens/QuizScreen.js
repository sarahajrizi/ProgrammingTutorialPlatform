// /src/screens/QuizScreen.js

import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function QuizScreen({ route, navigation }) {
  const { quiz } = route.params;

  const { progress, saveProgress } = useProgress(); // MERR context-in
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
    <View style={styles.container}>
      <Text style={styles.title}>{quiz.title}</Text>

      {showResults ? (
        <View style={styles.results}>
          <Text style={styles.score}>
            Score: {score}/{quiz.questions.length}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back to Tutorials</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>
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
  );
}

const styles = StyleSheet.create({

});
