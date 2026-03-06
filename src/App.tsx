import React, { useState, useCallback } from 'react';

// --- Configuración de Infraestructura ---
const API_BASE_URL = "https://ron3ia-api-8080.app"; // Reemplazar con tu URL real de Cloud Run

// --- Estilos de Ingeniería (Elegant Glow) ---
const glassContainer = {
  minHeight: '100vh',
  backgroundColor: '#050505',
  color: '#e0e0e0',
  fontFamily: 'Inter, system-ui, sans-serif',
  padding: '40px'
};

const verdictSection = {
  marginTop: '60px',
  border: '1px solid rgba(0, 255, 0, 0.15)',
  background: 'linear-gradient(180deg, rgba(0, 255, 0, 0.03) 0%, transparent 100%)',
  padding: '50px',
  borderRadius: '12px',
  textAlign: 'center' as const,
  boxShadow: '0 0 50px rgba(0, 255, 0, 0.05)'
};

const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  marginTop: '40px',
  borderTop: '1px solid #1a1a1a',
  paddingTop: '30px'
};

const scoreBadge = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#00ff00',
  textShadow: '0 0 20px rgba(0, 255, 0, 0.4)'
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const analyzeDomain = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/analyze-site`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: "ron3ia.cl" })
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Falla en el nodo Santiago:", error);
      setData({ report: { dhi_score: "ERR", analysis: "Revisar Conexión API" } });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div style={glassContainer}>
      <header style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#666' }}>RON3IA ENTERPRISE v28.0</h1>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 300 }}>Consola de Inteligencia Digital</h2>
      </header>

      <section style={verdictSection}>
        <div style={{ color: '#00ff00', marginBottom: '10px', fontSize: '0.9rem' }}>ESTADO: {loading ? 'PROCESANDO...' : 'SANTIAGO_NODE_ACTIVE'}</div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Análisis de Eficiencia Operativa</h3>
        
        {data ? (
          <div>
            <div style={scoreBadge}>{data.report?.dhi_score}</div>
            <p style={{ color: '#888', marginTop: '10px' }}>{data.report?.analysis}</p>
          </div>
        ) : (
          <button 
            onClick={analyzeDomain}
            style={{ padding: '12px 30px', background: 'transparent', border: '1px solid #333', color: '#fff', cursor: 'pointer' }}
          >
            INICIAR ESCANEO DE DOMINIO
          </button>
        )}
      </section>

      <div style={statsGrid}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#444', fontSize: '0.7rem' }}>VEREDICTO</h4>
          <p style={{ fontSize: '1.2rem' }}>{data ? 'Generado' : 'Pendiente'}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#444', fontSize: '0.7rem' }}>NODO</h4>
          <p style={{ fontSize: '1.2rem' }}>Santiago-V28</p>
        </div>
      </div>

      <footer style={{ marginTop: '100px', textAlign: 'center', fontSize: '0.6rem', color: '#333' }}>
        &copy; 2026 RON3IA - PROYECTO DE ALTA GAMA
      </footer>
    </div>
  );
};

export default App;
