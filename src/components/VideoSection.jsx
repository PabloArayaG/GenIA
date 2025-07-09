import React, { useEffect } from 'react';
import '../css/videosection.css';

const VideoSection = () => {
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
    <section className="video-section">
      <div className="video-container">
        <div className="video-content">
          <h2 className="video-title">
            Crea, edita y mejora tus bots<br />con solo pedirlo en lenguaje natural
          </h2>
          
          <p className="video-description">
            Diseña experiencias en segundos con solo describirlas. Genia convierte tus ideas en bots funcionales, 
            iterables y escalables, sin necesidad de saber configurar flujos.
          </p>
          
          <div className="video-player">
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
          
          <div className="video-info">
            <h3 className="video-subtitle">Vídeo demostrativo de GenIA</h3>
            <p className="video-caption">Descubre cómo GenIA transforma la atención al cliente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 