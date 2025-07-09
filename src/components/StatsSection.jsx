import React from 'react';
import '../css/statssection.css';

const StatsSection = () => {
  const stats = [
    {
      value: "100x",
      description: "más velocidad para crear o editar un bot",
      color: "#1864FF"
    },
    {
      value: "83%",
      description: "menos costo asociado a iteración y soporte",
      color: "#1864FF"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-content">
          <h2 className="stats-title">
            Deja de perder clientes por depender del soporte
          </h2>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card">
                <div className="stats-value" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <p className="stats-description">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 