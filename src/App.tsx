import { useState, useCallback, useEffect } from 'react';
import { BackgroundEffects } from '@/components/effects';
import { 
  HeroScreen, 
  DiagnosisScreen, 
  DiagnosisResultScreen,
  EnginesScreen, 
  ProcessScreen, 
  ComparisonScreen, 
  CTAFinalScreen 
} from '@/screens';
import { Footer } from '@/sections/Footer';

type Screen = 
  | 'hero' 
  | 'diagnosis' 
  | 'diagnosis-result'
  | 'engines' 
  | 'process' 
  | 'comparison' 
  | 'cta-final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('hero');
  const [diagnosisData, setDiagnosisData] = useState<{
    domain: string;
    email: string;
    score: number | null;
  }>({ domain: '', email: '', score: null });

  // Handle navigation to specific screen
  const navigateTo = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle diagnosis completion
  const handleDiagnosisComplete = useCallback((domain: string, email: string, score: number) => {
    setDiagnosisData({ domain, email, score });
    setCurrentScreen('diagnosis-result');
  }, []);

  // Handle service selection from engines
  const handleServiceSelect = useCallback((engineId: string, tier: 'standard' | 'premium') => {
    console.log(`Selected service: ${engineId} - ${tier}`);
    // Here you would typically redirect to a checkout or service page
    alert(`Servicio seleccionado: ${engineId} - ${tier.toUpperCase()}\n\nEndpoint: /api/service/${engineId}`);
  }, []);

  // Scroll to section handler for navigation dots
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  // Navigation dots
  const screens: Screen[] = ['hero', 'diagnosis', 'engines', 'process', 'comparison', 'cta-final'];
  const screenLabels: Record<Screen, string> = {
    'hero': 'Inicio',
    'diagnosis': 'Diagnóstico',
    'diagnosis-result': 'Resultado',
    'engines': 'Motores',
    'process': 'Proceso',
    'comparison': 'Comparativa',
    'cta-final': 'Contacto',
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Main Content - Full Screen Sections */}
      <main className="relative z-10">
        {/* Screen 1: Hero */}
        {currentScreen === 'hero' && (
          <HeroScreen onStartDiagnosis={() => navigateTo('diagnosis')} />
        )}

        {/* Screen 2: Diagnosis Form */}
        {currentScreen === 'diagnosis' && (
          <DiagnosisScreen onComplete={handleDiagnosisComplete} />
        )}

        {/* Diagnosis Result */}
        {currentScreen === 'diagnosis-result' && diagnosisData.score !== null && (
          <DiagnosisResultScreen 
            domain={diagnosisData.domain}
            email={diagnosisData.email}
            score={diagnosisData.score}
            onContinue={() => navigateTo('engines')}
          />
        )}

        {/* Screen 3: Engines */}
        {currentScreen === 'engines' && (
          <EnginesScreen onSelectService={handleServiceSelect} />
        )}

        {/* Screen 4: Process */}
        {currentScreen === 'process' && (
          <ProcessScreen />
        )}

        {/* Screen 5: Comparison */}
        {currentScreen === 'comparison' && (
          <ComparisonScreen />
        )}

        {/* Screen 6: CTA Final */}
        {currentScreen === 'cta-final' && (
          <CTAFinalScreen onStartDiagnosis={() => navigateTo('diagnosis')} />
        )}
      </main>

      {/* Navigation Dots - Fixed */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {screens.map((screen) => (
          <button
            key={screen}
            onClick={() => navigateTo(screen)}
            className={`
              group relative w-3 h-3 rounded-full transition-all duration-300
              ${currentScreen === screen 
                ? 'bg-neon-cyan scale-125 shadow-neon' 
                : 'bg-white/20 hover:bg-white/40'}
            `}
            title={screenLabels[screen]}
          >
            {/* Tooltip */}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-[10px] font-mono text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {screenLabels[screen]}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="glass-panel-strong mx-4 mb-4 rounded-xl p-2 flex justify-around">
          {screens.slice(0, 5).map((screen) => (
            <button
              key={screen}
              onClick={() => navigateTo(screen)}
              className={`
                px-3 py-2 rounded-lg text-[10px] font-mono uppercase transition-all
                ${currentScreen === screen 
                  ? 'bg-neon-cyan/20 text-neon-cyan' 
                  : 'text-white/50'}
              `}
            >
              {screenLabels[screen]}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
