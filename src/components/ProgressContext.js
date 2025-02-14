import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultProgress = {
  completedQuizzes: {},
  completedTutorials: [],
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
      console.log("📂 [LOAD PROGRESS] Nga AsyncStorage:", savedProgress);

      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        if (typeof parsedProgress === 'object' && parsedProgress !== null) {
          console.log("✅ [LOADED] Progresi u ngarkua me sukses:", parsedProgress);
          setProgress(parsedProgress);
        } else {
          console.error("⚠ [ERROR] Të dhënat e korruptuara, duke përdorur defaultProgress...");
          await AsyncStorage.removeItem('@progress');
          setProgress(defaultProgress);
        }
      } else {
        console.warn("⚠ [WARNING] Nuk kishte të dhëna në AsyncStorage, vendos defaultProgress.");
        setProgress(defaultProgress);
      }
    } catch (e) {
      console.error('❌ [ERROR] Nuk mund të ngarkoj progresin:', e);
      setProgress(defaultProgress);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      if (!newProgress || typeof newProgress !== 'object') {
        console.error("⚠ [ERROR] Tentativë për të ruajtur një vlerë të pavlefshme në progress!");
        return;
      }
      console.log("💾 [SAVE PROGRESS] Po ruaj progresin:", newProgress);
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
