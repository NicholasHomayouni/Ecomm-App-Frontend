import Link from "next/link";

export default async function FreshwaterFishPage() {
    let data = await fetch('http://localhost:8080/api/products/freshwaterfish', { cache: 'no-store' });
    let response = await data.json();
    let subcategories: string[] = response.data || response;
    return (
        <div>
            <h1>Freshwater Fish</h1>
            <div className="grid grid-cols-3 gap-6 p-4">
                {subcategories.map((subcategory: string) => (
                    <div key={subcategory} className="border rounded-lg p-4 shadow-md text-center">
                        <Link href={`/category/freshwater-fish/${subcategory}`}>
                            {subcategory.replace("-", " ")}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}