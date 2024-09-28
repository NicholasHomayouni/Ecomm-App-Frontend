'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '../models/Product';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);


    const [selectedSuggestion, setSelectedSuggestion] = useState('');

    const handleInputChange = (e: any) => {
        setSearchTerm(e.target.value);
    }

    const handleClick = (suggestion: any) => {
        setSelectedSuggestion(suggestion);
        setSearchTerm(suggestion.name);
    }

    useEffect(() => {
        if (searchTerm) {
            fetch(`http://localhost:8080/api/products/suggestions?query=${searchTerm}`)
                .then((res) => res.json())
                .then((data) => setSuggestions(data));
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);


    return (
        <div className="bg-[#023E58]">
            <header className="shadow-md py-4 px-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-white"><a href="/">FishStore</a></div>
                    <nav className="hidden md:flex space-x-4">
                        <ul className="flex justify-center space-x-4">
                            <li><a href="/" className="hover:text-blue-600 text-white">Home</a></li>
                            <li><a href="/about" className="hover:text-blue-600 text-white">About</a></li>
                            <li><a href="/category/freshwater-fish" className="hover:text-blue-600 text-white">Freshwater Fish</a></li>
                            <li><a href="/category/marine-fish" className="hover:text-blue-600 text-white">Marine Fish</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="relative">
                    <form onSubmit={(e) => { e.preventDefault(); }}>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="border rounded-md px-3 py-1 text sm text-black"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <div className="absolute top-full w-full">
                            {suggestions.length > 0 && (
                                <ul className="absolue z-10 bg-white text-black border rounded-md w-full shadow-lg mt-1 max-h-80 overflow-y-auto">
                                    {suggestions.map((suggestion: any) => (
                                        <li key={suggestion.productId} className="hover:bg-gray-200 px-3 py-2 cursor-pointer">
                                            <Link
                                                onClick={handleClick}
                                                href={`/search?query=${encodeURIComponent(suggestion.name)}`}>

                                                {suggestion.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <Link href={`/search?query=${encodeURIComponent(searchTerm)}`}>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-1 rounded-md"
                            >
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
            </header>

        </div>

    )
}