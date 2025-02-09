import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function ExerciseScreen({ route }) {
  const { exercise } = route.params;

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const checkSolution = () => {
    const cleanCode = code.replace(/\s/g, '');
    const cleanSolution = exercise.solution.replace(/\s/g, '');
    if (cleanCode === cleanSolution) {
      setResult('Correct! 🎉');
    } else {
      setResult('Try again! 💪');
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f7" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Practice Exercise</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.instructionCard}>
          <Text style={styles.title}>{exercise.title}</Text>
          <Text style={styles.description}>{exercise.description}</Text>
        </View>

        <View style={styles.codeContainer}>
          <TextInput
            style={styles.codeInput}
            multiline
            placeholder="Write your code here..."
            value={code}
            onChangeText={setCode}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={checkSolution}>
          <Text style={styles.buttonText}>Check Solution</Text>
        </TouchableOpacity>

        {result ? (
          <Text style={styles.resultText}>
            {result}
          </Text>
        ) : null}
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
  instructionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  codeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  codeInput: {
    flex: 1,
    textAlignVertical: 'top', 
    fontFamily: 'monospace',
    fontSize: 15,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: '500',
  },
});
