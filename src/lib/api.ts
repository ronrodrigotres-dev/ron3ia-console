/**
 * Servicio de comunicación con la API central ron3ia-api
 */
const API_URL = import.meta.env.VITE_API_URL;

interface AnalyzeResponse {
  status: string;
  analyzing_domain: string;
  source: string;
  message: string;
}

export const analyzeDomain = async (domain: string): Promise<AnalyzeResponse | null> => {
  try {
    const response = await fetch(`${API_URL}/analyze-site`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domain }),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[API Error] Falló la conexión:', error);
    return null;
  }
};
