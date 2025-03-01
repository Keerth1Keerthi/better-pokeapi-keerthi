import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Evolve() {
    const [name, setName] = useState('pikachu')
    const onSubmit = (name) => {
        setName(name)
    }
    const { data, error, isLoading, isValidating } = useSWR(`/api/evolve/${name}`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { evolution } = data


    return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <div className='container mt-7 grid grid-cols-9'>
                <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>

                    <h2>Name: {name}</h2>
                    {isValidating ? (
                        <h2>Validating</h2>
                    ) : (
                        <>

                            <h2>Next Evolution: {evolution}</h2>

                        </>
                    )}
                </div>
                <div className='bg-white rounded shadow-md overflow-hidden px-7 py-2 col-start-4 col-span-3 my-2'>
                    <SearchBar onSubmit={onSubmit} term="Search Other Pokemon" />
                </div>
            </div>
        </>
    )
}