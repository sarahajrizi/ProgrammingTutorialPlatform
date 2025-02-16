import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lightTheme = {
  mode: 'light',
  background: '#F5F7FA',
  cardBackground: '#ffffff',
  text: '#333',
  headerText: '#333',
  primary: '#007AFF',
  secondary: '#34C759',
  border: '#ccc',
};

const darkTheme = {
  mode: 'dark',
  background: '#1c1c1c',
  cardBackground: '#333333',
  text: '#F5F7FA',
  headerText: '#F5F7FA',
  primary: '#0A84FF',
  secondary: '#32D74B',
  border: '#555',
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  // Ngarkojmë temën nga AsyncStorage ose nga skema e pajisjes
  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('@theme');
      if (savedTheme) {
        setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
      } else {
        const colorScheme = Appearance.getColorScheme();
        setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme.mode === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem('@theme', newTheme.mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
