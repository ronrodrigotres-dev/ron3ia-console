import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">RON</span>
                <span className="text-xl font-bold text-neon-cyan">3</span>
                <span className="text-xl font-bold text-white">IA</span>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-sm mb-4">
              Sistema autónomo de diagnóstico digital impulsado por inteligencia artificial. 
              Detecta fallas críticas y revela oportunidades de crecimiento.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Productos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">Strategic Report</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">Total FIX Pack</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">GEO Authority</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">Full Intelligence Audit</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">Documentación</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">API</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-neon-cyan transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-mono">
            © 2024 RON3IA. Autonomous Digital Intelligence System.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacidad</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Términos</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
              Todos los sistemas operativos
            </span>
            <span className="text-[10px] font-mono text-neon-cyan">v2.4.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
