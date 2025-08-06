import { useState } from 'react';
import PetCard from '../components/PetCard'
import AddPetForm from '../components/AddPetForm';

export default function Home() {
    const [pets, setPets] = useState([]);

    const handleAddPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]);
};

    return (
        <div className="p-4">
        <AddPetForm onAddPet={handleAddPet} />
        <PetCard pets={pets} />
    </div>
    )
}