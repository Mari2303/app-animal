import React, { useState, useEffect } from 'react';
import { fetchCats } from '../services/catService';
import { fetchDogs } from '../services/dogService';
import Modal from './Modal';

function AnimalList() {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Estado para el animal seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal

  useEffect(() => {
    const loadAnimals = async () => {
      const catData = await fetchCats();
      const dogData = await fetchDogs();
      setCats(catData);
      setDogs(dogData);
    };

    loadAnimals();
  }, []);

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Adoptable Cats</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id} onClick={() => openModal(cat)}>
            <h3>{cat.name}</h3>
            <img src={cat.image?.url} alt={cat.name} width="100" />
          </li>
        ))}
      </ul>

      <h2>Adoptable Dogs</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id} onClick={() => openModal(dog)}>
            <h3>{dog.name}</h3>
            <img src={dog.image?.url} alt={dog.name} width="100" />
          </li>
        ))}
      </ul>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} animal={selectedAnimal} />
    </div>
  );
}

export default AnimalList;
