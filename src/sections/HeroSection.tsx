import { useState, useEffect } from 'react';
import { ScanLine, Radar, DataStream, StatusIndicator, TerminalText } from '@/components/effects';
import { Cpu, Activity, Zap, Terminal } from 'lucide-react';

const terminalLines = [
  '> INICIANDO SISTEMA RON3IA...',
  '> CARGANDO MÓDULOS DE INTELIGENCIA...',
  '> CONECTANDO A RED NEURONAL...',
  '> SISTEMA LISTO. BIENVENIDO.',
];

export function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ScanLine />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Status Bar */}
            <div className="flex flex-wrap gap-2">
              <StatusIndicator label="Sistema" value="ONLINE" status="online" />
              <StatusIndicator label="CPU" value="42%" status="processing" />
              <StatusIndicator label="Red" value="1.2ms" status="online" />
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" 
                  style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)' }} 
                />
                <span className="text-neon-cyan font-mono text-sm tracking-[0.3em] uppercase">
                  Autonomous Digital Intelligence
                </span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-white">RON</span>
                <span className="text-neon-cyan neon-text">3</span>
                <span className="text-white">IA</span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                Diagnóstico técnico autónomo para infraestructura digital.
              </p>
            </div>

            {/* Description */}
            <div className="glass-panel-strong rounded-xl p-6 max-w-xl">
              <p className="text-white/80 leading-relaxed">
                RON3IA analiza la arquitectura digital de tu empresa, detecta fallas críticas 
                y revela oportunidades de crecimiento mediante inteligencia artificial.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 font-mono text-sm tracking-wider uppercase overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 rounded-lg transition-all duration-300 group-hover:border-neon-cyan group-hover:shadow-neon" />
                <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3 text-white group-hover:text-neon-cyan transition-colors">
                  <Terminal className="w-4 h-4" />
                  Ejecutar Diagnóstico
                </span>
              </button>
              
              <button className="px-6 py-4 font-mono text-sm tracking-wider text-white/60 hover:text-white transition-colors">
                Ver Demo →
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

          {/* Right Column - Visual Elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Main Glass Panel */}
            <div className="tablet-frame p-8 relative">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/50" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/50" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50" />

              {/* Radar Display */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Radar size={280} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Cpu className="w-12 h-12 text-neon-cyan mx-auto mb-2 animate-pulse" />
                      <span className="text-xs font-mono text-white/50">ESCANEANDO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="glass-card rounded-lg p-4 text-center">
                  <Activity className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">2.4K</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase">Nodos</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <Zap className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase">Precisión</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <Cpu className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">&lt;3s</div>
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
                <DataStream columns={12} />
              </div>

              {/* Processing Indicator */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-neon-cyan to-neon-blue animate-pulse" />
                </div>
                <span className="text-xs font-mono text-neon-cyan">PROCESANDO...</span>
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

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
