import React, { useEffect } from 'react';
import '../css/herosection.css';

function HeroSection() {
  
  useEffect(() => {
    // Cargar script de Wistia
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.net/player.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Limpiar script si existe
      const existingScript = document.querySelector('script[src="https://fast.wistia.net/player.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

return (
<div className="hero-section">
    <div className="content-container">
    <div className="subtitle">Chatbots y Agentes IA con</div>

    <div className="genia-button">
        <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93244b6cbef22363c386a69aaad3c2daab4f77ed?placeholderIfAbsent=true"
        alt="GenIA AI Icon"
        className="icon"
        loading="eager"
        decoding="async"
        />
        <div className="button-container">
        <div className="button-text">GenIA</div>
        </div>
    </div>

    <h1 className="main-title">
        Crea experiencias conversacionales en minutos, no semanas
    </h1>

    <div className="description">
        Genia impulsa tu CX con un asistente inteligente que genera flujos
        conversacionales, automatiza iteraciones y reduce la dependencia
        técnica en todos tus canales.
    </div>

    <a href="https://adereso.ai/contacto/" className="cta-button" target="_blank" rel="noopener noreferrer">
        <div>Agendar una demo</div>
    </a>

    <div className="hero-features">
        <div className="hero-feature">
            <div className="feature-icon"></div>
            <div className="feature-text">Elimina dependencia técnica</div>
        </div>
        <div className="hero-feature">
            <div className="feature-icon"></div>
            <div className="feature-text">Reduce tiempos de desarrollo</div>
        </div>
        <div className="hero-feature">
            <div className="feature-icon"></div>
            <div className="feature-text">Iteración autónoma</div>
        </div>
    </div>

    <div className="product-image-container">
        <div className="wistia_responsive_padding" style={{padding:'50.0% 0 0 0', position:'relative'}}>
            <div className="wistia_responsive_wrapper" style={{height:'100%', left:0, position:'absolute', top:0, width:'100%'}}>
                <iframe 
                src="https://fast.wistia.net/embed/iframe/s17qadp6i1?web_component=true&seo=true" 
                title="VideoAderesoAI-genia-CXDay" 
                allow="autoplay; fullscreen" 
                allowTransparency="true" 
                frameBorder="0" 
                scrolling="no" 
                className="wistia_embed" 
                name="wistia_embed" 
                width="100%" 
                height="100%"
                />
            </div>
        </div>
    </div>
    </div>
</div>
);
}

export default HeroSection;
