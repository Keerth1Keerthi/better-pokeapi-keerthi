import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import SearchBar from './components/SearchBarExp'
import { useState } from 'react'
const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Exp() {
    const [name, setName] = useState('pikachu')
    const [level, setLevel] = useState('5')

    const onSubmit = (name, level) => {
        setName(name)
        setLevel(level)
    }
    const { data, error, isLoading, isValidating } = useSWR(`/api/experience/${name}?level=${level}`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { experience } = data

    return (
        <>

            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <div className='container mt-7 grid grid-cols-9 mb-5'>
                <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>

                    <h2>Name: {name}</h2>
                    <h2>Level: {level}</h2>
                    {isValidating ? (
                        <h2>Validating</h2>
                    ) : (
                        <>
                            <h2>Experience: {experience}</h2>
                        </>
                    )}
                </div>

            </div>
            <SearchBar onSubmit={onSubmit} currName={name} currLevel={level} />

        </>
    )
}