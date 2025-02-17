import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useProgress } from '../components/ProgressContext';
import { useTheme } from '../components/ThemeContext';

export default function ProgressScreen() {
  const { theme, toggleTheme } = useTheme();
  const { progress } = useProgress();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.headerText }]}>📊 Your Progress</Text>

      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>✅ Completed Tutorials</Text>
        {progress.completedTutorials?.length ? (
          <FlatList
            data={progress.completedTutorials}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Text style={[styles.item, { color: theme.text }]}> {item}</Text>
            )}
          />
        ) : (
          <Text style={[styles.noData, { color: theme.text }]}>No tutorials completed yet.</Text>
        )}
      </View>

      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>📝 Quiz Scores</Text>
        {Object.keys(progress.scores || {}).length ? (
          <FlatList
            data={Object.entries(progress.scores)}
            keyExtractor={([quizId]) => quizId}
            renderItem={({ item: [quizId, score] }) => (
              <Text style={[styles.item, { color: theme.text }]}>
                🏆 {quizId}: <Text style={[styles.score, { color: theme.primary }]}>{score} points</Text>
              </Text>
            )}
          />
        ) : (
          <Text style={[styles.noData, { color: theme.text }]}>No quiz scores yet.</Text>
        )}
      </View>

      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>💡 Exercise Scores</Text>
        {Object.keys(progress.completedExercises || {}).length ? (
          <FlatList
            data={Object.entries(progress.completedExercises)}
            keyExtractor={([exerciseId]) => exerciseId}
            renderItem={({ item: [exerciseId, score] }) => (
              <Text style={[styles.item, { color: theme.text }]}>
                📌 {exerciseId || 'Unknown Category'}: <Text style={[styles.score, { color: theme.primary }]}>{score}/3 exercises</Text>
              </Text>
            )}
          />
        ) : (
          <Text style={[styles.noData, { color: theme.text }]}>No exercise progress yet.</Text>
        )}
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
    padding: 20
   },
  header: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  card: { 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 20, 
    elevation: 3 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  item: { 
    fontSize: 16, 
    marginBottom: 6, 
    paddingLeft: 10 
  },
  score: { 
    fontWeight: 'bold' 
  },
  noData: { 
    fontSize: 16, 
    fontStyle: 'italic', 
    textAlign: 'center' },
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
