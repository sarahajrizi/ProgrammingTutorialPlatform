import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import { useProgress } from '../components/ProgressContext';
import { useTheme } from '../components/ThemeContext';

export default function ExerciseScreen({ route }) {
  const { exercises, onComplete, category } = route.params;
  const { progress, saveProgress } = useProgress();
  const { theme, toggleTheme } = useTheme();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loadingNext, setLoadingNext] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const checkSolution = () => {
    Keyboard.dismiss();
    const cleanCode = code.replace(/\s/g, '');
    const cleanSolution = currentExercise.solution.replace(/\s/g, '');

    if (cleanCode === cleanSolution) {
      setResult('✅ Correct! 🎉');
      setTimeout(() => {
        setResult('');
        setCode('');
        if (currentExerciseIndex < exercises.length - 1) {
          setLoadingNext(true);
          setTimeout(() => {
            setCurrentExerciseIndex(currentExerciseIndex + 1);
            setLoadingNext(false);
          }, 1500);
        } else {
          setCompleted(true);
          const newCompletedExercises = {
            ...progress.completedExercises,
            [category]: exercises.length,
          };
          const newProgress = {
            ...progress,
            completedExercises: newCompletedExercises,
          };
          saveProgress(newProgress);
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      }, 1000);
    } else {
      setResult('❌ Try again! 💪');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        {loadingNext ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={theme.primary} />
            <Text style={[styles.loadingText, { color: theme.text }]}>
              Loading new exercise...
            </Text>
          </View>
        ) : completed ? (
          <View style={styles.successContainer}>
            <Text style={[styles.successText, { color: theme.primary }]}>
              🎉 You have completed all exercises successfully!
            </Text>
          </View>
        ) : (
          <>
            <Text style={[styles.title, { color: theme.headerText }]}>
              {currentExercise.title}
            </Text>
            <Text style={[styles.description, { color: theme.text }]}>
              {currentExercise.description}
            </Text>

            <TextInput
              style={[
                styles.codeInput,
                {
                  backgroundColor: theme.cardBackground,
                  color: theme.text,
                  borderColor: theme.border,
                },
              ]}
              multiline
              placeholder="Write your code here..."
              placeholderTextColor="#999"
              value={code}
              onChangeText={setCode}
              autoCapitalize="none"
              autoCorrect={false}
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.primary }]}
              onPress={checkSolution}
              activeOpacity={0.7}
            >
              <Text style={[styles.buttonText, { color: theme.cardBackground }]}>
                Check Solution
              </Text>
            </TouchableOpacity>

            {result ? (
              <Text
                style={[
                  styles.result,
                  result.includes('Correct') ? styles.correct : styles.wrong,
                ]}
              >
                {result}
              </Text>
            ) : null}
          </>
        )}
        <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
          <Text style={styles.themeButtonText}>Toggle Theme</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  codeInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    minHeight: 150,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { fontSize: 16, fontWeight: 'bold' },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    borderRadius: 8,
  },
  correct: {
    backgroundColor: '#D4EDDA',
    color: '#155724',
  },
  wrong: {
    backgroundColor: '#F8D7DA',
    color: '#721C24',
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
