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
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <Image
                src={product.imageUrl || '/images/default.jpg'}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-auto mb-4 object-cover rounded-lg"
            />
            <p className="text-lg mb-2">{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <p className="text-green-600 font-semibold">IN STOCK</p>
        </div>
    )
}