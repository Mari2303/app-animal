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
        <p><strong>Origin:</strong> {animal.origin || 'Unknown'}</p>
        <p><strong>Temperament:</strong> {animal.temperament || 'Unknown'}</p>
        <p><strong>Bred for:</strong> {animal.bred_for || 'Unknown'}</p>
        <p><strong>Breed Group:</strong> {animal.breed_group || 'Unknown'}</p>
        {animal.image && (
          <img src={animal.image.url} alt={animal.name} width="200" />
        )}
      </div>
    </div>
  );
}

export default Modal;
