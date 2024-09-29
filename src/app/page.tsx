import Image from "next/image";


export default async function Home() {

  return (
    <div className="bg-gray-100">

      {/* Hero Banner / Promotion Section */}
      <section className="bg-blue-200 py-12 text-center">
        <h1 className="text-4xl font-bold">Summer Sale - Save up to 40%</h1>
        <p className="text-lg mt-2">Explore our top picks for aquariums, fish, and accessories!</p>
      </section>

      {/* Featured Collections */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="font-semibold">Top Fish for Your Aquarium</h3>
            <Image src="/fish.png" alt="Top Fish" width={200} height={150} className="rounded"/>
            <a href="#" className="text-blue-500">Shop Fish</a>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="font-semibold">Aquarium Essentials</h3>
            <Image src="/aquarium.png" alt="Aquarium" width={200} height={150} className="rounded"/>
            <a href="#" className="text-blue-500">Shop Supplies</a>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="font-semibold">Decor and Plants</h3>
            <Image src="/decor.png" alt="Decor" width={200} height={150} className="rounded"/>
            <a href="#" className="text-blue-500">Shop Decor</a>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-8 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          <div className="min-w-[150px] bg-white p-4 shadow-md rounded">
            <Image src="/bestseller1.png" alt="Product 1" width={100} height={100} />
            <h3 className="text-sm font-semibold">Tropical Fish Food</h3>
            <p className="text-xs text-gray-500">$15.99</p>
          </div>
          <div className="min-w-[150px] bg-white p-4 shadow-md rounded">
            <Image src="/bestseller2.png" alt="Product 2" width={100} height={100} />
            <h3 className="text-sm font-semibold">LED Aquarium Light</h3>
            <p className="text-xs text-gray-500">$29.99</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
