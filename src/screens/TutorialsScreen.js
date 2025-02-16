import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../components/ThemeContext';

export default function TutorialsScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();

  const mainTutorials = [
    { id: 'js-b', title: 'JavaScript Basics' },
    { id: 'es6-f', title: 'ES6 Features' },
    { id: 'react-c', title: 'React Components' },
    { id: 'state-p', title: 'State and Props' },
    { id: 'node-js', title: 'Node.js Fundamentals' },
    { id: 'python-b', title: 'Python Basics' },
    { id: 'html-css', title: 'HTML & CSS Essentials' },
    { id: 'data-science', title: 'Data Science Fundamentals' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.headerText }]}>
        📚 Available Courses
      </Text>

      <FlatList
        data={mainTutorials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { backgroundColor: theme.cardBackground }]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TutorialDetail', { course: item })}
          >
            <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

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
    backgroundColor: '#F5F7FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  themeButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
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
