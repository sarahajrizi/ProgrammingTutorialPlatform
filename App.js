// App.js
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { ProgressProvider } from './src/components/ProgressContext';

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ProgressProvider>
  );
}
