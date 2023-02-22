import { useState } from 'react'

export default function SearchBar({ onSubmit, term }) {
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
        <form onSubmit={handleFormSubmit} className="text-center">
            <input value={name} onChange={handleChange} className="border py-1 px-2 rounded mx-0.5" id="search"
                aria-label="Search" placeholder={term} />
            <button className='bg-blue-700/100  hover:bg-blue-600/90 text-center text-white py-1 px-1 rounded mx-0.5'>Search</button>
        </form>
    </div >
}