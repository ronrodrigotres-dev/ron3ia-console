import { useState, useCallback } from 'react';

export type Screen = 
  | 'hero' 
  | 'diagnosis' 
  | 'diagnosis-result'
  | 'engines' 
  | 'process' 
  | 'comparison' 
  | 'cta-final';

export function useNavigation() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('hero');
  const [diagnosisData, setDiagnosisData] = useState<{
    domain: string;
    email: string;
    score: number | null;
  }>({ domain: '', email: '', score: null });

  const navigateTo = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToNext = useCallback(() => {
    const screenOrder: Screen[] = ['hero', 'diagnosis', 'engines', 'process', 'comparison', 'cta-final'];
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex < screenOrder.length - 1) {
      setCurrentScreen(screenOrder[currentIndex + 1]);
    }
  }, [currentScreen]);

  const goToPrev = useCallback(() => {
    const screenOrder: Screen[] = ['hero', 'diagnosis', 'engines', 'process', 'comparison', 'cta-final'];
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(screenOrder[currentIndex - 1]);
    }
  }, [currentScreen]);

  const setDiagnosis = useCallback((domain: string, email: string, score: number) => {
    setDiagnosisData({ domain, email, score });
  }, []);

  return {
    currentScreen,
    navigateTo,
    goToNext,
    goToPrev,
    diagnosisData,
    setDiagnosis,
  };
}
