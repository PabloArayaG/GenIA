import React from 'react';
import '../css/herosection.css';

function HeroSection() {
return (
<div className="hero-section">
    <div className="content-container">
    <div className="subtitle">Chatbots y Agentes IA con</div>

    <div className="genia-button">
        <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93244b6cbef22363c386a69aaad3c2daab4f77ed?placeholderIfAbsent=true"
        alt="GenIA AI Icon"
        className="icon"
        />
        <div className="button-container">
        <div className="button-text">GenIA</div>
        </div>
    </div>

    <div className="main-title">
        Crea, edita y mejora tus bots<br />
        con solo pedirlo en lenguaje natural
    </div>

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
            <div className="feature-text">Ahorro en Costos de Soporte</div>
        </div>
        <div className="hero-feature">
            <div className="feature-icon"></div>
            <div className="feature-text">Iteración Autónoma</div>
        </div>
        <div className="hero-feature">
            <div className="feature-icon"></div>
            <div className="feature-text">Agilidad para tu Cliente</div>
        </div>
    </div>

    <div className="product-image-container">
        <img
        src="/product.png"
        alt="Product Demo"
        className="product-image"
        />
    </div>
    </div>
</div>
);
}

export default HeroSection;
