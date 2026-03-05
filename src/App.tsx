import React, { useState, useCallback } from 'react';
import { analyzeDomain } from './lib/api';

// Configuración de Motores de Inteligencia
const ENGINES = [
  { id: 'intel', name: 'Intelligence Engine', desc: 'Vigilancia digital y benchmark.' },
  { id: 'conv', name: 'Conversion Engine', desc: 'Análisis de UX y conversión.' },
  { id: 'seo', name: 'SEO Engine', desc: 'Auditoría técnica y visibilidad.' },
  { id: 'growth', name: 'Growth Engine', desc: 'Oportunidades de escalado.' },
  { id: 'comm', name: 'Commerce Engine', desc: 'Optimización de transacciones.' },
  { id: 'exp', name: 'Expansion Engine', desc: 'Análisis predictivo global.' },
  { id: 'geo', name: 'GEO Engine', desc: 'Generative Engine Optimization.' }
];

/* Estilo para el Logo Principal con Brillo Extremo */
const logoStyle = {
  fontSize: '4rem',
  margin: '10px 0',
  letterSpacing: '10px',
  color: '#fff',
  textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(0,255,255,0.3)',
  fontWeight: 'bold'
};

/* Estilo para Títulos de Sección Blancos con Luz */
const sectionHeaderStyle = {
  margin: '60px 0 20px',
  letterSpacing: '2px',
  color: '#fff',
  textShadow: '0 0 8px rgba(255,255,255,0.6)',
  textTransform: 'uppercase' as 'uppercase'
};

/* Estilo para el Veredicto Final (Neon Verde) */
const verdictHeaderStyle = {
  color: '#0f0',
  textShadow: '0 0 15px rgba(0,255,0,0.7), 0 0 5px rgba(255,255,255,0.5)',
  fontSize: '2rem'
}; 

 /* Estilo para el Logo RON3IA: Luz de Cristal */
const logoStyle = {
  fontSize: '4.5rem',
  margin: '10px 0',
  letterSpacing: '18px',
  color: '#fff',
  fontWeight: '200', /* Peso fino para mayor elegancia */
  textShadow: '0 0 15px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.1)',
  transition: 'text-shadow 0.5s ease-in-out'
};

/* Estilo para Títulos: Blancos Puros y Delgados */
const sectionHeaderStyle = {
  margin: '60px 0 25px',
  letterSpacing: '5px',
  color: '#fff',
  fontSize: '0.8rem',
  fontWeight: '300',
  opacity: '0.9',
  textShadow: '0 0 10px rgba(255,255,255,0.2)',
  textTransform: 'uppercase' as 'uppercase'
};

