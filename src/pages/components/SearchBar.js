import { useState } from 'react'

export default function SearchBar({ onSubmit }) {
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, level)
    }
    const handleChange = (event) => {
        setName(event.target.value)
    }
    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={name} onChange={handleChange} className="border" />
        </form>
    </div>
}