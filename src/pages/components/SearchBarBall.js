import { useState } from 'react'

export default function SearchBarExp({ onSubmit, currName, currBall }) {
    const [name, setName] = useState('')
    const [ball, setBall] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, ball)
    }
    const handleInputChange = (event) => {
        setName(event.target.value)
    }
    const handleBallChange = (event) => {
        setBall(event.target.value)
    }
    return <div>
        <form onSubmit={handleFormSubmit} className="text-center">
            <input value={name} onChange={handleInputChange} className="border py-1 px-2 rounded mx-0.5 mb-1" placeholder='Choose Pokemon' />
            <input value={ball} onChange={handleBallChange} className="border py-1 px-2 rounded mx-0.5 mb-1" placeholder='Choose Ball' />
            <button className='bg-green-700/100  hover:bg-green-600/90 text-center text-white py-1 px-1 rounded mx-0.5'>Catch</button>
        </form>
    </div>
}