/* Estilo para el Veredicto: Verde Esmeralda Sutil */
const verdictHeaderStyle = {
  color: '#0f0',
  fontSize: '1.8rem',
  fontWeight: '300',
  letterSpacing: '3px',
  textShadow: '0 0 12px rgba(0,255,0,0.2)',
  borderBottom: '1px solid rgba(0,255,0,0.3)',
  display: 'inline-block',
  paddingBottom: '10px'
}; 

 export default function App() {
  const [domain, setDomain] = useState('COPEC.CL');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  const handleDiagnostic = async () => {
    if (!domain) return;
    
    setIsAnalyzing(true);
    setResult(null);
    setProgress(0);

    // Simulación de progreso de carga de sistemas
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 5));
    }, 150);

    try {
      const data = await analyzeDomain(domain);
      if (data) {
        setResult(data);
      }
    } catch (err) {
      console.error("DIAGNOSTIC_FAILURE", err);
    } finally {
      clearInterval(timer);
      setProgress(100);
      setIsAnalyzing(false);
    }
  };

  return (
    <div style={rootStyle}>
      {/* SECCIÓN 1: IDENTIDAD */}
      <header style={headerStyle}>
        <div style={{ color: '#00ffff', fontSize: '0.8rem' }}>● AUTONOMOUS DIGITAL INTELLIGENCE</div>
        <h1 style={logoStyle}>RON3IA</h1>
        <p style={{ color: '#666', maxWidth: '400px' }}>
          Diagnóstico técnico autónomo para infraestructura digital.
        </p>
      </header>

      {/* SECCIÓN 2: PROTOCOLO DE ACTIVACIÓN */}
      <section style={protocolBox}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
          <div style={{ flexGrow: 1 }}>
            <label style={labelStyle}>URL DEL CLIENTE / INFRAESTRUCTURA</label>
            <input 
              style={inputStyle} 
              value={domain} 
              onChange={(e) => setDomain(e.target.value.toUpperCase())}
            />
          </div>
          <button 
            onClick={handleDiagnostic} 
            disabled={isAnalyzing}
            style={buttonStyle(isAnalyzing)}
          >
            {isAnalyzing ? 'PROCESANDO...' : '> EJECUTAR DIAGNÓSTICO'}
          </button>
        </div>
      </section>

      {/* SECCIÓN 3: MOTORES DE INTELIGENCIA */}
      <h3 style={sectionHeaderStyle}>MOTORES DE INTELIGENCIA</h3>
      <div style={engineGrid}>
        {ENGINES.map(engine => (
          <div key={engine.id} style={engineCard(isAnalyzing)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.6rem' }}>{isAnalyzing ? 'SCANNING' : 'STANDBY'}</span>
              <div style={statusDot(isAnalyzing)}></div>
            </div>
            <h4 style={{ margin: '10px 0 5px' }}>{engine.name}</h4>
            <p style={{ fontSize: '0.7rem', color: '#555' }}>{engine.desc}</p>
          </div>
        ))}
      </div>

      {/* RESULTADO FINAL (ELEGANCIA BRUTALISTA) */}
      {result && (
        <section style={verdictSection}>
          <h2 style={{ color: '#0f0' }}>✓ DIAGNÓSTICO CONCLUIDO</h2>
          <div style={{ fontSize: '1.5rem', margin: '20px 0' }}>{result.message}</div>
          <div style={statsContainer}>
            <div><small>NODES</small><br/>4270</div>
            <div><small>ERRORS</small><br/><span style={{color:'#ff0055'}}>31</span></div>
            <div><small>SCORE</small><br/><span style={{color:'#0f0'}}>95</span></div>
          </div>
        </section>
      )}

      <footer style={footerStyle}>
        SANTIAGO, CHILE | {new Date().getFullYear()} | v2.4.1
      </footer>
    </div>
  );
}

// --- SYSTEM STYLES (WAR ROOM) ---
const rootStyle = { backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '60px', fontFamily: 'monospace' };

const headerStyle = { marginBottom: '60px' };
const protocolBox = { borderLeft: '2px solid #333', paddingLeft: '30px', maxWidth: '800px' };
const labelStyle = { display: 'block', fontSize: '0.7rem', color: '#888', marginBottom: '10px' };
const inputStyle = { backgroundColor: 'transparent', border: '1px solid #333', color: '#00ffff', padding: '15px', width: '100%', outline: 'none', fontSize: '1.2rem' };
const engineGrid = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' };

const buttonStyle = (active: boolean) => ({
  backgroundColor: active ? '#111' : '#fff',
  color: active ? '#444' : '#000',
  border: 'none',
  padding: '18px 30px',
  fontWeight: 'bold',
  cursor: active ? 'not-allowed' : 'pointer',
  textTransform: 'uppercase' as 'uppercase'
});

const engineCard = (active: boolean) => ({
  border: '1px solid #222',
  padding: '20px',
  background: active ? 'linear-gradient(180deg, #050505 0%, #001a1a 100%)' : '#050505',
  transition: 'all 0.5s ease'
});

const statusDot = (active: boolean) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: active ? '#00ffff' : '#333',
  boxShadow: active ? '0 0 10px #00ffff' : 'none'
});

const verdictSection = {   marginTop: '80px',   border: '1px solid rgba(0, 255, 0, 0.2)',   background: 'linear-gradient(180deg, rgba(0, 255, 0, 0.02) 0%, transparent 100%)',   padding: '60px',   textAlign: 'center' as 'center',   boxShadow: '0 0 40px rgba(0, 255, 0, 0.03)'
const statsContainer = { display: 'flex', justifyContent: 'space-around', marginTop: '30px', borderTop: '1px solid #222', paddingTop: '20px' };
const footerStyle = { marginTop: '100px', textAlign: 'center' as 'center', color: '#222', fontSize: '0.7rem' };



