import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    completedQuizzes: {},  
    completedTutorials: [], 
    completedExercises: {}, 
    scores: {},            
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('@progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (e) {
      console.error('Failed to load progress:', e);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem('@progress', JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  };
  
  const completeExercise = (courseId) => {
    setProgress((prevProgress) => {
      const newCompletedExercises = {
        ...prevProgress.completedExercises,
        [courseId]: (prevProgress.completedExercises[courseId] || 0) + 1,
      };

      const newProgress = { ...prevProgress, completedExercises: newCompletedExercises };
      saveProgress(newProgress);
      return newProgress;
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, saveProgress, completeExercise }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
