// /src/screens/TutorialsScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function TutorialsScreen({ navigation }) {
  // Vetëm 4 kurset kryesore
  const mainTutorials = [
    { id: 'js-b', title: 'JavaScript Basics' },
    { id: 'es6-f', title: 'ES6 Features' },
    { id: 'react-c', title: 'React Components' },
    { id: 'state-p', title: 'State and Props' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Courses</Text>

      <FlatList
        data={mainTutorials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TutorialDetail', { course: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600' },
});
