import Link from "next/link";
import { Product } from "../models/Product";

type Params = {
    params: {
        results: string;
    };
};
export default async function SearchResultsPage({ params }: Params) {
    const { results } = params;

    const data = await fetch(`http:localhost:8080/api/products/search?query=${results}`, { cache: "no-store" });
    const response = await data.json();
    const products: Product[] = response.data || response;
    return (
        <div>
            {products.map((product: Product) => (
                <Link href={`/category/`} key={product.productId}> {/*for navigating to each productId page */}

                </Link>
            ))}
        </div>
    );
}