import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Name() {
    let { data, error, isLoading, isValidating } = useSWR("/api/pokemon/vespiquen", fetcher)

    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )

    let { pokemonName, sprite, types } = data


    return (
        <>
            <h1><Link href="/">Better PokeAPI</Link></h1>
            <div className='container mt-7 grid grid-cols-9'>
                {isValidating ? (
                    <h2>Validating</h2>
                ) : (
                    <>
                        <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>

                            <h2 className='text-2xl text-black-700 mb-3 text-center font-bold underline'>Name: {pokemonName}</h2>
                            <img src={sprite} className="mx-auto" />
                            <h2 className='text-lg text-center'>Types: {types.map(type => <span className='rounded-md bg-gray-100 px-2 py-1 m-1 text-black-400 text-sm'>{type} </span>)}</h2>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}