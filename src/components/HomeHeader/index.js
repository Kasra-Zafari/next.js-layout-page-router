import Link from "next/link";

const HomeHeader = () => {
    return (
        <>
                <header>
                    <h1>Home Header</h1>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/about/company">Company</Link>
                        <Link href="/products">Products</Link>
                    </nav>
                </header>
        </>
    )
}

export default HomeHeader;