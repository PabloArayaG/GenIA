import React, { useState } from 'react';
import '../css/formulario.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Formulario = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      await addDoc(collection(db, 'leads'), {
        nombre: formData.firstName,
        apellido: formData.lastName,
        correo: formData.email,
        timestamp: serverTimestamp()
      });

      setMessage('¡Gracias! Te hemos agregado a la lista de espera.');
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (error) {
      setMessage('Hubo un error. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="formulario-section">
      <div className="formulario-container">
        <div id="formulario" className="form-container">
          <div className="form-header">
            <h3 className="form-title">¡Únete a la lista de espera!</h3>
            <p className="form-description">
              Deja tus datos y te avisaremos cuando GenIA esté disponible.
            </p>
          </div>
          {message && (
            <div className={`form-message ${message.includes('Gracias') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input
                type="text"
                placeholder="Nombre"
                className="input-field"
                autoComplete="given-name"
                inputMode="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input
                type="text"
                placeholder="Apellido"
                className="input-field"
                autoComplete="family-name"
                inputMode="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon"><FaEnvelope /></span>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="input-field"
                autoComplete="email"
                inputMode="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="form-button" 
              disabled={isSubmitting}
              aria-label="Enviar formulario para unirse a la lista de espera"
            >
              {isSubmitting ? 'Enviando...' : 'Quiero conocer GenIA'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
 
export default Formulario; 