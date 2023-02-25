import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Name() {
    const [name, setName] = useState('pikachu')
    const onSubmit = (name) => {
        setName(name)
    }
    let { data, error, isLoading, isValidating } = useSWR("/api/abilities/" + name, fetcher)

    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )

    let { abilities } = data


    return (
        <>
            <h1><Link href="/">Better PokeAPI</Link></h1>
            <div className='container mt-7 grid grid-cols-9'>
                {isValidating ? (
                    <h2>Validating</h2>
                ) : (
                    <>
                        <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>
                            <h2 className='text-2xl text-black-600 mb-3 text-center font-bold underline'>Abilities of {name}</h2>
                            {abilities.map(ability => {
                                return <>
                                    <h3 className='text-md my-1 mx-1 text-center rounded-md bg-lime-100 px-2 py-1 stext-black-400'>{ability.name}</h3>
                                    <p className='text-sm text-black-400 text-center rounded-md bg-red-100 px-2 py-1 m-3'>{ability.description}</p>
                                </>
                            })}
                        </div>
                        <div className='bg-white rounded shadow-md overflow-hidden px-7 py-2 col-start-4 col-span-3 my-2'>
                            <SearchBar onSubmit={onSubmit} term="Search Other Pokemon" />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}