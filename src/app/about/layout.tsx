export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/products">Products</a></li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer>
                <p>2024 My E-commerce Site</p>
            </footer>
        </div>
    )
}