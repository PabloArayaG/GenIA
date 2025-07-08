import React, { useState, useEffect } from 'react';
import '../css/videosection.css';

const VideoSection = () => {
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Cargar script de Wistia
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.net/player.js';
    script.async = true;
    document.head.appendChild(script);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    const titleElement = document.querySelector('.video-title');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      observer.disconnect();
      // Limpiar script si existe
      const existingScript = document.querySelector('script[src="https://fast.wistia.net/player.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const duration = 800; // 0.8 segundos - más rápido
    const totalSteps = 30; // menos pasos para más fluidez
    let step = 0;

    const timer = setInterval(() => {
      step++;
      
      // Función easing más suave - menos ralentización al final
      const progress = step / totalSteps;
      const easeOut = 1 - Math.pow(1 - progress, 2); // cambié de 3 a 2 para menos ralentización
      const currentValue = Math.floor(easeOut * 100);
      
      setCounter(currentValue);
      
      // Trigger pulse animation
      const counterElement = document.querySelector('.counter');
      if (counterElement) {
        counterElement.style.animation = 'none';
        void counterElement.offsetHeight; // Force reflow
        counterElement.style.animation = 'counterPulse 0.15s ease';
      }
      
      if (step >= totalSteps) {
        setCounter(100);
        clearInterval(timer);
      }
    }, duration / totalSteps);
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-content">
          <h2 className="video-title">
            Bots creados <span className="highlight"><span className="counter">{counter}</span>x más rápido.</span><br />Sin intervención técnica.
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