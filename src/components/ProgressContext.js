// /src/components/ProgressContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1) Krijo Context
const ProgressContext = createContext();

// 2) Krijo Provider-in
export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    completedQuizzes: {},  // p.sh. { "js1": true, "js2": true }
    completedTutorials: [], // p.sh. ["Introduction to RN", "JavaScript Basics"]
    scores: {},            // p.sh. { "js1": 4, "js2": 3 }
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

  // Kthe Provider-in me vlerat (progress, saveProgress)
  return (
    <ProgressContext.Provider value={{ progress, saveProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

// 3) Krijo një "hook" praktik për ta përdorur diku tjetër
export function useProgress() {
  return useContext(ProgressContext);
}
