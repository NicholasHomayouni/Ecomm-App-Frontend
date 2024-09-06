import { Product } from '../../models/Product';

type Params = {
    params: {
        subcategory: string;
    };
};

export default async function MarineFishSubcategoryPage({ params }: Params) {
    const { subcategory } = params;
    let data = await fetch(`http://localhost:8080/api/products/marinefish/${subcategory}`, { cache: "no-store" });
    let response = await data.json();
    let marineFish: Product[] = response.data || response;
    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {marineFish.map((marinefish: Product) => (
                <div key={marinefish.productId} className="border rounded-lg p-4 shadow-md text-center">
                    <h2 className="text-lg font-semibold">{marinefish.name}</h2>
                    <p className="text-sm text-gray-600">{marinefish.description}</p>
                    <p className="text-xl font-bold mt-2">${marinefish.price}</p>
                    <p className="text-green-600 font-semibold">IN STOCK</p>
                </div>
            ))}
        </div>
    );
}