import { useState } from 'react';

export default function AddPetForm({ onAddPet }) {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [isVaccinated, setIsVaccinated] = useState(false);
    const [lastVetVisit, setLastVetVisit] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            id: Date.now(),
            name,
            species,
            age,
            weight,
            isVaccinated,
            lastVetVisit,
            notes,
        };

        onAddPet(newPet);

        
        setName('');
        setSpecies('');
        setAge('');
        setWeight('');
        setIsVaccinated(false);
        setLastVetVisit('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">Add a New Pet</h2>
            <input
                className="border p-2 w-full mb-2"
                type="text"
                placeholder="Pet Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="border p-2 w-full mb-2"
                type="text"
                placeholder="Species (e.g. Dog, Cat)"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
            />
            <input
                className="border p-2 w-full mb-2"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                className="border p-2 w-full mb-2"
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <label className="block mb-2">
                <input
                    type="checkbox"
                    checked={isVaccinated}
                    onChange={(e) => setIsVaccinated(e.target.checked)}
                    className="mr-2"
                />
                Vaccinated
            </label>
            <input
                className="border p-2 w-full mb-2"
                type="date"
                value={lastVetVisit}
                onChange={(e) => setLastVetVisit(e.target.value)}
            />
            <input
                className="border p-2 w-full mb-2"
                type="text"
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Pet
            </button>
        </form>
    );
}
