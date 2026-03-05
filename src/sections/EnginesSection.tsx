import { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  TrendingUp, 
  Search, 
  Rocket, 
  ShoppingCart, 
  Globe, 
  Sparkles,
  Cpu,
  Activity
} from 'lucide-react';

interface Engine {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  status: 'active' | 'processing' | 'standby';
}

const engines: Engine[] = [
  {
    id: 'intelligence',
    name: 'Intelligence Engine',
    description: 'Vigilancia digital y benchmark competitivo.',
    icon: Eye,
    features: ['Monitoreo 24/7', 'Análisis competitivo', 'Alertas inteligentes'],
    status: 'active',
  },
  {
    id: 'conversion',
    name: 'Conversion Engine',
    description: 'Análisis de experiencia de usuario y optimización de conversión.',
    icon: TrendingUp,
    features: ['Heatmaps', 'Funnel analysis', 'A/B testing'],
    status: 'active',
  },
  {
    id: 'seo',
    name: 'SEO Engine',
    description: 'Auditoría técnica del sitio web.',
    icon: Search,
    features: ['Indexación', 'Core Web Vitals', 'Backlinks'],
    status: 'active',
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    description: 'Evaluación de oportunidades de crecimiento digital.',
    icon: Rocket,
    features: ['KPI tracking', 'Forecasting', 'ROI analysis'],
    status: 'active',
  },
  {
    id: 'commerce',
    name: 'Commerce Engine',
    description: 'Optimización de procesos de compra y confianza digital.',
    icon: ShoppingCart,
    features: ['Checkout flow', 'Trust signals', 'Payment optimization'],
    status: 'active',
  },
  {
    id: 'expansion',
    name: 'Expansion Engine',
    description: 'Análisis predictivo para expansión digital.',
    icon: Globe,
    features: ['Market research', 'Trend analysis', 'Expansion roadmap'],
    status: 'active',
  },
  {
    id: 'geo',
    name: 'GEO Engine',
    description: 'Optimización para motores generativos de inteligencia artificial.',
    icon: Sparkles,
    features: ['LLM optimization', 'Content structuring', 'Visibility boost'],
    status: 'processing',
  },
];

export function EnginesSection() {
  const [hoveredEngine, setHoveredEngine] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      const numActive = Math.floor(Math.random() * 4) + 2;
      const newActive = Array.from({ length: numActive }, () => 
        Math.floor(Math.random() * engines.length)
      );
      setActiveNodes(newActive);
    }, 1500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Animated Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(0, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
            </linearGradient>
          </defs>
          {engines.map((_, i) => {
            if (i >= engines.length - 1) return null;
            const x1 = `${(i / (engines.length - 1)) * 80 + 10}%`;
            const x2 = `${((i + 1) / (engines.length - 1)) * 80 + 10}%`;
            return (
              <line
                key={i}
                x1={x1}
                y1="50%"
                x2={x2}
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className={activeNodes.includes(i) ? 'opacity-100' : 'opacity-20'}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Cpu className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Subprocesos del Sistema</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Motores de <span className="text-neon-cyan">Inteligencia</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Siete motores de IA trabajan en paralelo para analizar cada aspecto 
            de tu infraestructura digital.
          </p>
        </div>

        {/* Central Hub */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative">
            <div className="w-24 h-24 rounded-full glass-panel-strong flex items-center justify-center pulse-glow">
              <div className="text-center">
                <Activity className="w-8 h-8 text-neon-cyan mx-auto animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 mt-1 block">CORE</span>
              </div>
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 w-3 h-3 bg-neon-cyan rounded-full shadow-neon" />
            </div>
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-neon-blue rounded-full" />
            </div>
          </div>
        </div>

        {/* Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {engines.map((engine, index) => {
            const Icon = engine.icon;
            const isHovered = hoveredEngine === engine.id;
            const isGeo = engine.id === 'geo';
            const isActive = activeNodes.includes(index);

            return (
              <div
                key={engine.id}
                className={`
                  relative group transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${isGeo ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}
                `}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                onMouseEnter={() => setHoveredEngine(engine.id)}
                onMouseLeave={() => setHoveredEngine(null)}
              >
                <div 
                  className={`
                    relative glass-card rounded-xl p-6 h-full cursor-pointer overflow-hidden
                    transition-all duration-300
                    ${isHovered ? 'border-neon-cyan/50 scale-[1.02]' : ''}
                    ${isGeo ? 'border-neon-cyan/40 shadow-neon' : ''}
                    ${isActive ? 'border-neon-cyan/30' : ''}
                  `}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div 
                      className={`
                        w-2 h-2 rounded-full
                        ${engine.status === 'active' ? 'bg-green-400 animate-pulse' : ''}
                        ${engine.status === 'processing' ? 'bg-neon-cyan animate-pulse' : ''}
                        ${engine.status === 'standby' ? 'bg-gray-500' : ''}
                      `}
                    />
                    <span className="text-[10px] font-mono text-white/40 uppercase">
                      {engine.status}
                    </span>
                  </div>

                  {/* GEO Badge */}
                  {isGeo && (
                    <div className="absolute -top-1 -right-1">
                      <div className="bg-neon-cyan text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg font-mono">
                        DESTACADO
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div 
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-4
                      transition-all duration-300
                      ${isHovered || isGeo 
                        ? 'bg-neon-cyan/20 text-neon-cyan' 
                        : 'bg-white/5 text-white/50'}
                    `}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold mb-2">{engine.name}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{engine.description}</p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {engine.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                        <span className="text-xs text-white/40">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div 
                    className={`
                      absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent
                      transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                  />

                  {/* Data Flow Animation */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan/30">
                      <div className="h-full w-1/3 bg-neon-cyan animate-circuit-flow" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* System Status Footer */}
        <div className={`mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-panel rounded-xl p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-white/70">6 ACTIVOS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-white/70">1 PROCESANDO</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-neon-cyan font-mono text-sm">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>Sistema Operativo al 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
