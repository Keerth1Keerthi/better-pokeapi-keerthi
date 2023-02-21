import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'
import SearchBar from './components/SearchBarBattle'
const fetcher = async (url, pokemon1, pokemon2) => {
    const res = await axios.post(url, {
        pokemon1: pokemon1,
        pokemon2: pokemon2

    })
    return res.data
}

export default function Battle() {
    const [pokemon1, setPokemon1] = useState('pikachu')
    const [pokemon2, setPokemon2] = useState('lucario')
    const onSubmit = (pokemon1, pokemon2) => {
        setPokemon1(pokemon1)
        setPokemon2(pokemon2)
    }
    const { data, error, isLoading, isValidating } = useSWR([`/api/battle/`, pokemon1, pokemon2], ([url, pokemon1, pokemon2]) => fetcher(url, pokemon1, pokemon2))
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { winner } = data

    return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <SearchBar onSubmit={onSubmit} currPokemon1={pokemon1} currPokemon2={pokemon2} />
            <div className='container mt-7 grid grid-cols-9'>
                <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>

                    <h2>Battle: {pokemon1} vs {pokemon2}</h2>

                    {isValidating ? (
                        <h2>Validating</h2>
                    ) : (
                        <>
                            <h2>Winner: {winner}</h2>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}