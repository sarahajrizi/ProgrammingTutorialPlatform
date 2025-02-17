import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../components/ThemeContext'; 

export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme(); 
  const featuredContent = [
    {
      id: 'js-b',
      title: '🚀 JavaScript Basics',
      videos: [
        { id: '1', title: '🚀 JavaScript Course for Beginners', thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg', duration: '48:17', link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
        { id: '2', title: '🚀 Learn JavaScript - Full Course', thumbnail: 'https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg', duration: '3:26:43', link: 'https://www.youtube.com/watch?v=hdI2bqOjy3c' },
        { id: '3', title: '🚀 JavaScript Functions', thumbnail: 'https://i.ytimg.com/vi/eM6z9wNc3UQ/maxresdefault.jpg', duration: '45:00', link: 'https://www.youtube.com/watch?v=eM6z9wNc3UQ' },
        { id: '4', title: '🚀 JavaScript ES6 Features', thumbnail: 'https://i.ytimg.com/vi/sjyJBL5fkp8/maxresdefault.jpg', duration: '1:30:00', link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8' },
        { id: '5', title: '🚀 DOM Manipulation with JS', thumbnail: 'https://i.ytimg.com/vi/0ik6X4DJKCc/maxresdefault.jpg', duration: '1:15:00', link: 'https://www.youtube.com/watch?v=0ik6X4DJKCc' },
      ],
    },
    {
      id: 'react-f',
      title: '📱 React Native Fundamentals',
      videos: [
        { id: '1', title: '📱 React Native Course', thumbnail: 'https://i.ytimg.com/vi/qSRrxpdMpVc/maxresdefault.jpg', duration: '2:10:25', link: 'https://www.youtube.com/watch?v=qSRrxpdMpVc' },
        { id: '2', title: '📱 Navigation in React Native', thumbnail: 'https://i.ytimg.com/vi/LKo8mWEiZIM/maxresdefault.jpg', duration: '45:30', link: 'https://www.youtube.com/watch?v=LKo8mWEiZIM' },
        { id: '3', title: '📱 React Native Hooks', thumbnail: 'https://i.ytimg.com/vi/FJ7mLpgxHKY/maxresdefault.jpg', duration: '1:00:00', link: 'https://www.youtube.com/watch?v=FJ7mLpgxHKY' },
        { id: '4', title: '📱 React Native Async Storage', thumbnail: 'https://i.ytimg.com/vi/RkXc4LvMToY/maxresdefault.jpg', duration: '40:00', link: 'https://www.youtube.com/watch?v=RkXc4LvMToY' },
        { id: '5', title: '📱 React Native UI Components', thumbnail: 'https://i.ytimg.com/vi/zTffpnRs4K0/maxresdefault.jpg', duration: '1:10:00', link: 'https://www.youtube.com/watch?v=zTffpnRs4K0' },
      ],
    },
    {
      id: 'html-css',
      title: '🎨 HTML & CSS Basics',
      videos: [
        { id: '1', title: '🎨 HTML & CSS Crash Course', thumbnail: 'https://i.ytimg.com/vi/mU6anWqZJcc/maxresdefault.jpg', duration: '1:12:10', link: 'https://www.youtube.com/watch?v=mU6anWqZJcc' },
        { id: '2', title: '🎨 CSS Flexbox & Grid', thumbnail: 'https://i.ytimg.com/vi/68O6eOGAGqA/maxresdefault.jpg', duration: '45:30', link: 'https://www.youtube.com/watch?v=68O6eOGAGqA' },
        { id: '3', title: '🎨 Advanced CSS Animations', thumbnail: 'https://i.ytimg.com/vi/y8Yv4pnO7qc/maxresdefault.jpg', duration: '1:20:00', link: 'https://www.youtube.com/watch?v=y8Yv4pnO7qc' },
        { id: '4', title: '🎨 Responsive Web Design', thumbnail: 'https://i.ytimg.com/vi/srvUrASNj0s/maxresdefault.jpg', duration: '55:00', link: 'https://www.youtube.com/watch?v=srvUrASNj0s' },
        { id: '5', title: '🎨 CSS Variables & Custom Properties', thumbnail: 'https://i.ytimg.com/vi/xqfLvAnIEfI/maxresdefault.jpg', duration: '50:00', link: 'https://www.youtube.com/watch?v=xqfLvAnIEfI' },
      ],
    },
    {
      id: 'python',
      title: '🐍 Python for Beginners',
      videos: [
        { id: '1', title: '🐍 Python Full Course', thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg', duration: '4:26:45', link: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
        { id: '2', title: '🐍 Python OOP - Classes & Objects', thumbnail: 'https://i.ytimg.com/vi/JeznW_7DlB0/maxresdefault.jpg', duration: '1:10:12', link: 'https://www.youtube.com/watch?v=JeznW_7DlB0' },
      ]
    },
    {
      id: 'game-dev',
      title: '🎮 Game Development with Unity',
      videos: [
        { id: '1', title: '🎮 Unity Basics', thumbnail: 'https://i.ytimg.com/vi/gB1F9G0JXOo/maxresdefault.jpg', duration: '2:05:30', link: 'https://www.youtube.com/watch?v=gB1F9G0JXOo' },
        { id: '2', title: '🎮 Physics in Unity', thumbnail: 'https://i.ytimg.com/vi/KUVE1RpjTnA/maxresdefault.jpg', duration: '50:00', link: 'https://www.youtube.com/watch?v=KUVE1RpjTnA' },
        { id: '3', title: '🎮 2D Game Development', thumbnail: 'https://i.ytimg.com/vi/hgIo_8Ljj5I/maxresdefault.jpg', duration: '1:30:00', link: 'https://www.youtube.com/watch?v=hgIo_8Ljj5I' },
        { id: '4', title: '🎮 AI in Games', thumbnail: 'https://i.ytimg.com/vi/JZKNxY_d-34/maxresdefault.jpg', duration: '1:10:00', link: 'https://www.youtube.com/watch?v=JZKNxY_d-34' },
        { id: '5', title: '🎮 Building a Multiplayer Game', thumbnail: 'https://i.ytimg.com/vi/TTsNcqZWfsk/maxresdefault.jpg', duration: '1:45:00', link: 'https://www.youtube.com/watch?v=TTsNcqZWfsk' },
      ],
    },
    {
      id: 'data-science',
      title: '📊 Data Science & AI',
      videos: [
        { id: '1', title: '📊 Data Science for Beginners', thumbnail: 'https://i.ytimg.com/vi/JwSS70SZdyM/maxresdefault.jpg', duration: '1:30:15', link: 'https://www.youtube.com/watch?v=JwSS70SZdyM' },
        { id: '2', title: '📊 Introduction to AI & ML', thumbnail: 'https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg', duration: '1:45:20', link: 'https://www.youtube.com/watch?v=aircAruvnKk' },
      ],
    },
    {
      id: 'web-advanced',
      title: '🌐 Web Development Advanced',
      videos: [
        {
          id: '1',
          title: '🌐 Full-Stack Development Crash Course',
          thumbnail: 'https://i.ytimg.com/vi/nu_pCVPKzTk/maxresdefault.jpg',
          duration: '3:12:45',
          link: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
        },
        {
          id: '2',
          title: '🌐 Advanced JavaScript Techniques',
          thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
          duration: '45:30',
          link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        },
      ]
    },
    {
      id: 'machine-learning',
      title: '🔢 Machine Learning Fundamentals',
      videos: [
        {
          id: '1',
          title: '🔢 Introduction to Machine Learning',
          thumbnail: 'https://i.ytimg.com/vi/GwIo3gDZCVQ/maxresdefault.jpg',
          duration: '1:10:30',
          link: 'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
        },
        {
          id: '2',
          title: '🔢 Neural Networks Explained',
          thumbnail: 'https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg',
          duration: '1:45:20',
          link: 'https://www.youtube.com/watch?v=aircAruvnKk',
        },
        {
          id: '3',
          title: '🔢 Deep Learning Basics',
          thumbnail: 'https://i.ytimg.com/vi/ZwD1EVShkLg/maxresdefault.jpg',
          duration: '2:00:50',
          link: 'https://www.youtube.com/watch?v=ZwD1EVShkLg',
        },
      ],
    },
    {
      id: 'node-js',
      title: '💻 Node.js Backend Development',
      videos: [
        {
          id: '1',
          title: '💻 Node.js Crash Course',
          thumbnail: 'https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg',
          duration: '2:10:45',
          link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
        },
        {
          id: '2',
          title: '💻 Express.js in 30 Minutes',
          thumbnail: 'https://i.ytimg.com/vi/gnsO8-xJ8rs/maxresdefault.jpg',
          duration: '30:00',
          link: 'https://www.youtube.com/watch?v=gnsO8-xJ8rs',
        },
      ],
    },
    {
      id: 'csharp',
      title: '💻 C# for Beginners',
      videos: [
        { id: '1', title: '💻 Introduction to C#', thumbnail: 'https://i.ytimg.com/vi/1vbJl6KJx0o/maxresdefault.jpg', duration: '1:00:00', link: 'https://www.youtube.com/watch?v=1vbJl6KJx0o' },
        { id: '2', title: '💻 C# Data Types', thumbnail: 'https://i.ytimg.com/vi/Dx7w1t1R8T8/maxresdefault.jpg', duration: '45:00', link: 'https://www.youtube.com/watch?v=Dx7w1t1R8T8' },
        { id: '3', title: '💻 C# Classes and Objects', thumbnail: 'https://i.ytimg.com/vi/LuWroHVG62Y/maxresdefault.jpg', duration: '50:30', link: 'https://www.youtube.com/watch?v=LuWroHVG62Y' },
        { id: '4', title: '💻 C# Methods and Functions', thumbnail: 'https://i.ytimg.com/vi/ULtoMvjL2gM/maxresdefault.jpg', duration: '55:00', link: 'https://www.youtube.com/watch?v=ULtoMvjL2gM' },
        { id: '5', title: '💻 C# Exception Handling', thumbnail: 'https://i.ytimg.com/vi/fmI1FVfu8Vg/maxresdefault.jpg', duration: '40:00', link: 'https://www.youtube.com/watch?v=fmI1FVfu8Vg' },
      ],
    },
    {
      id: 'sql-basics',
      title: '💾 SQL Basics',
      videos: [
        { id: '1', title: '💾 Introduction to SQL', thumbnail: 'https://i.ytimg.com/vi/Hkf_mrYP1fA/maxresdefault.jpg', duration: '1:20:00', link: 'https://www.youtube.com/watch?v=Hkf_mrYP1fA' },
        { id: '2', title: '💾 SQL Queries for Beginners', thumbnail: 'https://i.ytimg.com/vi/5wDBu-iKX48/maxresdefault.jpg', duration: '45:00', link: 'https://www.youtube.com/watch?v=5wDBu-iKX48' },
        { id: '3', title: '💾 SQL Joins and Relationships', thumbnail: 'https://i.ytimg.com/vi/4YQBePkwDoE/maxresdefault.jpg', duration: '50:00', link: 'https://www.youtube.com/watch?v=4YQBePkwDoE' },
        { id: '4', title: '💾 SQL Subqueries', thumbnail: 'https://i.ytimg.com/vi/7U0oZt7AzGg/maxresdefault.jpg', duration: '40:00', link: 'https://www.youtube.com/watch?v=7U0oZt7AzGg' },
        { id: '5', title: '💾 SQL Advanced Queries', thumbnail: 'https://i.ytimg.com/vi/3NXaLg1Do9s/maxresdefault.jpg', duration: '1:00:00', link: 'https://www.youtube.com/watch?v=3NXaLg1Do9s' },
      ],
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.headerText }]}>👋 Welcome to CodeMaster!</Text>
      <Text style={[styles.subheader, { color: theme.text }]}>✨ Featured Tutorials:</Text>
      <FlatList
        data={featuredContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { backgroundColor: theme.cardBackground }]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('VideoList', { title: item.title, videos: item.videos })}
          >
            <Text style={[styles.itemText, { color: theme.text }]}>{item.title}</Text>
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
  courseCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginTop: 5,
  },
  videoDuration: {
    fontSize: 14,
    color: '#6B7280',
  },
  themeButton: {
    backgroundColor: '#36E732', 
    padding: 4,
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
