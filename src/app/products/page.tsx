interface Product {
    productId: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    creationDate: string;
}

export default async function ProductPage() {
    let data = await fetch('http://localhost:8080/api/products/all', { cache: "no-store" });
    let response = await data.json();
    let products = response.data || response;
    // console.log(products);
    return (
        <div>
            <ul>
                {Array.isArray(products) ? (
                    products.map((product: Product) => (
                        <li key={product.productId}>
                            {product.productId} {product.name} {product.price} {product.quantity} {product.description}</li>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </ul>
        </div>
    );
}