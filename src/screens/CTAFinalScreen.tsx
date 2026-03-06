import { useState, useEffect } from 'react';
import { ScanLine, Radar, DataStream } from '@/components/effects';
import { Terminal, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

interface CTAFinalScreenProps {
  onStartDiagnosis: () => void;
}

export function CTAFinalScreen({ onStartDiagnosis }: CTAFinalScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        {/* Radial Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 60%)',
          }}
        />

        {/* Animated Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] border border-neon-cyan/10 rounded-full animate-pulse" />
          <div className="absolute inset-8 border border-neon-cyan/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-16 border border-neon-cyan/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scan Line */}
      <ScanLine />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main CTA Card */}
        <div 
          className={`
            relative glass-panel-strong rounded-2xl p-8 md:p-10
            transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-cyan/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-cyan/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-cyan/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-cyan/30 rounded-br-2xl" />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Content */}
            <div className="text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-5">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">
                  Análisis Gratuito
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ejecutar <span className="text-neon-cyan neon-text">Diagnóstico</span>
              </h2>

              {/* Description */}
              <p className="text-white/60 mb-6 leading-relaxed text-sm">
                Analiza tu infraestructura digital y descubre oportunidades 
                ocultas de crecimiento. El primer diagnóstico es completamente gratuito.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Shield className="w-4 h-4 text-neon-cyan" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Zap className="w-4 h-4 text-neon-cyan" />
                  <span>Resultados en minutos</span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                className="group relative w-full md:w-auto"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={onStartDiagnosis}
              >
                <div 
                  className={`
                    relative px-8 py-4 rounded-lg font-mono text-sm tracking-wider uppercase
                    flex items-center justify-center gap-3
                    transition-all duration-300
                    ${isHovering 
                      ? 'bg-neon-cyan text-black shadow-neon-strong' 
                      : 'bg-neon-cyan/10 text-white border border-neon-cyan/50'}
                  `}
                >
                  <Terminal className="w-4 h-4" />
                  <span>Iniciar Análisis</span>
                  <ArrowRight className={`
                    w-4 h-4 transition-transform duration-300
                    ${isHovering ? 'translate-x-1' : ''}
                  `} />
                </div>

                {/* Button Glow Effect */}
                <div 
                  className={`
                    absolute inset-0 rounded-lg bg-neon-cyan blur-xl
                    transition-opacity duration-300 -z-10
                    ${isHovering ? 'opacity-40' : 'opacity-0'}
                  `}
                />
              </button>
            </div>

            {/* Right Column - Visual */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Radar */}
                <Radar size={220} />
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-neon-cyan/10 flex items-center justify-center mx-auto mb-2 animate-pulse">
                      <Terminal className="w-7 h-7 text-neon-cyan" />
                    </div>
                    <span className="text-xs font-mono text-white/50">LISTO</span>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 glass-card rounded-lg p-2 float">
                  <div className="text-center">
                    <div className="text-lg font-bold text-neon-cyan">7</div>
                    <div className="text-[10px] text-white/50 font-mono">MOTORES</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-2 float" style={{ animationDelay: '1s' }}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-neon-cyan">&lt;3s</div>
                    <div className="text-[10px] text-white/50 font-mono">LATENCIA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Data Stream */}
          <div className="mt-8 pt-5 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-white/40 font-mono uppercase">Sistema Listo</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse delay-75" />
                <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse delay-150" />
              </div>
            </div>
            <DataStream columns={16} />
          </div>
        </div>

        {/* Trust Indicators */}
        <div 
          className={`
            mt-10 text-center
            transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-white/40 text-xs mb-3">Confían en RON3IA</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-white/25 font-mono text-sm">TECHCORP</div>
            <div className="text-white/25 font-mono text-sm">INNOVALABS</div>
            <div className="text-white/25 font-mono text-sm">DIGITALX</div>
            <div className="text-white/25 font-mono text-sm">FUTURECO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
