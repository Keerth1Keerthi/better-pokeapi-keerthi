import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import SearchBarBall from './components/SearchBarBall'
import { useState } from 'react'

const fetcher = async (url, name, ball) => {
    const res = await axios.post(url, {
        pokemon: name,
        ballType: ball
    })
    return res.data
}
3
export default function Battle() {
    const [name, setName] = useState('pikachu')
    const [ball, setBall] = useState('Poke Ball')
    const onSubmit = (name, ball) => {
        setName(name)
        setBall(ball)
        console.log('Name', name)
        console.log('Ball', ball)
        console.log('Submitted')
    }

    const { data, error, isLoading, isValidating } = useSWR([`/api/catch/`, name, ball], ([url, name, ball]) => fetcher(url, name, ball))
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { caught } = data

    return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <div className='container mt-7 grid grid-cols-9'>
                <div className='bg-white rounded overflow-hidden shadow-md px-7 py-5 col-start-4 col-span-3'>
                    <h2>Catching: {name}</h2>

                    {isValidating ? (
                        <h2>Validating</h2>
                    ) : (
                        <>
                            {caught ? (
                                <h2>{name} has been caught!</h2>
                            ) : (
                                <h2>{name} broke free!</h2>
                            )}
                        </>
                    )}
                </div>
                <div className='bg-white rounded shadow-md overflow-hidden px-7 py-2 col-start-4 col-span-3 my-2'>
                    <SearchBarBall onSubmit={onSubmit} currName={name} currBall={ball} term="Search Other Pokemon" />
                </div>
            </div>
        </>
    )
}