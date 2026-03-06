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
  Activity,
  Check
} from 'lucide-react';

interface Engine {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  status: 'active' | 'processing' | 'standby';
  endpoint: string;
}

const engines: Engine[] = [
  {
    id: 'intelligence',
    name: 'Motor de Inteligencia',
    description: 'Vigilancia digital y benchmark competitivo.',
    icon: Eye,
    features: ['Monitoreo 24/7', 'Análisis competitivo', 'Alertas inteligentes'],
    status: 'active',
    endpoint: '/api/service/intelligence',
  },
  {
    id: 'conversion',
    name: 'Motor de Conversión',
    description: 'Análisis de experiencia de usuario y optimización de conversión.',
    icon: TrendingUp,
    features: ['Heatmaps', 'Funnel analysis', 'A/B testing'],
    status: 'active',
    endpoint: '/api/service/conversion',
  },
  {
    id: 'seo',
    name: 'Motor SEO',
    description: 'Auditoría técnica del sitio web.',
    icon: Search,
    features: ['Indexación', 'Core Web Vitals', 'Backlinks'],
    status: 'active',
    endpoint: '/api/service/seo',
  },
  {
    id: 'growth',
    name: 'Motor de Crecimiento',
    description: 'Evaluación de oportunidades de crecimiento digital.',
    icon: Rocket,
    features: ['KPI tracking', 'Forecasting', 'ROI analysis'],
    status: 'active',
    endpoint: '/api/service/growth',
  },
  {
    id: 'commerce',
    name: 'Motor de Comercio',
    description: 'Optimización de procesos de compra y confianza digital.',
    icon: ShoppingCart,
    features: ['Checkout flow', 'Trust signals', 'Payment optimization'],
    status: 'active',
    endpoint: '/api/service/commerce',
  },
  {
    id: 'expansion',
    name: 'Motor de Expansión',
    description: 'Análisis predictivo para expansión digital.',
    icon: Globe,
    features: ['Market research', 'Trend analysis', 'Expansion roadmap'],
    status: 'active',
    endpoint: '/api/service/expansion',
  },
  {
    id: 'geo',
    name: 'GEO Engine',
    description: 'Optimización para motores generativos de inteligencia artificial.',
    icon: Sparkles,
    features: ['LLM optimization', 'Content structuring', 'Visibility boost'],
    status: 'processing',
    endpoint: '/api/service/geo',
  },
];

interface EnginesScreenProps {
  onSelectService: (engineId: string, tier: 'standard' | 'premium') => void;
}

export function EnginesScreen({ onSelectService }: EnginesScreenProps) {
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
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <Cpu className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Subprocesos del Sistema</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Motores de <span className="text-neon-cyan">Inteligencia</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            Siete motores de IA trabajan en paralelo para analizar cada aspecto 
            de tu infraestructura digital.
          </p>
        </div>

        {/* Central Hub */}
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative">
            <div className="w-20 h-20 rounded-full glass-panel-strong flex items-center justify-center pulse-glow">
              <div className="text-center">
                <Activity className="w-6 h-6 text-neon-cyan mx-auto animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 mt-1 block">CORE</span>
              </div>
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 w-3 h-3 bg-neon-cyan rounded-full shadow-neon" />
            </div>
          </div>
        </div>

        {/* Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                style={{ transitionDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredEngine(engine.id)}
                onMouseLeave={() => setHoveredEngine(null)}
              >
                <div 
                  className={`
                    relative glass-card rounded-xl p-5 h-full cursor-pointer overflow-hidden
                    transition-all duration-300
                    ${isHovered ? 'border-neon-cyan/50 scale-[1.02]' : ''}
                    ${isGeo ? 'border-neon-cyan/40 shadow-neon' : ''}
                    ${isActive ? 'border-neon-cyan/30' : ''}
                  `}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <div 
                      className={`
                        w-2 h-2 rounded-full
                        ${engine.status === 'active' ? 'bg-green-400 animate-pulse' : ''}
                        ${engine.status === 'processing' ? 'bg-neon-cyan animate-pulse' : ''}
                        ${engine.status === 'standby' ? 'bg-gray-500' : ''}
                      `}
                    />
                  </div>

                  {/* GEO Badge */}
                  {isGeo && (
                    <div className="absolute -top-1 -right-1">
                      <div className="bg-neon-cyan text-black text-[10px] font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg font-mono">
                        DESTACADO
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div 
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center mb-3
                      transition-all duration-300
                      ${isHovered || isGeo 
                        ? 'bg-neon-cyan/20 text-neon-cyan' 
                        : 'bg-white/5 text-white/50'}
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-sm mb-1">{engine.name}</h3>
                  <p className="text-white/50 text-xs mb-3 leading-relaxed">{engine.description}</p>

                  {/* Features List */}
                  <div className="space-y-1 mb-4">
                    {engine.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-neon-cyan" />
                        <span className="text-[11px] text-white/40">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Tier Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <button
                      onClick={() => onSelectService(engine.id, 'standard')}
                      className="
                        py-2 px-3 rounded-lg font-mono text-[10px] tracking-wider uppercase
                        border border-white/20 text-white/70
                        hover:border-neon-cyan/50 hover:text-neon-cyan hover:bg-neon-cyan/5
                        transition-all duration-200
                      "
                    >
                      Standard
                    </button>
                    <button
                      onClick={() => onSelectService(engine.id, 'premium')}
                      className="
                        py-2 px-3 rounded-lg font-mono text-[10px] tracking-wider uppercase
                        border border-neon-cyan/50 text-neon-cyan
                        hover:bg-neon-cyan hover:text-black
                        transition-all duration-200
                      "
                    >
                      Premium
                    </button>
                  </div>

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

        {/* Service Info */}
        <div className={`mt-8 grid md:grid-cols-2 gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Standard Info */}
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-white/70">S</span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Standard</h4>
                <p className="text-white/40 text-xs">Informe técnico en PDF</p>
              </div>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Informe técnico completo
              </li>
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Envío automático al correo
              </li>
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Resultados en 24-48h
              </li>
            </ul>
          </div>

          {/* Premium Info */}
          <div className="glass-card rounded-xl p-4 border-neon-cyan/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                <span className="text-xs font-bold text-neon-cyan">P</span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Premium</h4>
                <p className="text-white/40 text-xs">Informe + Roadmap + Prioridades</p>
              </div>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Todo lo de Standard
              </li>
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Roadmap de reparación detallado
              </li>
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Prioridad de acciones
              </li>
              <li className="flex items-center gap-2 text-xs text-white/50">
                <Check className="w-3 h-3 text-neon-cyan" />
                Consultoría incluida
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
