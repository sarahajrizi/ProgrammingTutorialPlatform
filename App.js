import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { ProgressProvider } from './src/components/ProgressContext';
import { ThemeProvider } from './src/components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ProgressProvider>
    </ThemeProvider>
  );
}
