import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tutorials = [
  { id: '1', title: 'JavaScript Basics', category: 'JavaScript' },
  { id: '2', title: 'ES6 Features', category: 'JavaScript' },
  { id: '3', title: 'React Components', category: 'React Native' },
  { id: '4', title: 'State and Props', category: 'React Native' },
];

export default function TutorialsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Tutorials</Text>

      <FlatList
        data={tutorials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TutorialDetail', { tutorial: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // efekt i lehtë hijeje në Android
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
