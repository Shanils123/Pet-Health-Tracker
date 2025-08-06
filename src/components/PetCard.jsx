
export default function PetCard ({pet}) {
    
    return (
        <div className='bg-white rounded-lg shadow p-4 m-4 max-w-sm mx-auto'>
            <h2 className='text-x1 font-bold'>{pet.name}</h2>
            <p>Species: {pet.species}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
            <p>Vaccinated: {pet.vaccinated ? 'Yes' : 'No'}</p>
            <p>Last Vet Visit: {pet.lastVetVisit}</p>
            <p className="italic">Notes: {pet.notes}</p>
        </div>
    )
}