import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons'; // Importo ikonat

import HomeScreen from '../screens/HomeScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import TutorialDetailScreen from '../screens/TutorialDetailScreen';
import QuizScreen from '../screens/QuizScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProgressScreen from '../screens/ProgressScreen';
import VideoListScreen from '../screens/VideoListScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="VideoList" component={VideoListScreen} options={{ title: 'Video Tutorials' }} />
  </Stack.Navigator>
);

const TutorialStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TutorialsList" component={TutorialsScreen} options={{ title: 'Tutorials' }} />
    <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} />
    <Stack.Screen name="Quiz" component={QuizScreen} />
    <Stack.Screen name="Exercise" component={ExerciseScreen} />
  </Stack.Navigator>
);

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
