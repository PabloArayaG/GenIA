import React, { useState } from 'react';
import '../css/transform3.css';
import creaBotOriginalImage from '../assets/crea-4.png';
import noCodeImage from '../assets/No-code2.png';
import cargarArchivoImage from '../assets/upload.png';
import instruyeImage from '../assets/instruye2.png';
import analizaImgImage from '../assets/imganalisis.png';

const Transform3 = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  const features = [
    {
      id: 0,
      title: "Crea un bot desde cero",
      description: "Diseña conversaciones completas con solo describir tus necesidades.",
      image: creaBotOriginalImage
    },
    {
      id: 1,
      title: "Edita sin código",
      description: "Modifica respuestas y flujos con lenguaje natural, sin programar.",
      image: noCodeImage
    },
    {
      id: 2,
      title: "Carga contenido automáticamente",
      description: "Alimenta tu bot con información desde URLs y documentos.",
      image: cargarArchivoImage
    },
    {
      id: 3,
      title: "Instruye con ejemplos",
      description: "Enseña comportamientos específicos con casos de uso reales.",
      image: instruyeImage
    },
    {
      id: 4,
      title: "Comprende imágenes",
      description: "Analiza y responde preguntas sobre imágenes que envían los usuarios.",
      image: analizaImgImage
    }
  ];

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
    // Toggle la expansión: si ya está expandido, se colapsa; si no, se expande
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <section className="transform3-section">
      <div className="transform3-container">
        <div className="transform3-content">
          <h2 className="transform3-title">
            5 formas en que <span className="highlight">GenIA</span><br />
            transforma tu operación
          </h2>
          
          <div className="transform3-layout">
            {/* Lista de features a la izquierda */}
            <div className="transform3-sidebar">
              <div className="transform3-feature-list">
                {features.map((feature, index) => (
                  <div key={feature.id} className="transform3-feature-wrapper">
                    <div
                      className={`transform3-feature-item ${selectedFeature === index ? 'active' : ''}`}
                      onClick={() => handleFeatureClick(index)}
                    >
                      <div className="transform3-feature-indicator"></div>
                      <h4 className="transform3-feature-title">{feature.title}</h4>
                    </div>
                    
                    {/* Descripción expandible */}
                    <div className={`transform3-feature-description ${expandedFeature === index ? 'expanded' : ''}`}>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen principal a la derecha - sin overlay */}
            <div className="transform3-main">
              <div className="transform3-image-container">
                <img
                  src={features[selectedFeature].image}
                  alt={features[selectedFeature].title}
                  className="transform3-main-image"
                  key={selectedFeature} // Force re-render for animation
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform3; 