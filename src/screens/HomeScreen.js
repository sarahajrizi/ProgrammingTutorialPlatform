import { View, Text, StyleSheet, FlatList } from 'react-native';

const featuredContent = [
  { id: '1', title: 'JavaScript Basics' },
  { id: '2', title: 'React Native Fundamentals' },
  { id: '3', title: 'State Management' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to CodeMaster!</Text>
      <Text style={styles.subheader}>Featured Tutorials:</Text>

      <FlatList
        data={featuredContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
