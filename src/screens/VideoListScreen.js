import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useTheme } from '../components/ThemeContext';
import { useProgress } from '../components/ProgressContext';

export default function VideoListScreen({ route }) {
  const { theme, toggleTheme } = useTheme();
  const { progress, saveProgress } = useProgress();
  const { title, videos } = route.params || {};

  const handleVideoPress = (item) => {
    if (!progress.completedTutorials.includes(item.title)) {
      const newCompletedTutorials = [...progress.completedTutorials, item.title];
      const newProgress = { ...progress, completedTutorials: newCompletedTutorials };
      saveProgress(newProgress);
    }
    Linking.openURL(item.link);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.headerText }]}>{title}</Text>

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.videoItem, { backgroundColor: theme.cardBackground }]}
            onPress={() => handleVideoPress(item)}
          >
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={[styles.videoTitle, { color: theme.text }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
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
  },
  header: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 15 
  },
  videoItem: { 
    marginBottom: 15, 
    alignItems: 'center', 
    borderRadius: 10, 
    padding: 10 
  },
  thumbnail: { 
    width: 300, 
    height: 180, 
    borderRadius: 10 
  },
  videoTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginTop: 5 
  },
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
