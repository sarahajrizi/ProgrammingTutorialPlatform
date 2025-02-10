import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const featuredContent = [
  { id: '1', title: '🚀 JavaScript Basics' },
  { id: '2', title: '📱 React Native Fundamentals' },
  { id: '3', title: '🔗 State Management' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>👋 Welcome to CodeMaster!</Text>
      <Text style={styles.subheader}>✨ Featured Tutorials:</Text>

      <FlatList
        data={featuredContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TutorialDetail', { course: item })}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
    marginBottom: 10,
    color: '#333',
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
});
