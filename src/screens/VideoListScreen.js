import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function VideoListScreen({ route }) {
  const { title, videos } = route.params || {}; 

  console.log("Videos Data:", videos); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.videoItem}
            onPress={() => Linking.openURL(item.link)}
          >
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.videoTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  videoItem: { marginBottom: 15, alignItems: 'center' },
  thumbnail: { width: 300, height: 180, borderRadius: 10 },
  videoTitle: { fontSize: 16, fontWeight: '600', textAlign: 'center', marginTop: 5 },
});
