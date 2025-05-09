
import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, animal }) {
  if (!isOpen || !animal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{animal.name}</h2>
        {animal.origin && <p><strong>Origin:</strong> {animal.origin}</p>}
        {animal.temperament && <p><strong>Temperament:</strong> {animal.temperament}</p>}
        {animal.bred_for && <p><strong>Bred for:</strong> {animal.bred_for}</p>}
        {animal.breed_group && <p><strong>Breed Group:</strong> {animal.breed_group}</p>}
        {animal.description && <p><strong>Description:</strong> {animal.description}</p>}
        {animal.life_span && <p><strong>Life Span:</strong> {animal.life_span}</p>}
        {animal.image?.url && <img src={animal.image.url} alt={animal.name} width="250" style={{ borderRadius: '10px' }} />}
      </div>
    </div>
  );
}

export default Modal;

