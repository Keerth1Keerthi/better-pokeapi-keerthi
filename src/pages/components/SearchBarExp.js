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
        <form onSubmit={handleFormSubmit}>
            <input value={name} onChange={handleInputChange} className="border" />
            <input value={level} onChange={handleLevelChange} className="border" type="number" />
            <button>Search</button>
        </form>
    </div>
}