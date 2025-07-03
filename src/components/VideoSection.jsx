import React, { useState, useEffect } from 'react';
import '../css/videosection.css';

const VideoSection = () => {
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
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

    return () => observer.disconnect();
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
            <div className="video-placeholder">
              <button className="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </button>
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