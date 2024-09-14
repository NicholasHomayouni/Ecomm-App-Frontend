import Link from 'next/link';


export default async function MarineFishPage() {
  let data = await fetch('http://localhost:8080/api/products/marinefish', { cache: 'no-store' });
  let response = await data.json();
  let subcategories: string[] = response.data || response;
  return (
    <div>
      <h1 className="text-blue-400 flex justify-center font-bold">Marine Fish Subcategories</h1>
      <div className="grid grid-cols-3 gap-6 p-4">
        {subcategories.map((subcategory: string) => (
          <div key={subcategory} className="border rounded-lg p-4 shadow-md text-center">
            <Link href={`/category/marine-fish/${subcategory}`} className="text-black font-bold">
              {subcategory.replace("-", " ")} {/* Display subcategory name */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}