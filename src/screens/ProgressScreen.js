import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function ProgressScreen() {
  const { progress } = useProgress();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📊 Your Progress</Text>

      {/* Seksioni për tutorialet e përfunduara */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>✅ Completed Tutorials</Text>
        {progress.completedTutorials?.length ? (
          <FlatList
            data={progress.completedTutorials}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.item}>📘 {item}</Text>}
          />
        ) : (
          <Text style={styles.noData}>No tutorials completed yet.</Text>
        )}
      </View>

      {/* Seksioni për rezultatet e quiz-it */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📝 Quiz Scores</Text>
        {Object.keys(progress.scores || {}).length ? (
          <FlatList
            data={Object.entries(progress.scores)}
            keyExtractor={([quizId]) => quizId}
            renderItem={({ item: [quizId, score] }) => (
              <Text style={styles.item}>
                🏆 {quizId}: <Text style={styles.score}>{score} points</Text>
              </Text>
            )}
          />
        ) : (
          <Text style={styles.noData}>No quiz scores yet.</Text>
        )}
      </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  item: {
    fontSize: 16,
    marginBottom: 6,
    paddingLeft: 10,
    color: '#2C3E50',
  },
  score: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  noData: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#999',
    textAlign: 'center',
  },
});
