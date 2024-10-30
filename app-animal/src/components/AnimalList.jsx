import React, { useState, useEffect } from 'react';
import { fetchCats } from '../services/catService';
import { fetchDogs } from '../services/dogService'; 
import Modal from './Modal';

function AnimalList() {
    const [cats, setCats] = useState([]);
    const [dogs, setDogs] = useState([]); 
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCats, setShowCats] = useState(true);  
    useEffect(() => {
        const loadAnimals = async () => {
            const catData = await fetchCats(10);
            const dogData = await fetchDogs(10);  
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

    const toggleShowCats = () => {
        setShowCats(true);
    };

    const toggleShowDogs = () => {
        setShowCats(false);
    };

    return (
        <div>
          
            <div>
                <button onClick={toggleShowCats}>Gatos</button>
                <button onClick={toggleShowDogs}>Perros</button>
            </div>
            
            {showCats ? (
                <>
                    <h3>Gatos</h3>
                    <ul>
                        {cats.map((cat) => (
                            <li key={cat.id} onClick={() => openModal(cat)}>
                                {cat.url ? ( 
                                    <img src={cat.url} alt="Cat" width="200" />
                                ) : (
                                    <p>Imagen no disponible</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <h3>Perros</h3>
                    <ul>
                        {dogs.map((dog) => (
                            <li key={dog.id} onClick={() => openModal(dog)}>
                                {dog.image ? ( 
                                    <img src={dog.image.url} alt="Dog" width="200" />
                                ) : (
                                    <p>Imagen no disponible</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <Modal isOpen={isModalOpen} onClose={closeModal} animal={selectedAnimal} />
        </div>
    );
}

export default AnimalList;
