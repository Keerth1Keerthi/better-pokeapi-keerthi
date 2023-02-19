import { useState } from 'react'

export default function SearchBar({ onSubmit }) {
    const [name, setName] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(name)
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