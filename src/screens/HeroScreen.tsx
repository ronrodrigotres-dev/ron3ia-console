import { useState, useEffect } from 'react';
import { ScanLine, Radar, DataStream, StatusIndicator, TerminalText } from '@/components/effects';
import { Cpu, Activity, Zap, Terminal, ChevronDown } from 'lucide-react';

interface HeroScreenProps {
  onStartDiagnosis: () => void;
}

const terminalLines = [
  '> INICIANDO SISTEMA RON3IA...',
  '> CARGANDO MÓDULOS DE INTELIGENCIA...',
  '> CONECTANDO A RED NEURONAL...',
  '> SISTEMA LISTO.',
];

export function HeroScreen({ onStartDiagnosis }: HeroScreenProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalLine, setTerminalLine] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    const interval = setInterval(() => {
      setTerminalLine((prev) => (prev < terminalLines.length - 1 ? prev + 1 : prev));
    }, 800);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ScanLine />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* LEFT COLUMN - Identity */}
          <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Status Bar */}
            <div className="flex flex-wrap gap-2">
              <StatusIndicator label="Sistema" value="ONLINE" status="online" />
              <StatusIndicator label="CPU" value="42%" status="processing" />
              <StatusIndicator label="Red" value="1.2ms" status="online" />
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" 
                  style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)' }} 
                />
                <span className="text-neon-cyan font-mono text-sm tracking-[0.3em] uppercase">
                  Autonomous Digital Intelligence
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">RON</span>
                <span className="text-neon-cyan neon-text">3</span>
                <span className="text-white">IA</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-lg leading-relaxed">
                Diagnóstico técnico autónomo para infraestructura digital.
              </p>
            </div>

            {/* Description */}
            <div className="glass-panel-strong rounded-xl p-5 max-w-xl">
              <p className="text-white/80 text-sm leading-relaxed">
                RON3IA analiza la arquitectura digital de tu empresa, detecta fallas críticas 
                y revela oportunidades de crecimiento mediante inteligencia artificial.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onStartDiagnosis}
                className="group relative px-8 py-4 font-mono text-sm tracking-wider uppercase overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 rounded-lg transition-all duration-300 group-hover:border-neon-cyan group-hover:shadow-neon" />
                <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3 text-white group-hover:text-neon-cyan transition-colors">
                  <Terminal className="w-4 h-4" />
                  Ejecutar Diagnóstico AI
                </span>
              </button>
            </div>

            {/* Terminal Output */}
            <div className="glass-card rounded-lg p-4 font-mono text-xs space-y-1 max-w-md">
              {terminalLines.slice(0, terminalLine + 1).map((line, i) => (
                <div key={i} className={i === terminalLine ? 'text-neon-cyan' : 'text-white/50'}>
                  {i === terminalLine && i < terminalLines.length - 1 ? (
                    <TerminalText text={line} speed={20} showCursor />
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Radar */}
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
                      <Cpu className="w-10 h-10 text-neon-cyan mx-auto mb-2 animate-pulse" />
                      <span className="text-xs font-mono text-white/50">ESCANEANDO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="glass-card rounded-lg p-3 text-center">
                  <Activity className="w-4 h-4 text-neon-cyan mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">2.4K</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase">Nodos</div>
                </div>
                <div className="glass-card rounded-lg p-3 text-center">
                  <Zap className="w-4 h-4 text-neon-cyan mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">99.9%</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase">Precisión</div>
                </div>
                <div className="glass-card rounded-lg p-3 text-center">
                  <Cpu className="w-4 h-4 text-neon-cyan mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">&lt;3s</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase">Latencia</div>
                </div>
              </div>

              {/* Data Stream */}
              <div className="glass-card rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-white/50 font-mono uppercase">Flujo de Datos</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse delay-75" />
                    <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse delay-150" />
                  </div>
                </div>
                <DataStream columns={10} />
              </div>

              {/* Processing Indicator */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-neon-cyan to-neon-blue animate-pulse" />
                </div>
                <span className="text-xs font-mono text-neon-cyan">LISTO</span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card rounded-lg p-3 float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-white/70">IA ACTIVA</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-3 float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                <span className="text-xs font-mono text-white/70">7 MOTORES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
