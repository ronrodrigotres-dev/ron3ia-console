import React, { useState } from 'react';
import { analyzeDomain } from '../lib/api';

export const DomainAnalyzer: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const data = await analyzeDomain(domain);
    setResult(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Analizador de Dominios</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={domain} 
          onChange={(e) => setDomain(e.target.value)} 
          placeholder="ejemplo.cl"
          required 
          style={{ padding: '8px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
          {loading ? 'Procesando...' : 'Enviar al Cerebro'}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '20px', textAlign: 'left', backgroundColor: '#f4f4f4', padding: '10px' }}>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Mensaje:</strong> {result.message}</p>
        </div>
      )}
    </div>
  );
};
