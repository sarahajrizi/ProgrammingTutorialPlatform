import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultProgress = {
  completedQuizzes: {},
  completedTutorials: [],
  completedExercises: {}, 
  scores: {},
};

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(defaultProgress);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('@progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      } else {
        setProgress(defaultProgress);
      }
    } catch (e) {
      console.error('❌ [ERROR] Nuk mund të ngarkoj progresin:', e);
      setProgress(defaultProgress);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem('@progress', JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (e) {
      console.error('❌ [ERROR] Nuk mund të ruaj progresin:', e);
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, saveProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
