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
          
          {/* CTA Button igual al hero */}
          <button className="final-cta-button" onClick={() => {
              const formulario = document.getElementById('formulario');
              console.log('Final CTA button clicked, formulario element:', formulario);
              if (formulario) {
                formulario.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center'
                });
              } else {
                console.error('Formulario element not found from Final CTA');
              }
          }}>
            <div>Quiero conocer GenIA</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Finalcta;
