import Image from 'next/image';
import Link from 'next/link';

interface Subcategory {
  subcategory: string;
  imageUrl: string;
}

export default async function MarineFishPage() {
  const response = await fetch('http://localhost:8080/api/categories/cat?category=marine fish', { cache: 'no-store' });
  const data = await response.json();
  const subcategories: Subcategory[] = Array.isArray(data) ? data : data.subcategories || [];

  return (
    <div>
      <div className="bg-red-600 text-white p-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-center">Marine Fish on Sale!</h1>
        <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded shadow-md hover:bg-yellow-500">
          Shop now ➔
        </button>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-gray-800">Marine Fish</h2>
        <p className="text-gray-700 mt-2">
          No one offers a better selection of healthy marine fish for the saltwater aquarium
          than FishStore®. From angels, to clownfish, gobies, tangs, wrasse and more... The finest specimens
          in the world are just a click away. Whether you’re a beginner or a seasoned hobbyist, find quality aquatic life for marine aquarium when you shop FishStore®.
          <a href="#" className="text-blue-600 underline">Visit our Diver's Den ></a>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 p-6 max-w-4xl mx-auto">
        {subcategories.map(({ subcategory, imageUrl }: Subcategory) => (
          <div key={subcategory} className="border rounded-lg p-4 shadow-md text-center">
            <Link href={`/category/marine-fish/${subcategory.replace('-', ' ')}`}>
              <div>
                <Image
                  src={imageUrl || '/images/default.jpg'}
                  alt={subcategory}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover mb-2"
                />
              </div>

              <h2 className="text-lg text-blue-500 font-semibold">{subcategory.replace('-', ' ')}</h2> {/* Display subcategory name */}
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
}