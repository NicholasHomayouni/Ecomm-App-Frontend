export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>

            <main>{children}</main>

            <footer>
                <p>2024 My E-commerce Site</p>
            </footer>
        </div>
    )
}