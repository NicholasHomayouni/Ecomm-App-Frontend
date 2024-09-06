import { Product } from '../models/Product';

export default async function ProductPage() {
    let data = await fetch('http://localhost:8080/api/products/all', { cache: "no-store" });
    let response = await data.json();
    let products = response.data || response;
    // console.log(products);
    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {products.map((product: Product) => (
                <div key={product.productId} className="border rounded-lg p-4 shadow-md text-center">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-xl font-bold mt-2">${product.price}</p>
                    <p className="text-green-600 font-semibold">IN STOCK</p> 
                </div>
            ))}
        </div>
    );
}