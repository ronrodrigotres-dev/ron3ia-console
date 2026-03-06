import { useState, useEffect, useRef } from 'react';
import { X, Check, Clock, Zap, DollarSign, Cpu } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  traditional: boolean | string;
  ron3ia: boolean | string;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Tiempo de diagnóstico',
    traditional: 'Semanas',
    ron3ia: 'Minutos',
  },
  {
    feature: 'Proceso de análisis',
    traditional: 'Manual',
    ron3ia: 'Autónomo',
  },
  {
    feature: 'Precisión de datos',
    traditional: 'Variable',
    ron3ia: '99.9%',
  },
  {
    feature: 'Motores de IA',
    traditional: false,
    ron3ia: '7 especializados',
  },
  {
    feature: 'Análisis en tiempo real',
    traditional: false,
    ron3ia: true,
  },
  {
    feature: 'Escalabilidad',
    traditional: 'Limitada',
    ron3ia: 'Ilimitada',
  },
  {
    feature: 'Costo operativo',
    traditional: 'Alto',
    ron3ia: 'Optimizado',
  },
  {
    feature: 'Actualizaciones',
    traditional: 'Periódicas',
    ron3ia: 'Continuas',
  },
];

export function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderValue = (value: boolean | string, type: 'traditional' | 'ron3ia') => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-5 h-5 ${type === 'ron3ia' ? 'text-neon-cyan' : 'text-white/50'}`} />
      ) : (
        <X className="w-5 h-5 text-red-400" />
      );
    }
    return (
      <span className={`font-mono text-sm ${type === 'ron3ia' ? 'text-neon-cyan' : 'text-white/60'}`}>
        {value}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Cpu className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Comparativa</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            La diferencia <span className="text-neon-cyan">RON3IA</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Descubre por qué el diagnóstico autónomo supera los métodos tradicionales.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Traditional Agencies */}
          <div 
            className={`
              glass-card rounded-xl p-6 border-red-500/20
              transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Agencias Tradicionales</h3>
                <p className="text-white/40 text-sm">Métodos convencionales</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-medium">Proceso lento</p>
                  <p className="text-white/40 text-xs">Semanas de espera para resultados</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-medium">Diagnóstico manual</p>
                  <p className="text-white/40 text-xs">Propenso a errores humanos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-medium">Alto costo</p>
                  <p className="text-white/40 text-xs">Recursos dedicados elevados</p>
                </div>
              </div>
            </div>
          </div>

          {/* RON3IA */}
          <div 
            className={`
              glass-card rounded-xl p-6 border-neon-cyan/30
              transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
            style={{ boxShadow: '0 0 40px rgba(0, 255, 255, 0.1)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-white font-semibold">RON3IA</h3>
                <p className="text-neon-cyan text-sm">Inteligencia Autónoma</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-medium">Diagnóstico autónomo</p>
                  <p className="text-white/40 text-xs">Análisis completo en minutos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-medium">Análisis inmediato</p>
                  <p className="text-white/40 text-xs">Resultados en tiempo real</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-medium">Infraestructura de IA</p>
                  <p className="text-white/40 text-xs">7 motores especializados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div 
          className={`
            glass-panel-strong rounded-xl overflow-hidden
            transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-neon-cyan" />
              Comparativa Detallada
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/50 text-xs font-mono uppercase tracking-wider">
                    Característica
                  </th>
                  <th className="text-center p-4 text-white/50 text-xs font-mono uppercase tracking-wider">
                    Tradicional
                  </th>
                  <th className="text-center p-4 text-neon-cyan text-xs font-mono uppercase tracking-wider">
                    RON3IA
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 text-white/70 text-sm">{item.feature}</td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {renderValue(item.traditional, 'traditional')}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {renderValue(item.ron3ia, 'ron3ia')}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`
            grid grid-cols-2 md:grid-cols-4 gap-4 mt-8
            transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="glass-card rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-1">10x</div>
            <div className="text-xs text-white/50">Más rápido</div>
          </div>
          <div className="glass-card rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-1">99.9%</div>
            <div className="text-xs text-white/50">Precisión</div>
          </div>
          <div className="glass-card rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-1">60%</div>
            <div className="text-xs text-white/50">Menor costo</div>
          </div>
          <div className="glass-card rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-1">24/7</div>
            <div className="text-xs text-white/50">Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
}
