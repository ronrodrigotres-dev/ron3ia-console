import { useState } from 'react';
import { ScanLine, Radar, TerminalText } from '@/components/effects';
import { Globe, Mail, Terminal, ArrowRight, Loader2 } from 'lucide-react';

interface DiagnosisScreenProps {
  onComplete: (domain: string, email: string, score: number) => void;
}

export function DiagnosisScreen({ onComplete }: DiagnosisScreenProps) {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const isLoaded = true;

  const analysisSteps = [
    'Conectando con el dominio...',
    'Escaneando infraestructura...',
    'Analizando nodos digitales...',
    'Procesando datos con IA...',
    'Generando diagnóstico...',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain || !email) return;

    setIsAnalyzing(true);
    
    // Simulate analysis progress
    for (let i = 0; i <= 100; i += 2) {
      setAnalysisProgress(i);
      setCurrentStep(Math.floor((i / 100) * analysisSteps.length));
      await new Promise(resolve => setTimeout(resolve, 80));
    }

    // Generate random score between 45-85
    const score = Math.floor(Math.random() * 40) + 45;
    
    setIsAnalyzing(false);
    onComplete(domain, email, score);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ScanLine />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* LEFT COLUMN - Form */}
          <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
                <span className="text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase">
                  Análisis Gratuito
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Ejecutar <span className="text-neon-cyan">Diagnóstico</span>
              </h2>
              
              <p className="text-white/60 max-w-md">
                Introduce tu dominio y correo para recibir un diagnóstico técnico inicial 
                de tu infraestructura digital.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Domain Input */}
              <div className="glass-panel-strong rounded-xl p-1">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Globe className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="ejemplo.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    disabled={isAnalyzing}
                    className="flex-1 bg-transparent text-white placeholder-white/30 outline-none font-mono text-sm"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="glass-panel-strong rounded-xl p-1">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Mail className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isAnalyzing}
                    className="flex-1 bg-transparent text-white placeholder-white/30 outline-none font-mono text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!domain || !email || isAnalyzing}
                className="group relative w-full py-4 font-mono text-sm tracking-wider uppercase overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 rounded-lg transition-all duration-300 group-hover:border-neon-cyan group-hover:shadow-neon" />
                <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-3 text-white group-hover:text-neon-cyan transition-colors">
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analizando...
                    </>
                  ) : (
                    <>
                      <Terminal className="w-4 h-4" />
                      Iniciar Análisis
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="glass-card rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50 uppercase">Progreso</span>
                  <span className="text-xs font-mono text-neon-cyan">{analysisProgress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-100"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
                <div className="text-xs font-mono text-neon-cyan">
                  <TerminalText 
                    text={analysisSteps[Math.min(currentStep, analysisSteps.length - 1)]} 
                    speed={30}
                    showCursor
                  />
                </div>
              </div>
            )}

            {/* Info */}
            {!isAnalyzing && (
              <div className="flex flex-wrap gap-4 text-xs text-white/40">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-neon-cyan rounded-full" />
                  Diagnóstico gratuito
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-neon-cyan rounded-full" />
                  Resultados en minutos
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-neon-cyan rounded-full" />
                  10% del informe completo
                </span>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Analysis Radar */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Main Glass Panel with Radar */}
            <div className="tablet-frame p-6 lg:p-8 relative w-full max-w-md">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/50" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/50" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50" />

              {/* Radar Display */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Radar size={240} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-10 h-10 text-neon-cyan mx-auto mb-2 animate-spin" />
                          <span className="text-xs font-mono text-neon-cyan">ANALIZANDO</span>
                        </>
                      ) : (
                        <>
                          <Globe className="w-10 h-10 text-neon-cyan mx-auto mb-2 animate-pulse" />
                          <span className="text-xs font-mono text-white/50">ESPERANDO</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Analysis Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="glass-card rounded-lg p-3 text-center">
                  <div className="text-[10px] text-white/50 font-mono uppercase mb-1">Dominios</div>
                  <div className="text-xl font-bold text-white">12,847</div>
                </div>
                <div className="glass-card rounded-lg p-3 text-center">
                  <div className="text-[10px] text-white/50 font-mono uppercase mb-1">Análisis Hoy</div>
                  <div className="text-xl font-bold text-neon-cyan">1,432</div>
                </div>
              </div>

              {/* Live Data */}
              <div className="glass-card rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-white/50 font-mono uppercase">Datos en Vivo</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse delay-75" />
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse delay-150" />
                  </div>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <div className="flex justify-between text-white/40">
                    <span>Escaneando:</span>
                    <span className="text-neon-cyan">{isAnalyzing ? domain || '...' : 'Esperando...'}</span>
                  </div>
                  <div className="flex justify-between text-white/40">
                    <span>Estado:</span>
                    <span className={isAnalyzing ? 'text-yellow-400' : 'text-green-400'}>
                      {isAnalyzing ? 'PROCESANDO' : 'LISTO'}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/40">
                    <span>Motores:</span>
                    <span className="text-white/60">7 ACTIVOS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
