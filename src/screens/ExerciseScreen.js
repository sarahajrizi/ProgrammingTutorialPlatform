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

export default function ExerciseScreen({ route }) {
  const { exercises, onComplete, category } = route.params;
  const { progress, saveProgress } = useProgress();

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
            [category]: exercises.length, // ✅ Ruajmë numrin e ushtrimeve të kryera
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
        style={styles.container}
      >
        {loadingNext ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Loading new exercise...</Text>
          </View>
        ) : completed ? (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>🎉 You have completed all exercises successfully!</Text>
          </View>
        ) : (
          <>
            <Text style={styles.title}>{currentExercise.title}</Text>
            <Text style={styles.description}>{currentExercise.description}</Text>

            <TextInput
              style={styles.codeInput}
              multiline
              placeholder="Write your code here..."
              value={code}
              onChangeText={setCode}
              autoCapitalize="none"
              autoCorrect={false}
              textAlignVertical="top"
            />

            <TouchableOpacity style={styles.button} onPress={checkSolution} activeOpacity={0.7}>
              <Text style={styles.buttonText}>Check Solution</Text>
            </TouchableOpacity>

            {result ? (
              <Text style={[styles.result, result.includes('Correct') ? styles.correct : styles.wrong]}>
                {result}
              </Text>
            ) : null}
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28A745',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  codeInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    backgroundColor: '#fff',
    fontSize: 16,
    minHeight: 150,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
});
