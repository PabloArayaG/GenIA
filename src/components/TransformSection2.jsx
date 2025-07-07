import React, { useState, useEffect, useRef } from 'react';
import '../css/transformsection2.css';
import creaBotImage from '../assets/Crea-bot.png';
import creaBotOriginalImage from '../assets/creaunbot-original.png';
import creaBotHoverImage from '../assets/Crea-bot-hover.png';
import noCodeImage from '../assets/No-code.png';
import editNoCodeImage from '../assets/Edit-nocode.png';
import cargarArchivoImage from '../assets/cargar-archivo.png';
import instruyeImage from '../assets/instruye.png';
import analizaImgImage from '../assets/analiza-img.png';

const TransformSection2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isFourthModalOpen, setIsFourthModalOpen] = useState(false);
  const [isFifthModalOpen, setIsFifthModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);
  
  const openThirdModal = () => setIsThirdModalOpen(true);
  const closeThirdModal = () => setIsThirdModalOpen(false);
  
  const openFourthModal = () => setIsFourthModalOpen(true);
  const closeFourthModal = () => setIsFourthModalOpen(false);
  
  const openFifthModal = () => setIsFifthModalOpen(true);
  const closeFifthModal = () => setIsFifthModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`transform2-section ${isVisible ? 'visible' : ''}`}>
      <div className="transform2-container">
        <div className="transform2-content">
          <h2 className="transform2-title">
            5 formas en que <span className="highlight">GenIA</span><br />
            transforma tu operación
          </h2>
          
          {/* Primeras 2 cards */}
          <div className="transform2-cards-top">
            <div className="transform2-card transform2-card-1">
              <h3 className="transform2-card-title">Crea un bot desde cero</h3>
              <p className="transform2-card-description">Diseña conversaciones completas con solo describir tus necesidades.</p>
              <div className="transform2-card-visual">
                <img 
                  src={creaBotOriginalImage} 
                  alt="Interfaz de creación de bot" 
                  className="transform2-real-image clickable" 
                  onClick={openModal}
                />
              </div>
            </div>
            
            <div className="transform2-card transform2-card-2">
              <h3 className="transform2-card-title">Edita sin código</h3>
              <p className="transform2-card-description">Modifica respuestas y flujos con lenguaje natural, sin programar.</p>
              <div className="transform2-card-visual">
                <img 
                  src={noCodeImage} 
                  alt="Interfaz de edición sin código" 
                  className="transform2-real-image clickable"
                  onClick={openSecondModal}
                />
              </div>
            </div>
          </div>
          
          {/* Últimas 3 cards */}
          <div className="transform2-cards-bottom">
            <div className="transform2-card transform2-card-3">
              <h3 className="transform2-card-title">Carga contenido automáticamente</h3>
              <p className="transform2-card-description">Alimenta tu bot con información desde URLs y documentos.</p>
              <div className="transform2-card-visual">
                <img 
                  src={cargarArchivoImage} 
                  alt="Interfaz de carga automática de contenido" 
                  className="transform2-real-image clickable"
                  onClick={openThirdModal}
                />
              </div>
            </div>
            
            <div className="transform2-card transform2-card-4">
              <h3 className="transform2-card-title">Instruye con ejemplos</h3>
              <p className="transform2-card-description">Enseña comportamientos específicos con casos de uso reales.</p>
              <div className="transform2-card-visual">
                <img 
                  src={instruyeImage} 
                  alt="Interfaz de instrucción con ejemplos" 
                  className="transform2-real-image clickable"
                  onClick={openFourthModal}
                />
              </div>
            </div>
            
            <div className="transform2-card transform2-card-5">
              <h3 className="transform2-card-title">Comprende imágenes</h3>
              <p className="transform2-card-description">Analiza y responde preguntas sobre imágenes que envían los usuarios.</p>
              <div className="transform2-card-visual">
                <img 
                  src={analizaImgImage} 
                  alt="Interfaz de análisis de imágenes" 
                  className="transform2-real-image clickable"
                  onClick={openFifthModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primer Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img 
              src={creaBotHoverImage} 
              alt="Interfaz de creación de bot - Vista detallada" 
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* Segundo Modal */}
      {isSecondModalOpen && (
        <div className="modal-overlay" onClick={closeSecondModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeSecondModal}>×</button>
            <img 
              src={editNoCodeImage} 
              alt="Interfaz de edición sin código - Vista detallada" 
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* Tercer Modal */}
      {isThirdModalOpen && (
        <div className="modal-overlay" onClick={closeThirdModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeThirdModal}>×</button>
            <img 
              src={cargarArchivoImage} 
              alt="Interfaz de carga automática de contenido - Vista detallada" 
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* Cuarto Modal */}
      {isFourthModalOpen && (
        <div className="modal-overlay" onClick={closeFourthModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeFourthModal}>×</button>
            <img 
              src={instruyeImage} 
              alt="Interfaz de instrucción con ejemplos - Vista detallada" 
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* Quinto Modal */}
      {isFifthModalOpen && (
        <div className="modal-overlay" onClick={closeFifthModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeFifthModal}>×</button>
            <img 
              src={analizaImgImage} 
              alt="Interfaz de análisis de imágenes - Vista detallada" 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TransformSection2; 