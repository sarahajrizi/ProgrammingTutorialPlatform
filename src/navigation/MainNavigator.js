import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Tutorials" component={TutorialStack} />
      <Tab.Screen name="Progres" component={ProgressScreen} />
    </Tab.Navigator>
  );
}
