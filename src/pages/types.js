import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Types() {
    const type = "normal"

    const { data, error, isLoading, isValidating } = useSWR(`/api/types/${type}`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { pokemon } = data


    return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <div className='container mt-7 grid grid-cols-9'>
                {isValidating ? (
                    <h2>Validating</h2>
                ) : (
                    <>
                        <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>

                            <h2 className='text-2xl text-black-700 mb-3 text-center font-bold underline block'>Type: {type}</h2>
                            <ul>{pokemon.map(poke => <li className='text-center'>{poke}</li>)}</ul>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}