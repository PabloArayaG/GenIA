import React, { useState, useRef } from 'react';
import { ChatAnimation } from './Transform4';
import '../css/transform5.css';

const Transform5 = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [chatKey, setChatKey] = useState(0); // Key para forzar re-render del chat
  const debounceTimeoutRef = useRef(null); // Simple debounce para evitar clicks múltiples

  // Configuración de features/tabs
  const features = [
    {
      id: 0,
      title: "Crea un bot desde cero",
      description: "Diseña conversaciones completas con solo describir tus necesidades.",
      chatMessages: [
        { 
          id: 1, 
          text: "Quiero un Bot para mi negocio", 
          type: "user" 
        },
        { 
          id: 2, 
          text: "Excelente decisión! Cuéntame un poco sobre el negocio:\n\n- ¿Cuál es el nombre de la empresa o marca?\n- ¿Qué productos o servicios ofrece?\n- ¿Cuál es el público objetivo?", 
          type: "genia", 
          sender: "Genia" 
        },
        { 
          id: 3, 
          text: "Usa esta información www.adere.so", 
          type: "user" 
        },
        { 
          id: 4, 
          text: "Creando Bot...", 
          type: "genia", 
          sender: "Genia",
          isPulse: true
        }
      ]
    },
    {
      id: 1,
      title: "Edita sin código",
      description: "Modifica respuestas y flujos con lenguaje natural, sin programar.",
      chatMessages: [
        { 
          id: 1, 
          text: "Quiero ajustar una respuesta del bot sin meterme en código.", 
          type: "user" 
        },
        { 
          id: 2, 
          text: "Hecho. Solo dime qué mensaje quieres cambiar y qué debería decir ahora. También puedo modificar condiciones del flujo si lo necesitas.", 
          type: "genia", 
          sender: "Genia" 
        },
        { 
          id: 3, 
          text: "Que cuando pregunten por precios, diga \"Agenda una demo para conocer más\".", 
          type: "user" 
        },
        { 
          id: 4, 
          text: "Perfecto. El flujo fue actualizado.\nSin código, solo con tus palabras. ✅", 
          type: "genia", 
          sender: "Genia" 
        }
      ]
    },
    {
      id: 2,
      title: "Carga contenido automáticamente",
      description: "Alimenta tu bot con información desde URLs y documentos.",
      chatMessages: [
        { 
          id: 1, 
          text: "Tengo una página web y un PDF con toda la info. ¿El bot puede aprender de eso?", 
          type: "user" 
        },
        { 
          id: 2, 
          text: "Claro. Envíame las URLs o los documentos y lo analizaré para alimentar al bot automáticamente.", 
          type: "genia", 
          sender: "Genia" 
        },
        { 
          id: 3, 
          text: "Te paso este link: www.adereso.ai y un archivo PDF con productos.", 
          type: "user" 
        },
        { 
          id: 4, 
          text: "Perfecto. Ya cargué la información, el bot ahora responderá como si se lo hubiera leído todo. ✅", 
          type: "genia", 
          sender: "Genia" 
        }
      ]
    },
    {
      id: 3,
      title: "Instruye con ejemplos",
      description: "Enseña comportamientos específicos con casos de uso reales.",
      chatMessages: [
        { 
          id: 1, 
          text: "¿Puedo enseñarle al bot cómo responder en ciertos casos?", 
          type: "user" 
        },
        { 
          id: 2, 
          text: "¡Por supuesto! Solo dame un par de ejemplos y aprenderá al instante cómo responder como tú lo harías. Con ejemplos reales, se vuelve aún más preciso.", 
          type: "genia", 
          sender: "Genia" 
        },
        { 
          id: 3, 
          text: "Por ejemplo, si alguien dice \"quiero agendar una demo\", que les pida su correo y disponibilidad.", 
          type: "user" 
        },
        { 
          id: 4, 
          text: "Listo. El bot ya entendió cómo actuar en ese caso.\n⚙️ Aprendizaje aplicado con tu ejemplo.", 
          type: "genia", 
          sender: "Genia" 
        }
      ]
    },
    {
      id: 4,
      title: "Comprende imágenes",
      description: "Analiza y responde preguntas sobre imágenes que envían los usuarios.",
      chatMessages: [
        { 
          id: 1, 
          text: "¿El bot puede entender imágenes que envían los clientes?", 
          type: "user" 
        },
        { 
          id: 2, 
          text: "¡Sí! Solo necesitan subir una imagen y el bot podrá analizarla y responder según lo que ve. Visión incluida.", 
          type: "genia", 
          sender: "Genia" 
        },
        { 
          id: 3, 
          text: "Observa esta boleta819293020.png", 
          type: "user" 
        },
        { 
          id: 4, 
          text: "Analizando imagen boleta819293020.png...", 
          type: "genia", 
          sender: "Genia",
          isPulse: true
        }
      ]
    }
  ];



  // Manejar click en feature/tab con debounce simple
  const handleFeatureClick = (index) => {
    // Limpiar timeout anterior si existe (debounce)
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    // Ejecutar el cambio después de un pequeño delay para evitar clicks múltiples
    debounceTimeoutRef.current = setTimeout(() => {
      if (selectedFeature !== index) {
        // Cambiar feature y forzar re-render del chat
        setSelectedFeature(index);
        setChatKey(prev => prev + 1); // Incrementar key para forzar re-mount del ChatAnimation
      }
      
      // Toggle la expansión: si ya está expandido, se colapsa; si no, se expande
      setExpandedFeature(expandedFeature === index ? null : index);
    }, 100); // 100ms de delay es suficiente para evitar clicks múltiples accidentales
  };



  return (
    <section className="transform5-section">
      <div className="transform5-container">
        <div className="transform5-content">
          <h2 className="transform5-title">
            5 formas en que <span className="highlight">GenIA</span><br />
            transforma tu operación
          </h2>
          
          <div className="transform5-layout">
            {/* Lista de features a la izquierda */}
            <div className="transform5-sidebar">
              <div className="transform5-feature-list">
                {features.map((feature, index) => (
                  <div key={feature.id} className="transform5-feature-wrapper">
                    <div
                      className={`transform5-feature-item ${selectedFeature === index ? 'active' : ''}`}
                      onClick={() => handleFeatureClick(index)}
                    >
                      <div className="transform5-feature-indicator"></div>
                      <h4 className="transform5-feature-title">{feature.title}</h4>
                    </div>
                    
                    {/* Descripción expandible */}
                    <div className={`transform5-feature-description ${expandedFeature === index ? 'expanded' : ''}`}>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Animation a la derecha - reemplaza las imágenes */}
            <div className="transform5-main">
              <ChatAnimation 
                key={chatKey}
                messages={features[selectedFeature].chatMessages} 
                autoStart={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform5; 