import { useState } from 'react';
import NavBar from './components/NavBar';
import PetCard from './components/PetCard';
import AddPetForm from './components/AddPetForm';

export default function App() {
  const [pets, setPets] = useState([]);

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto p-4">
        <AddPetForm onAddPet={handleAddPet} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
}
