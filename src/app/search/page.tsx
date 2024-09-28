'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '../models/Product';
import Image from "next/image";
import Link from 'next/link';


export default function SearchPage() {
    const searchParams = useSearchParams(); // storing current URL search params.
    const query = searchParams.get('query'); // retrieving the search params.

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (query) { // if query exists
            fetch(`http://localhost:8080/api/products/search?query=${query}`, { cache: "no-store" })
                .then((res) => res.json())
                .then((data) => setSearchResults(data));
        }
    }, [query]);

    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            <h1 className="text-2xl font-bold mb-4 text-black">Search Results for: {query}</h1>
            {searchResults.length > 0 ? (
                <div>
                    {searchResults.map((product: any) => (
                        <Link href={`/category/`} key={product.id}>
                            <div key={product.id} className="border rounded-lg p-4 shadow-md text-center">
                                <Image
                                    src={product.imageUrl || '/images/default.jpg'}
                                    alt={product.name}
                                    width={200}
                                    height={100}
                                    layout="responsive"
                                    className="w-full h-32 object-cover mb-2"
                                />
                                <h2 className="text-black text-lg font-semibold">{product.name}</h2>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <p className="text-black text-xl font-bold mt-2">${product.price}</p>
                                <p className="text-green-600 font-semibold">IN STOCK</p>
                            </div>
                        </Link>
                    ))}
                </div>


            ) : (
                <p className="text-black">No results found.</p>
            )}
        </div>
    );
}