'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');

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
                <form onSubmit={(e) => {e.preventDefault();}}>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="border rounded-md px-3 py-1 text sm text-black"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Link href={`/search?query=${encodeURIComponent(searchTerm)}`}>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-1 rounded-md"
                        >
                            Search
                        </button>
                    </Link>

                </form>
            </header>

        </div>

    )
}