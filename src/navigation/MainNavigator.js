import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import TutorialDetailScreen from '../screens/TutorialDetailScreen';
import QuizScreen from '../screens/QuizScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import ProgressScreen from '../screens/ProgressScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TutorialStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TutorialsList" component={TutorialsScreen} />
    <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} />
    <Stack.Screen name="Quiz" component={QuizScreen} />
    <Stack.Screen name="Exercise" component={ExerciseScreen} />
  </Stack.Navigator>
);

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tutorials" component={TutorialStack} />
      <Tab.Screen name="Progres" component={ProgressScreen}/>
    </Tab.Navigator>
  );
}
