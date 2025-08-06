import PetCard from '../components/PetCard'

export default function Home() {
    const mockPets = [
    {
    id: 1,
    name: "Luna",
    age: 3,
    species: "Dog",
    breed: "Australian Shepherd",
    weight: "45 lbs",
    vaccinated: true,
    lastVetVisit: "2025-06-15",
    notes: "Very energetic, needs daily walks",
    },
    {
    id: 2,
    name: "Mittens",
    age: 2,
    species: "Cat",
    breed: "Tabby",
    weight: "12 lbs",
    vaccinated: false,
    lastVetVisit: "2025-05-10",
    notes: "Shy around strangers, picky eater",
    },
];

    return (
        <div className="p-4 text-center">
            <h1 className="text-3xl font-bold text-blue-600">Pet Health Tracker</h1>
            <p className="mt-2 text-gray-500">Welcome to the dashboard</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                {mockPets.map((pet) => {
                    return <PetCard key={pet.id} pet={pet} />
                })}
            </div>
        </div>
    )
}