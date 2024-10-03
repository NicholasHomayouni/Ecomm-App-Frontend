import { Product } from "@/app/models/Product";
import Image from "next/image";
import Link from 'next/link';


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
                <Link href={`/category/marine-fish/${subcategory}/${marinefish.productId}`} key={marinefish.productId}>
                    <div key={marinefish.productId} className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl h-full">
                        <Image
                            src={marinefish.imageUrl || '/images/default.jpg'}
                            alt={marinefish.name}
                            width={200}
                            height={100}
                            layout="responsive"
                            className="w-full h-48 object-cover rounded-t-md"
                        />
                        <h2 className="text-black text-lg font-semibold">{marinefish.name}</h2>
                        <p className="text-sm text-gray-600">{marinefish.description}</p>
                        <p className="text-black text-xl font-bold mt-2">${marinefish.price}</p>
                        <p className="text-green-600 font-semibold">IN STOCK</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}