import { useState } from 'react'

export default function SearchBarExp({ onSubmit, currName, currLevel }) {
    const [name, setName] = useState(currName)
    const [level, setLevel] = useState(currLevel)
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, level)
    }
    const handleInputChange = (event) => {
        setName(event.target.value)
    }
    const handleLevelChange = (event) => {
        setLevel(event.target.value)
    }
    return <div>
        <form onSubmit={handleFormSubmit} className="text-center">
            <input value={name} onChange={handleInputChange} className="border py-1 px-2 rounded mx-0.5" />
            <input value={level} onChange={handleLevelChange} className="border py-1 px-2 rounded mx-0.5" type="number" />
            <button className='bg-blue-700/100  hover:bg-blue-600/90 text-center text-white py-1 px-1 rounded mx-0.5'>Search</button>
        </form>
    </div>
}