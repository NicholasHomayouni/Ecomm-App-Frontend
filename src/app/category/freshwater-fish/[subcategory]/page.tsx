import { Product } from "@/app/models/Product";
import Image from "next/image";
import Link from 'next/link';


type Params = {
    params: {
        subcategory: string;
    };
};

export default async function FreshwaterFishSubcategoryPage({ params }: Params) {
    const { subcategory } = params;
    let data = await fetch(`http://localhost:8080/api/products/fresh/${subcategory}`, { cache: "no-store" });
    let response = await data.json();
    let freshwaterFish: Product[] = response.data || response;
    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {freshwaterFish.map((freshy: Product) => (
                <Link href={`/category/freshwater-fish/${subcategory}/${freshy.productId}`} key={freshy.productId}>
                    <div key={freshy.productId} className="border rounded-lg p-4 shadow-md text-center">
                        <Image
                            src={freshy.imageUrl || '/images/default.jpg'}
                            alt={freshy.name}
                            width={200}
                            height={100}
                            layout="responsive"
                            className="w-full h-32 object-cover mb-2"
                        />
                        <h2 className="text-black text-lg font-semibold">{freshy.name}</h2>
                        <p className="text-sm text-gray-600">{freshy.description}</p>
                        <p className="text-black text-xl font-bold mt-2">${freshy.price}</p>
                        <p className="text-green-600 font-semibold">IN STOCK</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}