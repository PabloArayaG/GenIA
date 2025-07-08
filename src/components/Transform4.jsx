import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/transform4.css';

// Componente de animación de chat reutilizable
const ChatAnimation = ({ messages, autoStart = true }) => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [messageStates, setMessageStates] = useState({});

  const chatMessages = messages || [
    { 
      id: 1, 
      text: "Quiero un Bot para mi negocio", 
      type: "user" 
    },
    { 
      id: 2, 
      text: "Excelente decisión! Cuéntame un poco sobre el negocio:\n\n- ¿Cuál es el nombre de la empresa o marca?\n- ¿Qué productos o servicios ofrece?\n- ¿Cuál es el público objetivo?\n- ¿Qué diferencia la empresa o marca frente a la competencia?", 
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
      text: "Analizando...", 
      type: "genia", 
      sender: "Genia",
      isPulse: true
    }
  ];

  // Función para reiniciar completamente la animación
  const restartAnimation = () => {
    // Mantener todos los mensajes visibles y sus estados completados
    // Solo reiniciar si es necesario para una nueva secuencia
    // Por ahora, no hacer nada para mantener el chat completo visible
  };

  // Reiniciar animación cuando cambian los mensajes
  useEffect(() => {
    if (autoStart) {
      // Resetear estado
      setVisibleMessages([]);
      setMessageStates({});
      setCurrentStep(0);
      
      // Iniciar animación
      const timer = setTimeout(() => {
        setVisibleMessages([chatMessages[0]]);
        setMessageStates({ 1: 'entering' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [messages, autoStart]);

  // Controlar la secuencia completa
  useEffect(() => {
    if (currentStep === 0 && autoStart && visibleMessages.length === 0) {
      // Mostrar primer mensaje
      const timer = setTimeout(() => {
        setVisibleMessages([chatMessages[0]]);
        setMessageStates({ 1: 'entering' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Manejar cuando un mensaje completa su typewriter
  const handleMessageComplete = (messageId) => {
    setMessageStates(prev => ({ ...prev, [messageId]: 'completed' }));
    
    // Pasar al siguiente paso después de 0.5 segundos
    setTimeout(() => {
      if (messageId === 1) {
        setVisibleMessages(prev => [...prev, chatMessages[1]]);
        setMessageStates(prev => ({ ...prev, 2: 'entering' }));
      } else if (messageId === 2) {
        setVisibleMessages(prev => [...prev, chatMessages[2]]);
        setMessageStates(prev => ({ ...prev, 3: 'entering' }));
      } else if (messageId === 3) {
        setVisibleMessages(prev => [...prev, chatMessages[3]]);
        setMessageStates(prev => ({ ...prev, 4: 'entering' }));
             } else if (messageId === chatMessages.length) {
         // Mantener el chat completo visible permanentemente
         // No reiniciar la animación
       }
    }, 500);
  };

  // Componente para efecto typewriter independiente
  const TypewriterText = ({ text, messageId, isActive }) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const messageState = messageStates[messageId];
    const isCurrentlyTyping = messageState === 'entering';

    useEffect(() => {
      // Si el mensaje ya está completo, mostrar todo el texto inmediatamente
      if (messageState === 'completed') {
        setDisplayText(text);
        setIsComplete(true);
        return;
      }

      // Si no está en modo de escritura, no hacer nada (mantener el estado actual)
      if (!isCurrentlyTyping) return;
      
      const timer = setTimeout(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1));
            index++;
          } else {
            setIsComplete(true);
            clearInterval(typeInterval);
            // Notificar que este mensaje específico terminó
            handleMessageComplete(messageId);
          }
        }, 20);

        return () => clearInterval(typeInterval);
      }, 100);

      return () => clearTimeout(timer);
    }, [text, messageId, isCurrentlyTyping, messageState]);

    // Reset cuando el componente se reinicia completamente
    useEffect(() => {
      if (currentStep === 0) {
        setDisplayText('');
        setIsComplete(false);
      }
    }, [currentStep]);

    // Si el mensaje está completed, asegurar que muestre el texto completo
    const finalDisplayText = messageState === 'completed' ? text : displayText;
    const showCursor = !isComplete && isCurrentlyTyping && messageState === 'entering';

    return (
      <span style={{ whiteSpace: 'pre-line' }}>
        {finalDisplayText}
        {showCursor && (
          <motion.span
            key={`cursor-${messageId}`}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
            style={{ marginLeft: '2px' }}
          >
            |
          </motion.span>
        )}
      </span>
    );
  };

  // Crear variantes únicas para cada mensaje
  const createMessageVariants = (messageId) => ({
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    completed: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  });

  return (
    <div className="input-design-container">
      <div className="chat-interface">
        {visibleMessages.map((message) => {
          const messageState = messageStates[message.id] || 'hidden';
          const isActive = messageState === 'entering';
          const isCompleted = messageState === 'completed';
          const shouldShowText = isActive || isCompleted; // Mostrar texto si está activo O completado
          
          return (
            <motion.div
              key={`message-${message.id}`}
              className={`chat-message-${message.id} ${message.type}-message`}
              variants={createMessageVariants(message.id)}
              initial="hidden"
              animate={isCompleted ? "completed" : "visible"}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {message.type === 'user' ? (
                <div className={`user-input-bubble user-bubble-${message.id}`}>
                  <div className="user-input-content">
                                         <div className="user-text">
                       <TypewriterText 
                         text={message.text} 
                         messageId={message.id}
                         isActive={shouldShowText}
                       />
                     </div>
                  </div>
                </div>
              ) : (
                <motion.div 
                  className={`ai-response-bubble ai-bubble-${message.id} ${message.isPulse && isCompleted ? 'pulse' : ''}`}
                  animate={message.isPulse && isCompleted ? {
                    scale: [1, 1.02, 1]
                  } : {}}
                  transition={message.isPulse && isCompleted ? {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                >
                  <div className="ai-response-content">
                    <div className="ai-header">
                      <div className="ai-sender">{message.sender}</div>
                    </div>
                                         <div className="ai-message">
                       <TypewriterText 
                         text={message.text} 
                         messageId={message.id}
                         isActive={shouldShowText}
                       />
                     </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Decoraciones estáticas */}
      <div className="chat-decorations">
        <div className="decoration-dot decoration-dot-1"></div>
        <div className="decoration-dot decoration-dot-2"></div>
      </div>
    </div>
  );
};

// Componente Transform4 original que usa ChatAnimation
const Transform4 = () => {
  return <ChatAnimation />;
};

// Exportar ambos componentes
export default Transform4;
export { ChatAnimation };
