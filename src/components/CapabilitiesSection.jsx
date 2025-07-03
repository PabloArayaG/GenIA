import React from 'react';
import '../css/capabilitiessection.css';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Crear agentes IA desde cero",
      description: "Diseña y construye agentes inteligentes personalizados sin necesidad de conocimientos técnicos"
    },
    {
      title: "Iterar flujos con lenguaje natural",
      description: "Modifica y optimiza tus flujos conversacionales usando comandos en lenguaje natural"
    },
    {
      title: "Instruir con ejemplos y conversaciones reales",
      description: "Entrena tu bot con casos reales y ejemplos específicos para mejorar su precisión"
    },
    {
      title: "Aumentar bots con capacidades visuales",
      description: "Integra OCR y procesamiento de imágenes para análisis visual avanzado"
    },
    {
      title: "Scrappear sitios para poblar conocimiento",
      description: "Extrae información automáticamente de sitios web para enriquecer la base de conocimiento"
    },
    {
      title: "Corregir errores y validar flujos",
      description: "Identifica y corrige automáticamente errores en tus flujos conversacionales"
    }
  ];

  return (
    <section className="capabilities-section">
      <div className="capabilities-container">
        <div className="capabilities-content">
          <h2 className="capabilities-title">
            Todo lo que puedes hacer con <span className="highlight">GenIA</span>
          </h2>
          
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <div className="capability-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="capability-content">
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection; 