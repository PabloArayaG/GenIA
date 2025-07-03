import React from 'react';
import '../css/problemsection.css';

const ProblemSection = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-content">
          <h2 className="problem-title">
            Tu Servicio al Cliente no escala solo de humanos
          </h2>
          
          <p className="problem-description">
            Mientras más soporte necesitas, más costoso, lento y dependiente es tu negocio. Iterar bots debería 
            ser tan simple como hablarle a una IA.
          </p>
          
          <div className="problem-cards">
            <div className="problem-card">
              <div className="problem-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="problem-card-title">Tiempo perdido</h3>
              <p className="problem-card-description">
                Esperando soporte técnico para cada cambio
              </p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="problem-card-title">Cambios costosos</h3>
              <p className="problem-card-description">
                Flujos lentos y dependientes de desarrollo
              </p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M17 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M21 14h-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="problem-card-title">Clientes frustrados</h3>
              <p className="problem-card-description">
                Experiencias poco ágiles y desactualizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 