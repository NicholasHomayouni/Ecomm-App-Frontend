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
        if (query) {
            fetch(`http://localhost:8080/api/products/search?query=${query}`, { cache: "no-store" })
                .then((res) => res.json())
                .then((data) => setSearchResults(data));
        }
    }, [query]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-black">Search Results for: {query}</h1>
            <div className="grid grid-cols-4 gap-6">
                {searchResults.length > 0 ? (
                    searchResults.map((product: any) => (
                        <div key={product.id} className="group relative">
                            <Link
                                href={`/category/${product.category === "freshwater-fish"
                                        ? "freshwater-fish"
                                        : "marine-fish"
                                    }/${encodeURIComponent(product.subcategory)}/${product.productId
                                    }`}
                            >
                                <div className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl h-full">
                                    <Image
                                        src={product.imageUrl || "/images/default.jpg"}
                                        alt={product.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-t-md"
                                    />
                                    <div className="text-center mt-4">
                                        <h2 className="text-black text-lg font-semibold">
                                            {product.name}
                                        </h2>
                                        <p className="text-sm text-gray-600">{product.description}</p>
                                        <p className="text-black text-xl font-bold mt-2">${product.price}</p>
                                        <p className={`text-green-600 font-semibold`}>
                                            {product.isInStock ? "IN STOCK" : "OUT OF STOCK"}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-black">No results found.</p>
                )}
            </div>
        </div>
    );
}