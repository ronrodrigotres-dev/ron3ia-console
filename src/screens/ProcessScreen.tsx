import { useState, useEffect, useRef } from 'react';
import { Globe, Scan, Network, Brain, FileText, ArrowRight } from 'lucide-react';

interface FlowStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const flowSteps: FlowStep[] = [
  {
    number: '01',
    title: 'Ingresar dominio',
    description: 'Introduce la URL de tu sitio para iniciar el análisis',
    icon: Globe,
  },
  {
    number: '02',
    title: 'Escaneo técnico automático',
    description: 'RON3IA escanea todos los aspectos técnicos de tu infraestructura',
    icon: Scan,
  },
  {
    number: '03',
    title: 'Análisis de nodos digitales',
    description: 'Identificación y mapeo de todos los puntos de contacto digital',
    icon: Network,
  },
  {
    number: '04',
    title: 'Procesamiento por motores de IA',
    description: 'Los 7 motores de inteligencia analizan los datos en paralelo',
    icon: Brain,
  },
  {
    number: '05',
    title: 'Generación de diagnóstico estratégico',
    description: 'Recibe un informe completo con acciones priorizadas',
    icon: FileText,
  },
];

export function ProcessScreen() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">Flujo Operativo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Proceso del <span className="text-neon-cyan">Sistema</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            RON3IA ejecuta un flujo de diagnóstico autónomo en 5 etapas,
            procesando millones de datos en segundos.
          </p>
        </div>

        {/* Flow Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-500"
              style={{ width: `${((activeStep + 1) / flowSteps.length) * 100}%` }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.number}
                  className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Card */}
                  <div 
                    className={`
                      relative glass-card rounded-xl p-5 h-full cursor-pointer
                      transition-all duration-300
                      ${isActive ? 'border-neon-cyan/50 shadow-neon scale-105' : ''}
                      ${isCompleted ? 'border-neon-cyan/30' : ''}
                    `}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-2 -left-2">
                      <div 
                        className={`
                          w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold
                          transition-all duration-300
                          ${isActive || isCompleted 
                            ? 'bg-neon-cyan text-black' 
                            : 'bg-white/10 text-white/50'}
                        `}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-3 mb-3">
                      <div 
                        className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          transition-all duration-300
                          ${isActive 
                            ? 'bg-neon-cyan/20 text-neon-cyan' 
                            : 'bg-white/5 text-white/40'}
                        `}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-semibold mb-1 text-sm">{step.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>

                    {/* Progress Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan/20 rounded-b-xl overflow-hidden">
                        <div className="h-full bg-neon-cyan animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Arrow (hidden on last item and mobile) */}
                  {index < flowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isCompleted ? 'text-neon-cyan' : 'text-white/20'
                        }`} 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details */}
        <div className={`mt-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-panel-strong rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">
                Etapa Activa: {flowSteps[activeStep].number}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {(() => {
                const ActiveIcon = flowSteps[activeStep].icon;
                return (
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6 text-neon-cyan" />
                  </div>
                );
              })()}
              <div>
                <h3 className="text-lg font-semibold text-white mb-0.5">
                  {flowSteps[activeStep].title}
                </h3>
                <p className="text-white/60 text-sm">{flowSteps[activeStep].description}</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs">
                  <span className="animate-pulse">PROCESANDO</span>
                  <span className="flex gap-0.5">
                    <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
