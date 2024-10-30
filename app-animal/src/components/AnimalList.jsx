import React, { useState, useEffect } from 'react';
import { fetchCats } from '../services/catService';
import { fetchDogs } from '../services/dogService';
import Modal from './Modal';
import catButtonImg from '../assets/catIcon.png';
import dogButtonImg from '../assets/dogIcon.png';
import homeButtonImg from '../assets/homeIcon.png';

function AnimalList() {
    const [cats, setCats] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [view, setView] = useState('home');  // 'home', 'cats', 'dogs'

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

    return (
        <div>
            {/* Solo mostrar botones si no estamos en 'home' */}
            {view !== 'home' && (
                <div className="animal-toggle-buttons">
                    <img
                        src={homeButtonImg}
                        alt="Inicio"
                        onClick={() => setView('home')}
                        className="toggle-button"
                    />
                    <img
                        src={catButtonImg}
                        alt="Mostrar Gatos"
                        onClick={() => setView('cats')}
                        className={`toggle-button ${view === 'cats' ? 'active' : ''}`}
                    />
                    <img
                        src={dogButtonImg}
                        alt="Mostrar Perros"
                        onClick={() => setView('dogs')}
                        className={`toggle-button ${view === 'dogs' ? 'active' : ''}`}
                    />
                </div>
            )}

            {view === 'home' && (
                <div className="home-content">
                    <h2>¡Bienvenido a nuestra página de adopción de mascotas!</h2>
                    <p>Explora los gatos y perros disponibles para adopción haciendo clic en los íconos.</p>
                    <div className="animal-selections">
                        <div onClick={() => setView('cats')} className="animal-option">
                            <img src={catButtonImg} alt="Icono Gato" />
                            <p>Ver gatos</p>
                        </div>
                        <div onClick={() => setView('dogs')} className="animal-option">
                            <img src={dogButtonImg} alt="Icono Perro" />
                            <p>Ver perros</p>
                        </div>
                    </div>
                </div>
            )}

            {view === 'cats' && (
                <div className="contenedor">
                    <h3>Gatos</h3>
                    <ul>
                        {cats.map((cat) => (
                            <li key={cat.id} onClick={() => openModal(cat)}>
                                {cat.url ? (
                                    <img src={cat.url} alt="Cat" />
                                ) : (
                                    <p>Imagen no disponible</p>
                                )}
                                <p>{cat.name }</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {view === 'dogs' && (
                <div className="contenedor">
                    <h3>Perros</h3>
                    <ul>
                        {dogs.map((dog) => (
                            <li key={dog.id} onClick={() => openModal(dog)}>
                                {dog.image ? (
                                    <img src={dog.image.url} alt="Dog" />
                                ) : (
                                    <p>Imagen no disponible</p>
                                )}
                                <p>{dog.name || "Perro"}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Modal isOpen={isModalOpen} onClose={closeModal} animal={selectedAnimal} />
        </div>
    );
}

export default AnimalList;
