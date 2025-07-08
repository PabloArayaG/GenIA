import React from 'react';
import '../css/finalcta.css';

const Finalcta = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-content">

          
          {/* Título principal */}
          <h2 className="final-cta-title">
            Estás a un paso de la<br />
            autonomía total
          </h2>
          
          {/* Descripción */}
          <p className="final-cta-description">
            Con Genia, diseñas experiencias a tu ritmo, sin tickets de soporte ni semanas de espera.
          </p>
          
          {/* Texto de potencia */}
          <p className="final-cta-power">
            <strong>Potencia tu CX con inteligencia, velocidad y control.</strong>
          </p>
          
          {/* Estadísticas */}
          <div className="final-cta-stats">
            <div className="final-cta-stat-item">
              <div className="final-cta-stat-value">24/7</div>
              <div className="final-cta-stat-label">Disponibilidad</div>
            </div>
            <div className="final-cta-stat-item">
              <div className="final-cta-stat-value">+98%</div>
              <div className="final-cta-stat-label">Satisfacción</div>
            </div>
            <div className="final-cta-stat-item">
              <div className="final-cta-stat-value">100x</div>
              <div className="final-cta-stat-label">Más rápido</div>
            </div>
          </div>
          
          {/* CTA Button igual al hero */}
          <a href="https://adereso.ai/contacto/" className="final-cta-button" target="_blank" rel="noopener noreferrer">
            <div>Agendar una demo</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Finalcta;
