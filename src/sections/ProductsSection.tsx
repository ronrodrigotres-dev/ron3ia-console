import { useState, useEffect, useRef } from 'react';
import { 
  FileSearch, 
  Wrench, 
  Sparkles, 
  Globe, 
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  badge?: string;
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 'strategic',
    name: 'Strategic Report',
    description: 'Diagnóstico digital inicial que identifica errores críticos y oportunidades de mejora.',
    icon: FileSearch,
    features: [
      'Análisis de 50+ métricas',
      'Identificación de errores críticos',
      'Roadmap de prioridades',
      'Entrega en 24-48h',
    ],
  },
  {
    id: 'fixpack',
    name: 'Total FIX Pack',
    description: 'Auditoría técnica profunda que detecta fallas estructurales y entrega soluciones accionables.',
    icon: Wrench,
    features: [
      'Auditoría técnica completa',
      'Detección de fallas estructurales',
      'Soluciones priorizadas',
      'Implementación guiada',
    ],
    popular: true,
  },
  {
    id: 'geo',
    name: 'GEO Authority Report',
    description: 'Optimización para motores generativos de inteligencia artificial.',
    icon: Sparkles,
    features: [
      'Optimización para LLMs',
      'Estructuración de contenido',
      'Visibilidad en IA',
      'Monitorización continua',
    ],
    badge: 'NUEVO',
  },
  {
    id: 'expansion',
    name: 'Market Expansion Intelligence',
    description: 'Análisis predictivo para expansión digital.',
    icon: Globe,
    features: [
      'Análisis de mercado',
      'Identificación de oportunidades',
      'Predicción de tendencias',
      'Estrategia de expansión',
    ],
  },
  {
    id: 'fullaudit',
    name: 'Full Intelligence Audit',
    description: 'Auditoría estratégica completa sobre infraestructura digital.',
    icon: ShieldCheck,
    features: [
      'Auditoría 360°',
      'Todos los motores de IA',
      'Informe ejecutivo',
      'Consultoría incluida',
    ],
    badge: 'COMPLETO',
  },
];

export function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
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

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Productos del Sistema</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Soluciones de <span className="text-neon-cyan">Inteligencia</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Cada producto está diseñado para resolver necesidades específicas 
            de tu infraestructura digital.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isHovered = hoveredProduct === product.id;

            return (
              <div
                key={product.id}
                className={`
                  relative group transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${product.popular ? 'md:row-span-1' : ''}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div 
                  className={`
                    relative glass-card rounded-xl p-6 h-full cursor-pointer
                    transition-all duration-300 flex flex-col
                    ${isHovered ? 'border-neon-cyan/50 scale-[1.02]' : ''}
                    ${product.popular ? 'border-neon-cyan/30' : ''}
                  `}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute -top-1 right-4">
                      <div className={`
                        text-[10px] font-bold px-3 py-1 rounded-b-lg font-mono
                        ${product.badge === 'NUEVO' ? 'bg-neon-cyan text-black' : ''}
                        ${product.badge === 'COMPLETO' ? 'bg-neon-blue text-white' : ''}
                      `}>
                        {product.badge}
                      </div>
                    </div>
                  )}

                  {/* Popular Indicator */}
                  {product.popular && (
                    <div className="absolute -top-1 left-4">
                      <div className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black text-[10px] font-bold px-3 py-1 rounded-b-lg font-mono">
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div 
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-4
                      transition-all duration-300
                      ${isHovered || product.popular
                        ? 'bg-neon-cyan/20 text-neon-cyan' 
                        : 'bg-white/5 text-white/50'}
                    `}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed flex-grow">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded bg-neon-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-neon-cyan" />
                        </div>
                        <span className="text-xs text-white/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`
                      w-full py-3 px-4 rounded-lg font-mono text-sm
                      flex items-center justify-center gap-2
                      transition-all duration-300
                      ${isHovered 
                        ? 'bg-neon-cyan text-black' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10'}
                    `}
                  >
                    <span>Solicitar Informe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Hover Glow */}
                  <div 
                    className={`
                      absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/50 mb-4">¿Necesitas una solución personalizada?</p>
          <button className="inline-flex items-center gap-2 text-neon-cyan font-mono text-sm hover:underline">
            <span>Contactar con un especialista</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
