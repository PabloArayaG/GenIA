import React from 'react';
import '../css/problemsection.css';
import dineroIcon from '../assets/dinero.png';
import sadIcon from '../assets/sad.png';

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
                <img src={dineroIcon} alt="Cambios costosos" width="32" height="32" />
              </div>
              <h3 className="problem-card-title">Cambios costosos</h3>
              <p className="problem-card-description">
                Flujos lentos y dependientes de desarrollo
              </p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon">
                <img src={sadIcon} alt="Clientes frustrados" width="32" height="32" />
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