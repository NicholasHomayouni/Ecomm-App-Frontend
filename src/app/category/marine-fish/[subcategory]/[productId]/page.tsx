import { Product } from "@/app/models/Product";
import { notFound } from "next/navigation";

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

export default async function ProductDetailPage({ params }: { params: { productId: string}}) {
    const product = await getProduct(params.productId);
    if (!product) {
        notFound();
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            
        </div>
    )
}