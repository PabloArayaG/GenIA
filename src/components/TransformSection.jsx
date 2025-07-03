import React from 'react';
import '../css/transformsection.css';

const TransformSection = () => {
  return (
    <section className="transform-section">
      <div className="transform-container">
        <div className="transform-content">
          <h2 className="transform-title">
            5 formas en que <span className="highlight">GenIA transforma</span> tu operación
          </h2>
          
          <div className="transform-cards">
            <div className="transform-card">
              <div className="transform-card-header">
                <div className="transform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="rgba(24, 100, 255, 1)"/>
                  </svg>
                </div>
                <h3 className="transform-card-title">Crea un bot desde cero</h3>
                <p className="transform-card-description">Diseña conversaciones completas con solo describir tus necesidades.</p>
              </div>
              <div className="transform-card-visual">
                <div className="visual-placeholder">
                  <div className="visual-content">
                    <div className="chat-bubble">
                      <span>💬</span>
                      <div className="chat-text">
                        <div className="chat-line"></div>
                        <div className="chat-line short"></div>
                      </div>
                    </div>
                    <div className="creation-flow">
                      <div className="flow-step"></div>
                      <div className="flow-step"></div>
                      <div className="flow-step active"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transform-quote blue">
                <div className="quote-bar"></div>
                <p>"Quiero un bot para atención postventa con 3 intenciones"</p>
              </div>
            </div>
            
            <div className="transform-card">
              <div className="transform-card-header">
                <div className="transform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="rgba(24, 100, 255, 1)"/>
                  </svg>
                </div>
                <h3 className="transform-card-title">Edita sin código</h3>
                <p className="transform-card-description">Modifica respuestas y flujos con lenguaje natural, sin programar.</p>
              </div>
              <div className="transform-card-visual">
                <div className="visual-placeholder">
                  <div className="visual-content">
                    <div className="code-editor">
                      <div className="editor-header">
                        <div className="editor-dots">
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="editor-content">
                        <div className="code-line highlight"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transform-quote green">
                <div className="quote-bar"></div>
                <p>"Cambia la respuesta del paso 3 para hacerlo más claro"</p>
              </div>
            </div>
            
            <div className="transform-card">
              <div className="transform-card-header">
                <div className="transform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" fill="rgba(24, 100, 255, 1)"/>
                  </svg>
                </div>
                <h3 className="transform-card-title">Carga contenido automáticamente</h3>
                <p className="transform-card-description">Alimenta tu bot con información desde URLs y documentos.</p>
              </div>
              <div className="transform-card-visual">
                <div className="visual-placeholder">
                  <div className="visual-content">
                    <div className="url-input">
                      <div className="input-field">
                        <span className="url-icon">🔗</span>
                        <div className="url-text"></div>
                      </div>
                      <div className="download-arrow">⬇</div>
                    </div>
                    <div className="content-blocks">
                      <div className="content-block"></div>
                      <div className="content-block"></div>
                      <div className="content-block small"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transform-quote purple">
                <div className="quote-bar"></div>
                <p>"Proporciona una URL"</p>
              </div>
            </div>
            
            <div className="transform-card">
              <div className="transform-card-header">
                <div className="transform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" fill="rgba(24, 100, 255, 1)"/>
                  </svg>
                </div>
                <h3 className="transform-card-title">Instruye con ejemplos</h3>
                <p className="transform-card-description">Enseña comportamientos específicos con casos de uso reales.</p>
              </div>
              <div className="transform-card-visual">
                <div className="visual-placeholder">
                  <div className="visual-content">
                    <div className="example-flow">
                      <div className="example-item">
                        <div className="example-input">
                          <span>❓</span>
                          <div className="example-text"></div>
                        </div>
                        <div className="arrow">→</div>
                        <div className="example-output">
                          <span>💡</span>
                          <div className="example-text"></div>
                        </div>
                      </div>
                      <div className="example-item">
                        <div className="example-input">
                          <span>❓</span>
                          <div className="example-text short"></div>
                        </div>
                        <div className="arrow">→</div>
                        <div className="example-output">
                          <span>💡</span>
                          <div className="example-text short"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transform-quote orange">
                <div className="quote-bar"></div>
                <p>"Cuando alguien pregunta esto, responde con esto otro"</p>
              </div>
            </div>
            
            <div className="transform-card">
              <div className="transform-card-header">
                <div className="transform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="rgba(24, 100, 255, 1)"/>
                  </svg>
                </div>
                <h3 className="transform-card-title">Comprende imágenes</h3>
                <p className="transform-card-description">Analiza y responde preguntas sobre imágenes que envían los usuarios.</p>
              </div>
              <div className="transform-card-visual">
                <div className="visual-placeholder">
                  <div className="visual-content">
                    <div className="image-analysis">
                      <div className="uploaded-image">
                        <div className="image-placeholder">
                          <span>🖼️</span>
                        </div>
                        <div className="scan-line"></div>
                      </div>
                      <div className="analysis-results">
                        <div className="result-item">
                          <span className="result-dot"></span>
                          <div className="result-text"></div>
                        </div>
                        <div className="result-item">
                          <span className="result-dot"></span>
                          <div className="result-text short"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transform-quote pink">
                <div className="quote-bar"></div>
                <p>"Carga una foto"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection; 