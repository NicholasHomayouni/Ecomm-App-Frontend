import Image from 'next/image';
import Link from 'next/link';

// Define the type for subcategory objects
interface Subcategory {
  subcategory: string;
  imageUrl: string;
}

export default async function MarineFishPage() {
  // Fetch subcategories for the 'marine fish' category
  const response = await fetch('http://localhost:8080/api/categories?category=marine fish', { cache: 'no-store' });
  const data = await response.json();
  const subcategories: Subcategory[] = Array.isArray(data) ? data : data.subcategories || [];

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {subcategories.map(({ subcategory, imageUrl }: Subcategory) => (
        <div key={subcategory} className="border rounded-lg p-4 shadow-md text-center">
          <Link href={`/category/marine-fish/${subcategory.replace('-', ' ')}`}>
            <Image
              src={imageUrl || '/images/default.jpg'}
              alt={subcategory}
              width={200}
              height={150}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{subcategory.replace('-', ' ')}</h2> {/* Display subcategory name */}
          </Link>
        </div>
      ))}
    </div>
  );
}