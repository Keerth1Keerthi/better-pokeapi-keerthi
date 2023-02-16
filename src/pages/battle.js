import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.post(url, {
        pokemon1: "pikachu",
        pokemon2: "lucario"
    })
    return res.data
}

export default function Battle() {
    const level = 5
    const name = "pikachu"
    const { data, error, isLoading, isValidating } = useSWR(`/api/battle/`, fetcher)
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
            <div className='container mt-7 grid grid-cols-9'>
                <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>

                    <h2>Battle: Pikachu vs. Lucario</h2>

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