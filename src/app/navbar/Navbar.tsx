export default function Navbar() {
    return (
        <header>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/category/marine-fish">Marine Fish</a></li>
                </ul>
            </nav>
        </header>
    )
}