import { useState } from 'react'

export default function SearchBarExp({ onSubmit, currPokemon1, currPokemon2 }) {
    const [pokemon1, setPokemon1] = useState(currPokemon1)
    const [pokemon2, setPokemon2] = useState(currPokemon2)
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(pokemon1, pokemon2)
    }
    const handlePoke1Change = (event) => {
        setPokemon1(event.target.value)
    }
    const handlePoke2Change = (event) => {
        setPokemon2(event.target.value)
    }
    return <div>
        <form onSubmit={handleFormSubmit} className="text-center">
            <input value={pokemon1} onChange={handlePoke1Change} className="border py-1 px-2 rounded mx-0.5 mb-2 block w-full" />
            <p>VS.</p>
            <input value={pokemon2} onChange={handlePoke2Change} className="border py-1 px-2 rounded mx-0.5 mb-2 block w-full" />
            <button className='bg-blue-700/100  hover:bg-blue-600/90 text-center text-white py-1 px-1 rounded mx-0.5'>Search</button>
        </form>
    </div>
}