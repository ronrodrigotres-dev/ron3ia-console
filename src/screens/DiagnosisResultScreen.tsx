import { useState, useEffect } from 'react';
import { ScanLine } from '@/components/effects';
import { Check, AlertTriangle, X, ArrowRight, Mail, Download } from 'lucide-react';

interface DiagnosisResultScreenProps {
  domain: string;
  email: string;
  score: number;
  onContinue: () => void;
}

interface Issue {
  type: 'critical' | 'warning' | 'ok';
  category: string;
  message: string;
}

export function DiagnosisResultScreen({ domain, email, score, onContinue }: DiagnosisResultScreenProps) {
  const isLoaded = true;
  const [showDetails, setShowDetails] = useState(false);

  // Generate random issues based on score
  const generateIssues = (score: number): Issue[] => {
    const issues: Issue[] = [];
    
    if (score < 60) {
      issues.push(
        { type: 'critical', category: 'SEO', message: 'Meta tags incompletos detectados' },
        { type: 'critical', category: 'Performance', message: 'Tiempo de carga superior a 3s' },
        { type: 'warning', category: 'Seguridad', message: 'Certificado SSL próximo a expirar' },
        { type: 'warning', category: 'Mobile', message: 'Responsive design con fallos' },
      );
    } else if (score < 80) {
      issues.push(
        { type: 'warning', category: 'SEO', message: 'Estructura de URLs puede mejorar' },
        { type: 'warning', category: 'Performance', message: 'Optimización de imágenes recomendada' },
        { type: 'ok', category: 'Seguridad', message: 'Certificado SSL válido' },
        { type: 'warning', category: 'Content', message: 'Densidad de palabras clave baja' },
      );
    } else {
      issues.push(
        { type: 'ok', category: 'SEO', message: 'Estructura SEO optimizada' },
        { type: 'ok', category: 'Performance', message: 'Tiempo de carga excelente' },
        { type: 'ok', category: 'Seguridad', message: 'Configuración de seguridad correcta' },
        { type: 'warning', category: 'Growth', message: 'Oportunidades de expansión detectadas' },
      );
    }
    return issues;
  };

  const issues = generateIssues(score);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    const timer = setTimeout(() => setShowDetails(true), 500);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  const getScoreColor = (s: number) => {
    if (s >= 80) return 'text-green-400';
    if (s >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (s: number) => {
    if (s >= 80) return 'bg-green-400';
    if (s >= 60) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <ScanLine />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[80vh]">
          
          {/* LEFT COLUMN - Results */}
          <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono text-sm tracking-[0.2em] uppercase">
                  Análisis Completado
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                <span className="text-neon-cyan">RON3IA</span> SCORE
              </h2>
              
              <p className="text-white/60">
                Diagnóstico técnico para: <span className="text-neon-cyan font-mono">{domain}</span>
              </p>
            </div>

            {/* Score Display */}
            <div className="glass-panel-strong rounded-xl p-8 text-center">
              <div className="relative inline-block">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(score / 100) * 440} 440`}
                    className={`${getScoreColor(score)} transition-all duration-1000`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <div className={`text-5xl font-bold ${getScoreColor(score)}`}>{score}</div>
                    <div className="text-xs text-white/50 font-mono">/100</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono ${getScoreBg(score)} bg-opacity-20 text-${getScoreColor(score).replace('text-', '')}`}>
                  {score >= 80 ? 'EXCELENTE' : score >= 60 ? 'MEJORABLE' : 'CRÍTICO'}
                </span>
              </div>
            </div>

            {/* Email Confirmation */}
            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Resumen enviado a:</p>
                <p className="text-neon-cyan font-mono text-sm">{email}</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onContinue}
              className="group relative w-full py-4 font-mono text-sm tracking-wider uppercase overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/50 rounded-lg transition-all duration-300 group-hover:border-neon-cyan group-hover:shadow-neon" />
              <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-3 text-white group-hover:text-neon-cyan transition-colors">
                Ver Informes Completos
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <p className="text-center text-xs text-white/40">
              Este diagnóstico muestra el 10% del informe completo
            </p>
          </div>

          {/* RIGHT COLUMN - Details */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Issues List */}
            <div className="glass-panel-strong rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-neon-cyan">{'>'}</span> Hallazgos Técnicos
              </h3>
              
              <div className="space-y-3">
                {showDetails && issues.map((issue, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-lg p-3 flex items-start gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      issue.type === 'critical' ? 'bg-red-500/20' :
                      issue.type === 'warning' ? 'bg-yellow-500/20' :
                      'bg-green-500/20'
                    }`}>
                      {issue.type === 'critical' ? <X className="w-3 h-3 text-red-400" /> :
                       issue.type === 'warning' ? <AlertTriangle className="w-3 h-3 text-yellow-400" /> :
                       <Check className="w-3 h-3 text-green-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-neon-cyan">[{issue.category}]</span>
                        <span className={`text-xs uppercase ${
                          issue.type === 'critical' ? 'text-red-400' :
                          issue.type === 'warning' ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>
                          {issue.type}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mt-1">{issue.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-neon-cyan">{Math.floor(score * 0.8)}</div>
                <div className="text-[10px] text-white/50 font-mono uppercase mt-1">SEO Score</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-neon-cyan">{Math.floor(score * 0.9)}</div>
                <div className="text-[10px] text-white/50 font-mono uppercase mt-1">Performance</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-neon-cyan">{Math.floor(score * 0.85)}</div>
                <div className="text-[10px] text-white/50 font-mono uppercase mt-1">Seguridad</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-neon-cyan">A</div>
                <div className="text-[10px] text-white/50 font-mono uppercase mt-1">Calificación</div>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="glass-card rounded-xl p-4 border-neon-cyan/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">¿Quieres el informe completo?</p>
                  <p className="text-white/50 text-xs">Accede al 100% del análisis</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/50 rounded-lg text-neon-cyan text-sm font-mono hover:bg-neon-cyan/20 transition-colors">
                  <Download className="w-4 h-4" />
                  Upgrade
                </button>
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
