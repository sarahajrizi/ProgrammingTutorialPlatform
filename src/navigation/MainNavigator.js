import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons'; 

import HomeScreen from '../screens/HomeScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import TutorialDetailScreen from '../screens/TutorialDetailScreen';
import QuizScreen from '../screens/QuizScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProgressScreen from '../screens/ProgressScreen';
import VideoListScreen from '../screens/VideoListScreen';

import { useTheme } from '../components/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.cardBackground,
        },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoList"
        component={VideoListScreen}
        options={{ title: 'Video Tutorials' }}
      />
    </Stack.Navigator>
  );
}

function TutorialStack() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.cardBackground,
        },
        headerTintColor: theme.text,
      }}
    >
      {/* Fshehim header-in për TutorialsList */}
      <Stack.Screen
        name="TutorialsList"
        component={TutorialsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.cardBackground,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text,

        headerStyle: {
          backgroundColor: theme.cardBackground,
        },
        headerTintColor: theme.text,

        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Tutorials') {
            iconName = 'laptop';
          } else if (route.name === 'Progres') {
            iconName = 'line-chart';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Tutorials" component={TutorialStack} />
      <Tab.Screen name="Progres" component={ProgressScreen} />
    </Tab.Navigator>
  );
}
