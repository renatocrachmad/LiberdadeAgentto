import React from 'react';
import './style.css';

const EventModal = ({ events, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Eventos do Dia</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>Evento:</strong> {event.title}<br />
                <strong>Hora:</strong> {event.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há eventos para esta data.</p>
        )}
        <button onClick={onClose} className="close-button">Fechar</button>
      </div>
    </div>
  );
};

export default EventModal;
