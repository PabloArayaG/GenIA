import React, { useState, useEffect } from 'react';
import '../css/transform3.css';

// Lazy loading dinámico de imágenes
const useImageLazyLoad = () => {
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Cargar la primera imagen inmediatamente
  
  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = src;
    });
  };
  
  return { loadedImages, setLoadedImages, preloadImage };
};

const Transform3 = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const { loadedImages, setLoadedImages, preloadImage } = useImageLazyLoad();

  // Lazy import de imágenes
  const [images, setImages] = useState({});
  
  useEffect(() => {
    // Cargar imágenes dinámicamente
    const loadImages = async () => {
      const imageModules = await Promise.all([
        import('../assets/crea-4.png'),
        import('../assets/No-code2.png'),
        import('../assets/upload.png'),
        import('../assets/instruye2.png'),
        import('../assets/imganalisis.png')
      ]);
      
      const imageMap = {
        0: imageModules[0].default,
        1: imageModules[1].default,
        2: imageModules[2].default,
        3: imageModules[3].default,
        4: imageModules[4].default
      };
      
      setImages(imageMap);
    };
    
    loadImages();
  }, []);

  const features = [
    {
      id: 0,
      title: "Crea un bot desde cero",
      description: "Diseña conversaciones completas con solo describir tus necesidades."
    },
    {
      id: 1,
      title: "Edita sin código",
      description: "Modifica respuestas y flujos con lenguaje natural, sin programar."
    },
    {
      id: 2,
      title: "Carga contenido automáticamente",
      description: "Alimenta tu bot con información desde URLs y documentos."
    },
    {
      id: 3,
      title: "Instruye con ejemplos",
      description: "Enseña comportamientos específicos con casos de uso reales."
    },
    {
      id: 4,
      title: "Comprende imágenes",
      description: "Analiza y responde preguntas sobre imágenes que envían los usuarios."
    }
  ];

  const handleFeatureClick = async (index) => {
    if (selectedFeature !== index) {
      // Precargar imagen si no está cargada
      if (!loadedImages.has(index) && images[index]) {
        await preloadImage(images[index]);
        setLoadedImages(prev => new Set([...prev, index]));
      }
      
      setImageLoading(true);
      
      // Timing perfecto para máxima elegancia
      setTimeout(() => {
        setSelectedFeature(index);
        setImageLoading(false);
      }, 600);
    }
    
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

            {/* Imagen principal a la derecha - con lazy loading optimizado */}
            <div className="transform3-main">
              <div className="transform3-image-container">
                {images[selectedFeature] && (
                  <img
                    src={images[selectedFeature]}
                    alt={features[selectedFeature]?.title}
                    className={`transform3-main-image ${imageLoading ? 'loading' : 'loaded'}`}
                    loading={selectedFeature === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform3; 