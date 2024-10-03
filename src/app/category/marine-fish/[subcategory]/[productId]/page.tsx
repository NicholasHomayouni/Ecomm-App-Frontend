import { Product } from "@/app/models/Product";
import { notFound } from "next/navigation";
import Image from "next/image";

async function getProduct(productId: string): Promise<Product | null> {
    try {
        const res = await fetch(`http://localhost:8080/api/products/${productId}`, { cache: 'no-store' });
        if (!res.ok) {
            return null;
        }
        const product: Product = await res.json();
        return product;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}

export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
    const product = await getProduct(params.productId);
    if (!product) {
        notFound();
    }
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="bg-red-600 text-white text-center py-2 font-bold text-lg">
                Escape to Paradise! Win the trip of a lifetime to Sri Lanka & the Maldives SHOP NOW ➔
            </div>

            <nav className="text-sm text-blue-600 mt-4">
                Home &gt; Freshwater Fish &gt; Captive-Bred Fish &gt; All Captive-Bred Fish &gt; {product.name}
            </nav>
            <div className="flex flex-col md:flex-row mt-4 gap-6">
                {/*left column */}
                <div className="flex-1">
                    <Image
                        src={product.imageUrl || '/images/default.jpg'}
                        alt={product.name}
                        width={500}
                        height={400}
                        className="rounded-lg w-full mb-4 object-cover"
                    />
                    <p className="text-xs mt-2 text-gray-600 italic">
                        Please Note: Due to variations within species, your item may not look identical to the image provided.
                        Approximate size range may also vary between individual specimen.
                    </p>
                </div>

                {/* Right Column - Product Details */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                    {/* <p className="italic text-gray-500 mt-1">{product.scientificName}</p> */}
                    <p className="text-3xl font-semibold text-gray-900 mt-2">${product.price.toFixed(2)}</p>

                    {/* Product Selection */}
                    <div className="mt-4">
                        <label className="block font-semibold text-gray-700">Select Product</label>
                        <select className="border border-gray-300 mt-1 p-2 rounded w-full">
                            <option>Philippines/Indonesia - Medium ${product.price.toFixed(2)}</option>
                        </select>
                    </div>

                    {/* Quantity Selection */}
                    <div className="flex items-center mt-4">
                        <label className="mr-4 font-semibold text-blue-600">Enter Quantity:</label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <button className="px-2 text-gray-700">-</button>
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-12 text-center border-l border-r border-gray-300"
                            />
                            <button className="px-2 text-gray-700">+</button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded mt-4 w-full hover:bg-yellow-500">
                        Add to Cart
                    </button>

                    {/* Guarantee Section */}
                    <div className="mt-4">
                        <h2 className="text-blue-600 font-bold text-lg">7-Day Guarantee</h2>
                        <p className="text-gray-500">Ships from our California Facility <a href="#" className="underline">Shipping Info</a></p>
                    </div>

                    {/* Rewards Program */}
                    <div className="bg-blue-50 p-4 mt-4 rounded">
                        <h2 className="text-blue-600 font-bold">REWARDS PROGRAM</h2>
                        <p className="text-sm text-gray-600">EARN 5% REWARDS! <a href="#" className="underline">Learn more</a></p>
                    </div>
                </div>
            </div>
            {/* Quick Stats Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Quick Stats</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* {product.quickStats.map((stat, index) => (
                        <div key={index} className="border p-4 bg-gray-100 rounded">
                            <p className="font-semibold">{stat.title}</p>
                            <p className="text-gray-700">{stat.value}</p>
                        </div>
                    ))} */}
                </div>
            </div>

            {/* Overview Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2 text-blue-600">Overview</h2>
                <p className="text-black mb-4">{product.description}</p>
                {/* <p className="text-gray-700 mb-4">{product.overview}</p>
                <p className="text-sm text-gray-600 italic">
                    Approximate Purchase Size: {product.purchaseSize}
                </p> */}
            </div>

            {/* Supplies Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Supplies You May Be Interested In</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* {product.supplies.map((supply, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={supply.imageUrl}
                                alt={supply.name}
                                width={100}
                                height={100}
                                className="object-cover rounded"
                            />
                            <p className="mt-2 text-center text-gray-700">{supply.name}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>

    );
}